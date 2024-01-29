import { connectDB } from "@/utill/database";

export default async function handler(request, response) {
  if (request.method === 'POST') {
    if (request.body.title === '') {
      return response.status(500).json('글 제목이 비어있어 작성에 실패했습니다');
    }
    try {
      const db = (await connectDB).db("nextjs-forum");
      const result = await db.collection('post').insertOne(request.body);
      return response.redirect(302, '/list');
    } catch (error) {
      console.log(error);
      return response.status(200).json('에러가 발생했습니다');
    }
  }
  return response.status(200).json('POST 요청이 아님');
}