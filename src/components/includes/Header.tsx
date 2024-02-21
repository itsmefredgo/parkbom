import Link from "next/link";
import "./Header.css";

export default function Header() {
  const pages: string[] = ["학원 소개", "수업", "문의 및 위치"];
  return (
    <header className="header">
      <div className="header-navigation">
        <Link href={"/"}>박봄 수학 영어</Link>
        <div className="header-navigation-divider">|</div>
        <Link href={"/aboutus"}>학원 소개</Link>
        <Link href={"/classes"}>수업</Link>
        <Link href={"/inquiries"}>문의 및 위치</Link>
      </div>
      <div className="header-functions">
        <button>dark</button>
        <button>Eng</button>
      </div>
    </header>
  );
}

{
  /* {pages.map((page) => {
          return <Link href={"/" + page.toLowerCase()}>{page}</Link>;
        })} */
}
