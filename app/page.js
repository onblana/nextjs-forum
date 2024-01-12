import { connectDB } from "@/utill/database";

export default async function Home() {
  
  const client = await connectDB;
  const db = client.db("nextjs-forum");
  // post컬렉션에 있는 모든 document를 꺼내와서 array로 변환해달라는 코드
  const result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div>메인페이지</div>
  );
}
