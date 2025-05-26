import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await request.json();

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(body.password, 10);
    
    // Replace the plain text password with the hashed password
    body.password = hashedPassword;

    // Create a new user document
    const newUser = new User(body);

    // Save the user document to the database
    await newUser.save();

    return new Response(JSON.stringify({ message: "User registered successfully", data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
