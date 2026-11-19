import { Navbar } from "@/components/ui/Navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" w-full flex flex-col justify-center items-center bg-forest">
      <div className="w-[80%]">
        {/* nav-bar */}
        <Navbar />

        <section className="w-full h-[100vh] flex justify-center items-center gap-7">
          <div>
            <div>
              <h1 className="text-9xl text-lime">Ahati</h1>
              <h1 className="text-9xl text-lime">weddings</h1>
            </div>
            <p className="text-background text-2xl">
              Your dream wedding. <br />
              our expert touch
            </p>
            <div className="flex gap-5">
              <Link
                href="./contact"
                className="btn bg-orange text-forest font-bold"
              >
                Start Planning <ArrowRight size={18} className="btn-icon" />
              </Link>

              <Link
                href="./contact"
                className="btn bg-lime text-forest font-bold"
              >
                Start Planning <ArrowRight size={18} className="btn-icon" />
              </Link>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
