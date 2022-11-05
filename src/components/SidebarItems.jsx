import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SidebarItems = ({ menu }) => {
  // we can seperate to another component
  const ActiveLink = ({ children, href }) => {
    const router = useRouter();

    return (
      <Link href={href} className={router.asPath === href ? "active" : ""}>
        {children}
      </Link>
    );
  };

  return (
    <li>
      <ActiveLink href={menu.url}>
        <span>{menu.icon}</span>
        {menu.name}
      </ActiveLink>
    </li>
  );
};

export default SidebarItems;
