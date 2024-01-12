/** MongoClient.connect()는 자주 실행하면 DB 입장에서 부담이 되므로
 * Next.js 서버 띄울 때 한 번만 실행하는 게 좋음
 * 그러므로 메인페이지가 아닌 utill 폴더에 따로 작성
 * 아래 코드는 몽고디비 개발자들이 next.js에서 권장하는 방식 */

import { MongoClient } from "mongodb";

const url = 'mongodb+srv://onblana:RAPyogovR5uU5ePW@cluster0.urzc72i.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true }
let connectDB; // 변수에 저장해놓고 쓰면 매번 실행안되므로 효율적(.connect()가)

/**
 * 그러나 connectDB변수에 저장할지라도 파일을 저장하면 거의 모든 JS파일 코드를 다시 읽기 때문에
 * .connect()가 계속 재실행되지 않도록 개발 단계에선(’developnent’)
 * global 변수를 하나 만들어 두고 그걸 저장해서 재사용 하도록 하는 if문
 */
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB }