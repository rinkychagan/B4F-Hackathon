"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Menu from "./Menu";
import { useScrollPosition } from "./useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header>
      <nav>
        <div
          className={classNames(
            scrollPosition > 150
              ? "bg-white text-black shadow-2xl"
              : "bg-transparent  text-white ",
            "  fixed z-40 transition ease-in-out duration-500  w-full flex justify-between text-xs p-4"
          )}
        >
          <div>
            <Link
              href="/shop"
              className="btn btn-ghost normal-case hover:underline hover:text-lime-400 italic"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="btn btn-ghost normal-case hover:underline hover:text-lime-400 italic"
            >
              About
            </Link>
            <Link
              href="/donate"
              className="btn btn-ghost normal-case hover:underline hover:text-lime-400 italic"
            >
              Donate
            </Link>
          </div>
          <Link href="/" className=" normal-case text-4xl font-mono italic ">
            Fabio
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
