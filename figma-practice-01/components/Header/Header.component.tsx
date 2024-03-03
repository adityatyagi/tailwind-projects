"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [top, setTop] = useState<boolean>(true);

  // detect scroll
  function scrollHandler() {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  }

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  return (
    <header
      className={clsx(
        "duration-400 fixed z-30 mb-6 w-full bg-white py-[18px] transition ease-in-out",
        { "bg-white shadow-lg": !top },
      )}
    >
      {/* Desktop Menu */}
      <section className="container">
        <div className="mx-[70px] flex justify-between">
          {/* Left */}
          <div className="flex items-center gap-8">
            {/* Site branding */}
            <Link href="#">
              <Image
                src="/images/logo.svg"
                alt="Branding Logo"
                width={153}
                height={28}
                aria-label="EVFY"
              ></Image>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex">
                <div className="relative py-2 pr-8 font-bold text-primary before:absolute before:right-2 before:translate-y-1 before:rotate-45 before:border-[5px] before:border-solid before:border-black before:border-l-transparent before:border-t-transparent before:bg-transparent hover:opacity-80">
                  <span className="mr-2 inline-block">Find EV Cars</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tesla 2</DropdownMenuItem>
                <DropdownMenuItem>Tesla 3</DropdownMenuItem>
                <DropdownMenuItem>Tesla 4</DropdownMenuItem>
                <DropdownMenuItem>Tesla 5</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex">
                <div className="relative py-2 pr-8 font-bold text-black before:absolute before:right-2 before:translate-y-1 before:rotate-45 before:border-[5px] before:border-solid before:border-black before:border-l-transparent before:border-t-transparent before:bg-transparent hover:opacity-80">
                  <span className="mr-2 inline-block">EV Guides</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tesla 2</DropdownMenuItem>
                <DropdownMenuItem>Tesla 3</DropdownMenuItem>
                <DropdownMenuItem>Tesla 4</DropdownMenuItem>
                <DropdownMenuItem>Tesla 5</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            {/* Select Language */}
            <Select defaultValue="sg">
              <SelectTrigger
                className="relative w-[76px] before:absolute before:right-2 before:-translate-y-1 before:rotate-45 before:border-[5px] before:border-solid before:border-black before:border-l-transparent before:border-t-transparent before:bg-transparent"
                aria-label="language"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">
                  <Image
                    src="/images/flags/in.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2 border-border"
                  ></Image>
                </SelectItem>
                <SelectItem value="sg">
                  <Image
                    src="/images/flags/sg.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2 border-border"
                  ></Image>
                </SelectItem>
                <SelectItem value="ae">
                  <Image
                    src="/images/flags/ae.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2 border-border"
                  ></Image>
                </SelectItem>
              </SelectContent>
            </Select>
            <Link
              href="#"
              className="py-2 font-bold text-black hover:opacity-80"
            >
              Log In / Sign Up
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
