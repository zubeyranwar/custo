import Image from "next/image";
import custo from "./custo-feature.jpg";
import custo2 from "./custo-feature-2.jpg";
import ParallaxObject from "./components/Parallax";

export default function Showcase() {
  return (
    <div className="relative lg:container max-w-[1355px] min-h-[90vh] overflow-hidden mx-auto pt-[36px] pb-9 lg:px-16 px-16 bg-white text-[#222]">
      <div className="flex justify-between items-center gap-4 mb-[72px]">
        <h4 className="text-xl w-[20%]">
          Custo® is the very first smart mailbox of its kind.
        </h4>
        <h3 className="text-6xl w-[60%]">
          Never worry about a delivery again, Custo® is here.
        </h3>
      </div>
      <div className="flex justify-between gap-6">
        <div>
          <Image
            src={custo}
            alt=""
            className="w-3/2 rounded-lg"
            width={885}
            height={750}
          />
        </div>

        <Image
          src={custo2}
          alt=""
          className="w-1/3 h-1/4 rounded-lg"
          width={430}
          height={565}
        />
      </div>
      <h3 className="text-4xl font-medium mt-8">
        Custo 1
        <span className="text-xl text-[#8e9194] ml-2">From &euro;1.599</span>
      </h3>
    </div>
  );
}
