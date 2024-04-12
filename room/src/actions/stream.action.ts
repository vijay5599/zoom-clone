import { useUser } from "@clerk/clerk-react";
import { StreamClient } from "@stream-io/node-sdk";


const NEXT_PUBLIC_STREAM_API_KEY='du6ctq2kubjk'
const STREAM_SECRET_KEY='u23ybh4rm3wrm9zhsqaeuqqqvbfb5as5ns4nzzdhny76bfr6kxkxnndtd259azwr'

const STREAM_API_KEY = NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const { user } = await useUser();

  if (!user) throw new Error("User is not authenticated");
  if (!STREAM_API_KEY) throw new Error("Stream API key secret is missing");
  if (!STREAM_API_SECRET) throw new Error("Stream API secret is missing");

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user?.id, expirationTime, issuedAt);

  return token;
};
