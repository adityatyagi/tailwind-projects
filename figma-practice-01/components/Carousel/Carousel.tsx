"use client";

import clsx from "clsx";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Car } from "./Carousel.model";

const CARS: Car[] = [
  {
    id: 1,
    src: "/images/car-1.png",
    isActive: true,
  },
  {
    id: 2,
    src: "/images/car-2.png",
    isActive: false,
  },
  {
    id: 3,
    src: "/images/car-3.png",
    isActive: false,
  },
  {
    id: 4,
    src: "/images/car-4.png",
    isActive: false,
  },
];

const Carousel = () => {
  const [allCars] = useState<Car[]>(CARS);
  const [activeCarouselItem, setActiveCarouselItem] = useState<Car>();

  useEffect(() => {
    const newCarItem: Car = { ...allCars[0], isActive: true };
    setActiveCarouselItem(newCarItem);
  }, []);

  /**
   * Handle the active preview
   * @param id id of the car item from the array of cars
   */
  function handleCarouselActiveItem(id: number) {
    // update the entire Cars array with isActive to true for the chosen preview item
    const updatedCars: Car[] = allCars.map((car) => {
      if (car.id === id) {
        car.isActive = true;
      } else {
        car.isActive = false;
      }
      return car;
    });

    // find the car item that needs the user wants to see preview off
    const updatedActiveCar = updatedCars.find((item) => item.id === id);
    if (updatedActiveCar) {
      setActiveCarouselItem(updatedActiveCar);
    }
  }

  function handleCarouselNavigation(direction: number) {
    // get current index of the active item
    if (activeCarouselItem) {
      let indexOfActiveItem = allCars.findIndex(
        (item) => item.id === activeCarouselItem.id,
      );

      // the user wants to preview the next item in the list
      // if the active element is the last item then set the 1st element as active
      if (direction > 0) {
        indexOfActiveItem =
          indexOfActiveItem < allCars.length - 1 ? ++indexOfActiveItem : 0;
      } else {
        // the user wants to preview the previous item in the list
        // if the active item is the 1st element in the list then set the last element as active
        indexOfActiveItem =
          indexOfActiveItem > 0 ? --indexOfActiveItem : allCars.length - 1;
      }
      const updatedPreviewItem = allCars[indexOfActiveItem];
      handleCarouselActiveItem(updatedPreviewItem.id);
    }
  }
  return (
    <div className="flex flex-col">
      {/* Preview and Navigation */}
      <div className="mb-16 flex items-center gap-12">
        {/* Navigation Left */}
        <div>
          <button
            onClick={() => handleCarouselNavigation(-1)}
            className="duration-400 flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] text-[#0036C3] transition-all hover:bg-[#0036C3] hover:text-[#DDFFF7] hover:opacity-85"
          >
            <MoveLeft />
          </button>
        </div>

        {/* Car Preview */}
        <div className="relative h-[387px] w-[678px]">
          {activeCarouselItem ? (
            <Image
              priority
              src={activeCarouselItem.src}
              alt="Car"
              fill={true}
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 1400px) 678px"
            />
          ) : (
            // Skeleton loaders for heavy image
            <div className="h-full w-full animate-pulse rounded-lg p-4 shadow-md">
              <div className="mb-2 h-full w-full rounded bg-gray-300"></div>
            </div>
          )}
        </div>

        {/* Navigation Right */}
        <div>
          <button
            onClick={() => handleCarouselNavigation(1)}
            className="duration-400 flex h-9 w-9 items-center justify-center rounded-full bg-[#DDFFF7] text-[#0036C3] transition-all hover:bg-[#0036C3] hover:text-[#DDFFF7] hover:opacity-85"
          >
            <MoveRight />
          </button>
        </div>
      </div>

      {/* Variants of the car images */}
      <div className="mx-auto text-center">
        <ul className="flex w-fit gap-4">
          {allCars.map((car) => {
            return (
              <li key={car.id}>
                <button
                  onClick={() => {
                    handleCarouselActiveItem(car.id);
                  }}
                  className={clsx(
                    "relative flex h-[79px] w-[89px] items-center rounded-sm border-2",
                    car.isActive && "border-[#00F3B9]",
                    !car.isActive &&
                      "after:duration-400 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#F5F5F5] after:to-[#F5F5F5] after:opacity-90 after:transition-all hover:after:opacity-0",
                  )}
                >
                  <Image
                    src={car.src}
                    priority
                    fill={true}
                    style={{
                      objectFit: "contain",
                    }}
                    alt="preview"
                    sizes="(max-width: 1400px) 89px"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
