import { useState } from "react";

export default function Navbar({ href }) {
  return (
    <nav className="fixed backdrop-blur-md w-full h-12 flex justify-center">
      <div className="inline-flex justify-between items-center sm:w-[625px]">
        <a href="/">
          <h1 className="text-white font-bold">Богдан Кокунин</h1>
        </a>
        <div className="sm:inline-flex  h-full hidden gap-8">
          <LinkItem href={href} path={"/works"} text={"Works"} />
          <LinkItem href={href} path={"/posts"} text={"Posts"} />
        </div>
      </div>
    </nav>
  );
}

function LinkItem({ href, path, text }) {
  const active = path === href;

  return (
    <a
      href={path}
      className={`${active ? "bg-white" : ""} ${
        active ? "text-black" : "text-white"
      } h-full pt-3 px-[1rem]`}
    >
      {text}
    </a>
  );
}
