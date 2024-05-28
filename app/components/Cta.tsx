import { MoveRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: String;
}

function Cta(props: Props) {
  return (
    <div className="flex flex-col pt-8 transition-all w-fit">
      <div className="group flex items-center space-x-8">
        <Link href="/" className="text-xl">
          {props.title}
        </Link>
        <MoveRight width={20} className="group-hover: ml-5" />
      </div>
      <div
        className={`bg-white h-[0.5px] mt-4 ${
          props.title == "Discover how it works" ? "bg-[#222]" : "bg-white"
        }`}
      ></div>
    </div>
  );
}

export default Cta;
