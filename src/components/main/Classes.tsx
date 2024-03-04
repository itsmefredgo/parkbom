import "./Classes.css";
import Image from "next/image";

export default function HomeClasses() {
  return (
    <section className="home-classes">
      <div className="home-classes-title">
        <div className="classes-title">
          <h1>Classes</h1>
        </div>
        <div className="viewmore-link">
          <button>자세히보기</button>
        </div>
      </div>

      <div className="home-classes-contents">
        <div className="home-classes-math">
          <h1>수학</h1>
          <ul className="home-classes-math-list">
            <li>초등 (1~6)</li>
            <li>중등 (1~3)</li>
            <li>고등 (1~3)</li>
          </ul>
          <ul className="home-classes-math-list">
            <li>경시대회 준비</li>
          </ul>
        </div>
        <div className="home-classes-eng">
          <h1>영어</h1>
          <ul className="home-classes-eng-list">
            <li>초등 (1~6)</li>
            <li>중등 (1~3)</li>
            <li>고등 (1~3)</li>
          </ul>
          <ul className="home-classes-eng-placeholder">
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
