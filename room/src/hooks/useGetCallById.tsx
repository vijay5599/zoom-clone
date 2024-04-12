import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react'

const useGetCallById = (id: string|string[]|undefined) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);
  const client = useStreamVideoClient()


  useEffect(() => {
    if(!client) return
    const loadCall = async () => {
        try {
          // https://getstream.io/video/docs/react/guides/querying-calls/#filters
          const { calls } = await client.queryCalls({ filter_conditions: { id } });
          if (calls.length > 0) setCall(calls[0]);
          setIsCallLoading(false);
        } catch (error) {
          console.error(error);
          setIsCallLoading(false);
        }
      };
    loadCall()
  }, [client, id])
  return {
    call, isCallLoading
  }
}

export default useGetCallById