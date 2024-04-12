
// import { ReactNode, useEffect, useState } from 'react';
// import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
// import { useUser } from '@clerk/clerk-react';
// import Loader from '@/components/Loader';

// // import {tokenProvider} from "@/actions/stream.action"

// const NEXT_PUBLIC_STREAM_API_KEY='du6ctq2kubjk'
// const STREAM_SECRET_KEY='u23ybh4rm3wrm9zhsqaeuqqqvbfb5as5ns4nzzdhny76bfr6kxkxnndtd259azwr'

// const STREAM_API_KEY = NEXT_PUBLIC_STREAM_API_KEY;
// const STREAM_API_SECRET = STREAM_SECRET_KEY;

// const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
//   const [videoClient, setVideoClient] = useState<StreamVideoClient>();
//   const { user, isLoaded } = useUser();
//   console.log(user?.id, "userid");
  
  

//   useEffect(() => {
//     if (!isLoaded || !user) return;
//     if (!STREAM_API_KEY) throw new Error('Stream API key is missing');
//     // const tokenProvider = async () => {
//     //   try {
//     //     const response = await fetch(
//     //       "https://pronto.getstream.io/api/auth/create-token?" +
//     //         new URLSearchParams({
//     //           api_key: NEXT_PUBLIC_STREAM_API_KEY,
//     //           user_id: user?.id
//     //         })
//     //     );
//     //     if (!response.ok) {
//     //       throw new Error("Failed to fetch token");
//     //     }
//     //     const { token } = await response.json();
//     //     return token;
//     //   } catch (error) {
//     //     console.error("Error fetching token:", error);
//     //     throw error;
//     //   }
//     // };

//     const client = new StreamVideoClient({
//       apiKey: STREAM_API_SECRET,
//       user: {
//         id: user?.id,
//         name: user?.username || user?.id,
//         image: user?.imageUrl,
//       },
//       tokenProvider,
//     });

//     setVideoClient(client);
//   }, [user, isLoaded]);

//   if (!videoClient) return <Loader />;

//   return <StreamVideo client={videoClient}>{children}</StreamVideo>;
// };

// export default StreamVideoProvider;


import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import axios from 'axios';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/clerk-react';


let NEXT_PUBLIC_STREAM_API_KEY='du6ctq2kubjk'
const API_KEY = NEXT_PUBLIC_STREAM_API_KEY;
console.log(API_KEY);


const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error('Stream API key is missing');

    const fetchToken = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/token', { userId: user?.id });
        const token = response.data.token;
        const client = new StreamVideoClient({
          apiKey: API_KEY,
          user: {
            id: user?.id,
            name: user?.username || user?.id,
            image: user?.imageUrl,
          },
          token,
        });

        setVideoClient(client);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
