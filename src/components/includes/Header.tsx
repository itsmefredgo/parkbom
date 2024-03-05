import Link from "next/link";
import "./Header.css";

export default function Header() {
  // Header Navigation Links Generation Helper
  const pages: [string, string][] = [
    ["학원 소개", "/aboutus"],
    ["수업", "/classes"],
    ["문의 및 위치", "/inquiries"],
  ];
  return (
    <header>
      <div className="navbar">
        <Link href={"/"}>박봄 수학 영어</Link>
        <div className="navbar-divider">|</div>
        {/* Header Navigation Links Generation */}
        {pages.map(([displayText, route], index) => (
          <Link key={index} href={route}>
            {displayText}
          </Link>
        ))}
      </div>
      {/* Functions in Nav Bar */}
      <div className="navbar-function">
        {/* Funtion toggling Language change */}
        <button>Eng</button>
      </div>
    </header>
  );
}
