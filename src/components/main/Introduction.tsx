import "./Introduction.css";
import Image from "next/image";

import frederick_snow_1 from "@/assets/images/placeholder.png";

export default function Introduction() {
  return (
    <section className="home-introduction">
      <div className="home-introduction-statement">
        <p>
          여기에 학원 철학을 적을 예정이오 울라울라울라울라 울라울라
          <br />
          울라울라 울라울라울라울라 울라울라 울라울라 <br />
          울라울라 울라울라 울라울라울라울라 울라울라
          <br />
        </p>
      </div>
      <div className="home-introduction-image">
        <Image
          className="main-introduction-photo-item"
          src={frederick_snow_1}
          alt="Frederick Go"
          // layout={"fill"}
          // objectFit={"contain"}
        ></Image>
      </div>
    </section>
  );
}
