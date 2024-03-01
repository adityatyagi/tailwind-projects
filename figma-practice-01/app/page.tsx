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

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <header className="container py-[18px]">
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
                <div className="relative py-2 pr-8 font-bold text-black before:absolute before:right-2 before:translate-y-1 before:rotate-45 before:border-[5px] before:border-solid before:border-black before:border-l-transparent before:border-t-transparent before:bg-transparent">
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
                <div className="relative py-2 pr-8 font-bold text-black before:absolute before:right-2 before:translate-y-1 before:rotate-45 before:border-[5px] before:border-solid before:border-black before:border-l-transparent before:border-t-transparent before:bg-transparent">
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
              <SelectTrigger className="w-[76px]" aria-label="language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">
                  <Image
                    src="/images/flags/in.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2"
                  ></Image>
                </SelectItem>
                <SelectItem value="sg">
                  <Image
                    src="/images/flags/sg.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2"
                  ></Image>
                </SelectItem>
                <SelectItem value="ae">
                  <Image
                    src="/images/flags/ae.svg"
                    width={28}
                    height={18}
                    alt="Flag"
                    className="border-2"
                  ></Image>
                </SelectItem>
              </SelectContent>
            </Select>
            <Link href="#" className="font-bold">
              Log In / Sign Up
            </Link>
          </div>
        </section>
      </header>
      {/* <main>
        <h1>Main Content</h1>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer> */}
    </>
  );
}
