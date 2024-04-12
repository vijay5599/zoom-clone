"use client"
import { useUser } from '@clerk/clerk-react';
import { useParams } from 'react-router-dom'; 
import Loader from './Loader';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';
import MeetingRoom from './MeetingRoom';
import MeetingSetup from './MeetingSetup';
import useGetCallById from '@/hooks/useGetCallById';
import Alert from './Alert';

// const MeetingPage = () => {
//   const { id } = useParams(); // Accessing dynamic route parameter
//   const { user, isLoaded } = useUser();
//   const [isSetupComplete, setIsSetupComplete] = useState(false)

//   const {call, isCallLoading} = useGetCallById(id)

//   if(!isLoaded || !isCallLoading) return <Loader/>
//   return (
//     <main className="h-screen w-full">
//       <StreamCall call={call}>
//         <StreamTheme>
//           {!isSetupComplete ? (
//             <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
//           ): (
//             <MeetingRoom/>
//           )}
//         </StreamTheme>
//       </StreamCall>
//       <h1>Meeting Page</h1>
//       <p>Meeting ID: {id}</p>
//     </main>
//   );
// };

// 'use client';

// import { useState } from 'react';
// import { useUser } from '@clerk/nextjs';
// import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
// import { useParams } from 'next/navigation';
// import { Loader } from 'lucide-react';

// import { useGetCallById } from '@/hooks/useGetCallById';
// import Alert from '@/components/Alert';
// import MeetingSetup from '@/components/MeetingSetup';
// import MeetingRoom from '@/components/MeetingRoom';

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
