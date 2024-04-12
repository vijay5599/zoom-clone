// In your server-side code (e.g., using Express)
const express = require('express');
const { StreamClient } = require('@stream-io/node-sdk');
const cors = require('cors'); 

const app = express();
app.use(express.json());


let NEXT_PUBLIC_STREAM_API_KEY='du6ctq2kubjk'
let STREAM_SECRET_KEY='u23ybh4rm3wrm9zhsqaeuqqqvbfb5as5ns4nzzdhny76bfr6kxkxnndtd259azwr'

const STREAM_API_KEY = NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = STREAM_SECRET_KEY;

console.log(STREAM_API_KEY, STREAM_API_SECRET);


app.use(cors({
  origin: '*'
}));

app.post('/api/token', async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);
    // const streamClient = StreamChat.getInstance( STREAM_API_KEY, STREAM_API_SECRET);
    const expirationTime = Math.floor(Date.now() / 1000) + 3600;
    const issuedAt = Math.floor(Date.now() / 1000) - 60;
    const token = streamClient.createToken(userId, expirationTime, issuedAt);
    res.json({ token });
    console.log(token);
    return token
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
