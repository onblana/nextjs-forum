export default function Write() {
  return (
    <div className="p-20">
      <h4>글 작성 페이지</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" id="title" name="title" placeholder="글 제목" />
        <input type="text" id="content" name="content" placeholder="글 내용" />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}