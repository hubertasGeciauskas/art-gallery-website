import Right from "../../../public/Right";
import Left from "../../../public/Left";
import Link from "next/link";
import "../sass/components/_button.scss";
export default function Button({ children, href, className }) {
  if (href) {
    const isHomePage = href === "/";

    return isHomePage ? (
      <Link href={href} className={`${className} btn`}>
        <div className="icon">
          <Left />
        </div>
        <span className="button-content">{children.toUpperCase()}</span>
      </Link>
    ) : (
      <Link href={href} className={`${className} btn`}>
        <span className="button-content">{children.toUpperCase()}</span>
        <div className="icon">
          <Right />
        </div>
      </Link>
    );
  }

  return <button>{children}</button>;
}
