"use client";

import * as React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menus = [
  {
    title: "经验/技能",
    href: "#experience",
  },
  {
    title: "项目",
    href: "#projects",
  },
  {
    title: "博客",
    target: "_blank",
    href: "https://blog.huala.fun",
  },
  {
    title: "站点监控",
    target: "_blank",
    href: "https://status.huala.fun",
  },
];

const NotPcScreen = () => {
  return (
    <nav id="hamburger-nav" className="flex justify-between lg:hidden">
      <div className="logo animate__animated animate__bounce">He&apos;s PH</div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MenuOutlined className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menus.map((item) => {
              return (
                <DropdownMenuItem
                  key={item.href}
                  className="cursor-pointer"
                  onClick={() => {
                    if (item.target) {
                      window.open(item.href, item.target);
                    } else {
                      location.href = item.href;
                    }
                  }}>
                  {item.title}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <SwitchDarkMode />
      </div>
    </nav>
  );
};

const SwitchDarkMode = () => {
  const { setTheme } = useTheme();
  return (
    <Button variant="link" size="icon">
      <SunIcon
        onClick={() => setTheme("dark")}
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        onClick={() => setTheme("light")}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
};

const PCScreen = () => {
  return (
    <nav
      id="desktop-nav"
      className="flex justify-between my-4 text-xl max-lg:hidden">
      <div className="logo hvr-buzz-out">
        <a href="/">He&apos;s PH</a>
      </div>
      <div className="flex gap-1 items-center">
        <ul className="nav-links flex gap-4 items-center">
          {menus.map((menu) => (
            <li
              key={menu.href}
              className="hvr-underline-from-center  text-md	hover:underline hover:underline-offset-8">
              <a href={menu.href} target={menu?.target}>
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
        <SwitchDarkMode />
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <>
      {/* 在 lg 以下屏幕隐藏 */}
      <PCScreen />
      {/* 在 lg 以上屏幕隐藏 */}
      <NotPcScreen />
    </>
  );
};

export default Nav;
