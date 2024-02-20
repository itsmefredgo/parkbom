import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href={"/"}>Parkbom</Link>
      <Link href={"/location"}>Location</Link>
    </header>
  );
}
