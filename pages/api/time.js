// 현재 시간 알려주는 기능
export default function Time(req, res) {
  return res.status(200).json(Date());
}