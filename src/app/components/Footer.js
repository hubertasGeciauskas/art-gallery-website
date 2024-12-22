"use client";

import "../sass/components/_footer.scss";
import { usePathname } from "next/navigation";
import Facebook from "../../../public/Facebook";
import Instagram from "../../../public/Instagram";
import Twitter from "../../../public/Twitter";
import LogoDark from "../../../public/LogoDark";
import LogoLight from "../../../public/LogoLight";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className={isHomePage ? "home" : "default"}>
      <div className="logo">{isHomePage ? <LogoLight /> : <LogoDark />}</div>

      <p>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className="socials">
        <Facebook isHomePage={isHomePage} />
        <Instagram isHomePage={isHomePage} />
        <Twitter isHomePage={isHomePage} />
      </div>
    </footer>
  );
}
