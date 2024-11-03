export default function Footer() {
  return (
    <footer className="w-full bg-primary font-rajdhani flex justify-between py-1">
      <ul className="w-1/3 pl-[20px]">
        <li>
          <a href="Research" className="text-light">
            Research
          </a>
        </li>
        <li>
          <a href="#CV" className="text-light">
            CV
          </a>
        </li>
        <li>
          <a href="#Teaching" className="text-light">
            Teaching
          </a>
        </li>
        <li>
          <a href="#Resources" className="text-light">
            Resources
          </a>
        </li>
      </ul>
      <span className="w-1/3 flex flex-col justify-end items-end pr-[20px]">
        <p>
          Created by{" "}
          <a
            href="https://yurchenko.vercel.app/"
            className="hover:underline text-light"
          >
            Oleksandr Yurchenko
          </a>
        </p>
      </span>
    </footer>
  );
}
