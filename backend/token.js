const { StreamClient } = require('@stream-io/node-sdk');

let NEXT_PUBLIC_STREAM_API_KEY='du6ctq2kubjk'
let STREAM_SECRET_KEY='u23ybh4rm3wrm9zhsqaeuqqqvbfb5as5ns4nzzdhny76bfr6kxkxnndtd259azwr'

const STREAM_API_KEY = NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = STREAM_SECRET_KEY;
const userId = 'user_2ejrgVVhrpjnSj9Yiboyb3VGA9y'; // Set a valid userId here

try {
  if (!userId) {
    console.error('User ID is required');
    process.exit(1);
  }

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(userId, expirationTime, issuedAt);

  console.log('Token generated:', token);
} catch (error) {
  console.error('Error generating token:', error);
}
