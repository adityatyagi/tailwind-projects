import Link from "next/link";
import Image from "next/image";
import {
  Antenna,
  FuelIcon,
  Gauge,
  MoveLeft,
  MoveRight,
  Star,
  Thermometer,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header/Header.component";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Header />

      {/* Main */}
      <main className="container pt-24">
        <div className="grid min-h-screen grid-cols-3 gap-y-[74px] bg-[#FBFCFE]">
          {/* Car Carousel */}
          <section className="col-span-2">
            {/* Carousel */}
            <Carousel />
          </section>

          {/* Car Details */}
          <section className="bg-white pl-11">
            {/* Pill */}
            <div className="mb-2">
              <span className="rounded-[64px] bg-[#DDFFF7] px-3 py-2 font-bold text-[#0036C3]">
                NEW
              </span>
            </div>

            {/* Car Name */}
            <h4 className="mb-2 text-[34px] font-semibold">
              2021 Tesla Model 3
            </h4>

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
              Tesla believes in accelerating the world's transition to
              sustainable energy with electric cars.
            </h5>

            <Link
              href="#"
              className="mb-10 inline-block text-[#0036C3] underline"
            >
              View the Tesla collection
            </Link>

            {/* Accordian */}
            <Accordion type="single" collapsible className="pb-[74px]">
              <AccordionItem value="item-1" className="border-t-[1px]">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis totam ducimus libero, veritatis facere architecto.
                  Maxime aperiam, corrupti labore similique, iure repudiandae
                  quas dolores in natus quasi temporibus nihil suscipit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Product Highlights</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis totam ducimus libero, veritatis facere architecto.
                  Maxime aperiam, corrupti labore similique, iure repudiandae
                  quas dolores in natus quasi temporibus nihil suscipit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Delivery & Warranty</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis totam ducimus libero, veritatis facere architecto.
                  Maxime aperiam, corrupti labore similique, iure repudiandae
                  quas dolores in natus quasi temporibus nihil suscipit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* About this car */}
          <section className="col-span-3 mb-14 py-14">
            <h4 className="mb-[42px] text-4xl font-semibold text-black">
              About this car
            </h4>

            <ul className="flex gap-[120px]">
              <li className="flex gap-6">
                <FuelIcon className="text-[#0036C3]" />
                <span className="text-xl text-black opacity-[87%]">
                  Diesel Fuel
                </span>
              </li>
              <li className="flex gap-6">
                <Antenna className="text-[#0036C3]" />
                <span className="text-xl text-black opacity-[87%]">
                  Automatic Transmission
                </span>
              </li>
              <li className="flex gap-6">
                <Gauge className="text-[#0036C3]" />
                <span className="text-xl text-black opacity-[87%]">
                  11,594 Miles
                </span>
              </li>
              <li className="flex gap-6">
                <Thermometer className="text-[#0036C3]" />
                <span className="text-xl text-black opacity-[87%]">
                  3.5L Displacement
                </span>
              </li>
            </ul>
          </section>

          {/* Specifications */}
          <section className="col-span-3 mb-14">
            <h4 className="mb-[42px] text-4xl font-semibold text-black">
              Specifications
            </h4>

            <div className="mb-[70px] grid grid-cols-3 gap-x-[107px]">
              {/* Exterior */}
              <div>
                <h6 className="mb-4 text-xl font-semibold">Exterior</h6>
                <table className="border-separate">
                  <tbody className="-mx-10 -my-2 block border-spacing-x-10 border-spacing-y-2">
                    <tr>
                      <td className="text-xl opacity-[87%]">Body Style</td>
                      <td className="text-xl opacity-[87%]">Hatchback</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Exterior Colour</td>
                      <td className="text-xl opacity-[87%]">Blue</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Length</td>
                      <td className="text-xl opacity-[87%]">175''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Wheelbase</td>
                      <td className="text-xl opacity-[87%]">106''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Width</td>
                      <td className="text-xl opacity-[87%]">69.7''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Full Width</td>
                      <td className="text-xl opacity-[87%]">NA</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Clearance</td>
                      <td className="text-xl opacity-[87%]">6''</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Interior */}
              <div>
                <h6 className="mb-4 text-xl font-semibold">Interior</h6>
                <table className="mb-6 border-separate">
                  <tbody className="-mx-10 -my-2 block border-spacing-x-10 border-spacing-y-2">
                    <tr>
                      <td className="text-xl opacity-[87%]">Seating</td>
                      <td className="text-xl opacity-[87%]">5 Adults</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Interior Colour</td>
                      <td className="text-xl opacity-[87%]">NA</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Head Room Front</td>
                      <td className="text-xl opacity-[87%]">41''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Head Room Rear</td>
                      <td className="text-xl opacity-[87%]">37''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Leg Room Front</td>
                      <td className="text-xl opacity-[87%]">42''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">Leg Room Rear</td>
                      <td className="text-xl opacity-[87%]">33''</td>
                    </tr>
                    <tr>
                      <td className="text-xl opacity-[87%]">
                        Shoulder Room Front
                      </td>
                      <td className="text-xl opacity-[87%]">54''</td>
                    </tr>
                  </tbody>
                </table>

                <Link
                  href="#"
                  className="group flex items-center text-sm text-[#0036C3]"
                >
                  Show More{" "}
                  <MoveRight className="duration-400 ml-2 text-sm transition-all group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Performance and Charging */}
              <div>
                <div className="flex flex-col gap-y-14">
                  <div className="bg-red">
                    <h6 className="mb-4 text-xl font-semibold">
                      BEV Performance
                    </h6>
                    <table className="mb-6 border-separate">
                      <tbody className="-mx-10 -my-2 block border-spacing-x-10 border-spacing-y-2">
                        <tr>
                          <td className="text-xl opacity-[87%]">Horsepower</td>
                          <td className="text-xl opacity-[87%]">107 hp</td>
                        </tr>
                        <tr>
                          <td className="text-xl opacity-[87%]">MPGe</td>
                          <td className="text-xl opacity-[87%]">102</td>
                        </tr>
                        <tr>
                          <td className="text-xl opacity-[87%]">Top Speed</td>
                          <td className="text-xl opacity-[87%]">90 mph</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h6 className="mb-4 text-xl font-semibold">Charging</h6>
                    <table className="mb-6 border-separate">
                      <tbody className="-mx-10 -my-2 block border-spacing-x-10 border-spacing-y-2">
                        <tr>
                          <td className="text-xl opacity-[87%]">
                            Electric Range
                          </td>
                          <td className="text-xl opacity-[87%]">73 Mi.</td>
                        </tr>
                        <tr>
                          <td className="text-xl opacity-[87%]">
                            Battery Size
                          </td>
                          <td className="text-xl opacity-[87%]">24 kWh</td>
                        </tr>
                        <tr>
                          <td className="text-xl opacity-[87%]">
                            Cost to charge (full)
                          </td>
                          <td className="text-xl opacity-[87%]">$2.50</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link
                      href="#"
                      className="flex text-sm text-[#0036C3] underline"
                    >
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="duration-400 h-16 w-72 border-[1px] border-[#0036C3] text-center font-semibold text-[#0036C3] transition-all hover:bg-[#0036C3] hover:text-white">
                Show all specifications
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
