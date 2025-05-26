import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import jwt from 'jsonwebtoken';

export const GET = async (req) => {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await dbConnect();
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ firstName: user.firstName }), { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
