import Image from "next/image";
import Link from "next/link";

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
import { MoveLeft, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <header className="container mb-6 px-20 py-[18px]">
        {/* Desktop Menu */}
        <section className="flex justify-between">
          {/* Left */}
          <div className="flex items-center gap-8">
            {/* Site branding */}
            <Link href="#">
              <Image
                src="/images/logo.svg"
                alt="Branding Logo"
                width={153}
                height={28}
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
          {/*TODO: https://www.npmjs.com/package/react-flags-select */}
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
        </section>
      </header>

      {/* Main */}
      <main className="container mt-16 flex">
        {/* Car Carousel */}
        <section className="max-w-[942px] basis-3/5">
          {/* Carousel */}
          <div className="flex flex-col">
            {/* Preview and Navigation */}
            <div className="mb-16 flex items-center gap-12">
              {/* Navigation Left */}
              <div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] transition-all duration-200 hover:bg-[#0036C3] hover:opacity-85">
                  <MoveLeft className="text-[#0036C3] hover:text-[#DDFFF7]" />
                </button>
              </div>

              {/* Car Preview */}
              <div>
                <Image
                  src="/images/car.png"
                  alt="Car"
                  width={678}
                  height={387}
                />
              </div>

              {/* Navigation Right */}
              <div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] transition-all duration-200 hover:bg-[#0036C3] hover:opacity-85">
                  <MoveRight className="text-[#0036C3] hover:text-[#DDFFF7]" />
                </button>
              </div>
            </div>

            {/* Variants of the car images */}
            <div className="text-center">
              <ul className="flex w-fit gap-4">
                <li>
                  <button className="relative flex h-[79px] w-[89px] items-center rounded-sm border-2">
                    <Image
                      src="/images/car.png"
                      fill={true}
                      style={{
                        objectFit: "contain",
                      }}
                      alt="preview"
                    />
                  </button>
                </li>
                <li>
                  <button className="relative flex h-[79px] w-[89px] items-center rounded-sm border-2">
                    <Image
                      src="/images/car.png"
                      fill={true}
                      style={{
                        objectFit: "contain",
                      }}
                      alt="preview"
                    />
                  </button>
                </li>
                <li>
                  <button className="relative flex h-[79px] w-[89px] items-center rounded-sm border-2">
                    <Image
                      src="/images/car.png"
                      fill={true}
                      style={{
                        objectFit: "contain",
                      }}
                      alt="preview"
                    />
                  </button>
                </li>
                <li>
                  <button className="relative flex h-[79px] w-[89px] items-center rounded-sm border-2">
                    <Image
                      src="/images/car.png"
                      fill={true}
                      style={{
                        objectFit: "contain",
                      }}
                      alt="preview"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Car Details */}
        <section className="basis-2/5 pl-11">Car Details</section>
      </main>
    </>
  );
}
