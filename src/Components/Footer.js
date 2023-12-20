export default function Footer() {
  return (
    <footer className="w-full bg-primary text-light font-rajdhani flex justify-between py-1">
      <ul className="w-1/3 pl-[20px]">
        <li>
          <a href="Research">Research</a>
        </li>
        <li>
          <a href="#CV">CV</a>
        </li>
        <li>
          <a href="#Teaching">Teaching</a>
        </li>
        <li>
          <a href="#Links">Links</a>
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
