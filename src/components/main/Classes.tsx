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
          <ul>
            <li>초등 (1~6)</li>
            <li>중등 (1~3)</li>
            <li>고등 (1~3)</li>
          </ul>
          <ul>
            <li>경시대회 준비</li>
          </ul>
        </div>
        <div className="home-classes-eng">
          <h1>영어</h1>
          <ul>
            <li>초등 (1~6)</li>
            <li>중등 (1~3)</li>
            <li>고등 (1~3)</li>
          </ul>
        </div>
      </div>
      {/* <div className="home-classes-contents">
        <div className="home-classes-math">
          <h2>수학</h2>
          <div className="home-classes-math-detail">
            <ul>
              <li>초</li>
              <li>중</li>
              <li>고고</li>
            </ul>
          </div>
        </div>

        <div className="home-classes-english">
          <h2>영어</h2>
          <div className="home-classes-english-detail"><ul>
              <li>초</li>
              <li>중</li>
              <li>고고</li>
            </ul></div>
        </div>

        <div className="home-classes-competition">
          <h2>경시대회 준비</h2>
          <div className="home-classes-english-detail">
            경시대회 준비 할까 말까
          </div>
        </div>
      </div> */}
    </section>
  );
}
