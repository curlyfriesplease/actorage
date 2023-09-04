import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex flex-row text-center justify-center gap-5 text-orange-200">
        <li>
          <Link href="/" className="hover:underline">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link href="/movie/1234" className="hover:underline">
            {" "}
            Result{" "}
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            {" "}
            About{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
