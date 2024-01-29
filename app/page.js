import { connectDB } from "@/utill/database";
import Link from "next/link";

export default async function Home() {

  const client = await connectDB;
  const db = client.db("nextjs-forum");
  // post컬렉션에 있는 모든 document를 꺼내와서 array로 변환해달라는 코드
  const result = await db.collection('post').find().toArray();

  return (
    <div>
      <h3>메인페이지</h3>
      <Link href="/list">list</Link>
    </div>
  );
}
