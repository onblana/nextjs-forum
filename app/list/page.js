import { connectDB } from "@/utill/database";

export default async function List() {

  const client = await connectDB;
  const db = client.db("nextjs-forum");
  // post컬렉션에 있는 모든 document를 꺼내와서 array로 변환해달라는 코드
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map((data, i) =>
          <div className="list-item" key={i}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        )
      }
    </div>
  )
} 