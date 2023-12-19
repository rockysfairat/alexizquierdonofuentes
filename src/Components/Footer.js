import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-light font-rajdhani flex justify-between py-1">
      <ul className="w-1/3 pl-[20px]">
        <li>
          <Link href="#CV">CV</Link>
        </li>
        <li>
          <Link href="Research">Research</Link>
        </li>
        <li>
          <Link href="#Teaching">Teaching</Link>
        </li>
        <li>
          <Link href="#Links">Links</Link>
        </li>
      </ul>
      <span className="w-1/3 flex flex-col justify-end items-end pr-[20px]">
        <p>
          Created by{" "}
          <a href="https://yurchenko.vercel.app/" className="hover:underline">
            Ålexander Yurchenko
          </a>
        </p>
      </span>
    </footer>
  );
}
