import { MoveRight } from "lucide-react";
import Link from "next/link";

function Cta() {
  return (
    <div className="flex flex-col pt-8 transition-all w-fit">
      <div className="group flex items-center space-x-3">
        <Link href="/" className="text-xl">
          Discover our smart mailbox
        </Link>
        <MoveRight width={20} className="group-hover: ml-5" />
      </div>
      <div className="bg-white h-[0.5px] mt-4"></div>
    </div>
  );
}

export default Cta;
