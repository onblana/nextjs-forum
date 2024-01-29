import { connectDB } from "@/utill/database";
import Link from "next/link";
import MainLink from "./MainLink";

export default async function List() {
  const db = (await connectDB).db("nextjs-forum");
  // post컬렉션에 있는 모든 document를 꺼내와서 array로 변환하는 코드
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <Link href='/write'>
        <button>글 작성</button>
      </Link>
      <MainLink />
      {
        result.map((data, i) =>
          <div className="list-item" key={i}>
            <Link prefetch={false} href={'/detail/' + data._id}>
              <h4>{data.title}</h4>
            </Link>
            <Link href={'/edit/' + data._id}>수정🖊️</Link>
            <p>{data.content}</p>
          </div>
        )
      }
    </div>
  )
} 