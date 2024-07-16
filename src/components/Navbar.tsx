import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      Navbar
      {/* Mobile */}
      <Link href="/">SUMTHINGSINABOX</Link>
    </div>
  );
}
