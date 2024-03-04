import "./Methods.css";
import Image from "next/image";

export default function HomeMethods() {
  return (
    <section className="home-methods">
      <div className="home-methods-title">
        <div className="methods-title">
          <h1>About Us</h1>
        </div>
        <div className="viewmore-link">
          <button>자세히보기</button>
        </div>
      </div>
      <div className="home-methods-contents">
        <div className="methods-contents-grid">
          <div className="contents-grid-item">소수정예</div>
          <div className="contents-grid-item">개별지도</div>
          <div className="contents-grid-item">학교별 맞춤 전략</div>
          <div className="contents-grid-item">실전 모의고사</div>
        </div>
      </div>
    </section>
  );
}
