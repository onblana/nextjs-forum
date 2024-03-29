import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("nextjs-forum");
  const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div>
      <h3>상세페이지</h3>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}