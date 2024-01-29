import { connectDB } from "@/utill/database";

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const db = (await connectDB).db("nextjs-forum");
    const result = await db.collection('post').find().toArray();
    return response.status(200).json(result);
  }
  return response.status(200).json('GET 요청이 아님');
}