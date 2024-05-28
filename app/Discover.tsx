import React from "react";
import Cta from "./components/Cta";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Carousal from "./components/Carousal";

function Discover() {
  return (
    <div className="relative lg:container max-w-[1355px] text-[#222] bg-white min-h-[120vh] overflow-hidden mx-auto pt-[56px] pb-9 lg:px-16 px-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-9">
          <h3 className="text-xl ">
            Never let a parcel delivery rule your entire schedule again.
          </h3>
        </div>
        <div className="flex flex-col md:w-3/5">
          <h3 className="text-3xl md:text-6xl mb-8">
            Spending time looking for your parcel around the neighbourhood is a
            thing of the past. That &apos;s a promise.
          </h3>
          <div className="flex flex-col pt-6 pb-[80px] transition-all w-fit">
            <div className="group flex items-center space-x-8">
              <Link href="/" className="text-xl">
                Discover our smart mailbox
              </Link>
              <MoveRight width={20} className="group-hover: ml-5" />
            </div>
            <div className="bg-black h-[0.5px] mt-4"></div>
          </div>
        </div>
      </div>
      <Carousal />
    </div>
  );
}

export default Discover;
