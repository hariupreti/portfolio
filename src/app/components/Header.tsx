import React from "react";
import { routes } from "../routes";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="w-full bg-white/5 border-b border-gray-900">
          <div className="grid container mx-auto grid-flow-col px-16 py-8">
            <div>
              <h1 className="font-serif text-3xl font-bold p-2 rounded-lg bg-black w-fit">
                H.U.
              </h1>
            </div>
            <div className="my-auto">
              <ul className="grid grid-flow-col gap-6">
                {routes.map((route, key) => (
                  <li
                    key={"each-list" + key}
                    className="float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full "
                  >
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
