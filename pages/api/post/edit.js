import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method === 'POST') {
    if (request.body.title === '') {
      return response.status(500).json('글 제목이 비어있어 작성에 실패했습니다');
    }
    try {
      let 바꿀거 = {
        title: request.body.title,
        content: request.body.content
      };
      const db = (await connectDB).db("nextjs-forum");
      let result = await db.collection('post').updateOne(
        { _id: new ObjectId(request.body._id) },
        { $set: 바꿀거 }
      );
      return response.redirect(302, '/list');
    } catch (error) {
      return response.status(200).json('에러가 발생했습니다');
    }
  }
  return response.status(200).json('정상 요청이 아님');
}