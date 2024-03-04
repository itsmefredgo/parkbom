import "./Inquiries.css";
import Image from "next/image";

export default function HomeInquiries() {
  return (
    <section className="home-inquiries">
      <div className="home-inquiries-title">
        <div className="inquiries-title">
          <h1>Inquiries</h1>
        </div>
        <div className="viewmore-link">
          <button>자세히보기</button>
        </div>
      </div>
      <div className="home-inquiries-contents">위치 밎 이메일</div>
    </section>
  );
}
