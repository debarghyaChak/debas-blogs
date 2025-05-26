import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const POST = async (req) => {
  console.log('Received request:', req.method, req.body);

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const { email, password } = await req.json();

  try {
    await dbConnect();
    console.log('Database connected');

    const user = await User.findOne({ email });
    if (!user) {
      console.error('User not found');
      return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error('Password mismatch');
      return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Login successful');
    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
