'use client';
import { useRouter } from "next/navigation";

export default function MainLink() {
  const router = useRouter();
  return (
    <button onClick={() => { router.push('/') }}>메인페이지로 가기</button>
  );
}