import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {

  const db = (await connectDB).db("nextjs-forum");
  const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" id="title" name="title" defaultValue={result.title} />
        <input type="text" id="content" name="content" defaultValue={result.content} />
        <input style={{ display: 'none' }} type="text" name="_id" defaultValue={result._id.toString()} />
        <button type="submit">저장</button>
      </form>
    </div>
  )
}