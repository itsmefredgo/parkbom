import "./Introduction.css";
import Image from "next/image";

import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";

export default function Introduction() {
  return (
    <section className="home-introduction">
      <div className="home-introduction-statement">
        <Image
          className="parkbomlogo"
          src={parkbom_logo}
          alt="Parkbom"
          height={100}
        ></Image>
        <p>
          학문의 시작부터 끝까지, <br />
          수학과 영어의 핵심을 강화하는 특별한 학습 경험을 만나보세요. <br />
          초, 중, 고 학년 모두에게 적합한 최고의 교육을 제공합니다.
        </p>
      </div>
    </section>
  );
}
