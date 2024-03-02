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
import { MoveLeft, MoveRight, Star } from "lucide-react";

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
      <main className="container mt-16 grid grid-cols-3 bg-[#FBFCFE]">
        {/* Car Carousel */}
        <section className="col-span-2 max-w-[942px] ">
          {/* Carousel */}
          <div className="flex flex-col">
            {/* Preview and Navigation */}
            <div className="mb-16 flex items-center gap-12">
              {/* Navigation Left */}
              <div>
                <button className="duration-400 flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] text-[#0036C3] transition-all hover:bg-[#0036C3] hover:text-[#DDFFF7] hover:opacity-85">
                  <MoveLeft />
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
                <button className="duration-400 flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] text-[#0036C3] transition-all hover:bg-[#0036C3] hover:text-[#DDFFF7] hover:opacity-85">
                  <MoveRight />
                </button>
              </div>
            </div>

            {/* Variants of the car images */}
            <div className="mx-auto text-center">
              <ul className="flex w-fit gap-4">
                <li>
                  <button className="after:duration-400 relative flex h-[79px] w-[89px] items-center rounded-sm border-2	bg-blend-normal after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#F5F5F5] after:to-[#F5F5F5] after:opacity-90 after:transition-all hover:after:opacity-0">
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
                  <button className="relative flex h-[79px] w-[89px] items-center rounded-sm border-2 border-[#00F3B9]">
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
                  <button className="after:duration-400 relative flex h-[79px] w-[89px] items-center rounded-sm border-2	bg-blend-normal after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#F5F5F5] after:to-[#F5F5F5] after:opacity-90 after:transition-all hover:after:opacity-0">
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
                  <button className="after:duration-400 relative flex h-[79px] w-[89px] items-center rounded-sm border-2	bg-blend-normal after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#F5F5F5] after:to-[#F5F5F5] after:opacity-90 after:transition-all hover:after:opacity-0">
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
        <section className="pl-11">
          {/* Pill */}
          <div className="mb-2">
            <span className="rounded-[64px] bg-[#DDFFF7] px-3 py-2 font-bold text-[#0036C3]">
              NEW
            </span>
          </div>

          {/* Car Name */}
          <h4 className="mb-2 text-[34px] font-semibold">2021 Tesla Model 3</h4>

          {/* Car VIN and Model */}
          <div className="mb-4 flex gap-4">
            <span className="text-black opacity-35">VIN</span>
            <span className="text-black">JN1AZ0CPOBT009448</span>
          </div>

          {/* Rating */}
          <div className="mb-6 flex gap-1">
            <Star className="fill-[#FFB400] stroke-[#FFB400]" />
            <Star className="fill-[#FFB400] stroke-[#FFB400]" />
            <Star className="fill-[#FFB400] stroke-[#FFB400]" />
            <Star className="fill-[#FFB400] stroke-[#FFB400]" />
            <Star className="fill-[#FFB400] stroke-[#FFB400]" />
          </div>

          <h5 className="mb-6 text-2xl">$41,103</h5>

          <hr className="mb-6 text-[#BDBDBD]" />

          {/* color */}
          <div className="mb-16 p-1">
            <p className="mb-[18px] font-semibold">Color</p>
            <div className="flex items-center justify-between">
              {/* Select Colors */}
              <div className="flex justify-between gap-4">
                <button className="h-7 w-7 rounded-full bg-primary hover:opacity-80"></button>
                <button className="h-7 w-7 rounded-full bg-destructive hover:opacity-80"></button>
                <button className="h-7 w-7 rounded-full bg-[#0036C3] hover:opacity-80"></button>
                <button className="h-7 w-7 rounded-full border-2 bg-white outline outline-1 outline-[#E0E0E0] ring-1 ring-[#00F3B9] ring-offset-4 hover:opacity-80"></button>
              </div>

              <p className="text-xs font-semibold text-black">SILVER</p>
            </div>
          </div>

          {/* Order Now Button */}
          <button className="duration-400 mb-6 h-[62px] w-full items-center rounded-sm bg-[#0036C3] font-semibold text-[#00F3B9] transition-all hover:opacity-80">
            Order Now
          </button>
          <p className="mb-[72px] text-center text-black opacity-35">
            Estimated within 16 Aug – 23 Aug
          </p>

          <h5 className="mb-6 text-2xl">
            Tesla believes in accelerating the world's transition to sustainable
            energy with electric cars.
          </h5>

          <Link
            href="#"
            className="mb-10 inline-block text-[#0036C3] underline"
          >
            View the Tesla collection
          </Link>
        </section>
      </main>
    </>
  );
}
