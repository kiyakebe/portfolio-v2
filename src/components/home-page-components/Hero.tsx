import { ArrowDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-[87vh] flex items-center  relative">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
        <div className="flex flex-col  gap-x-10 md:flex-row">
          <div className=" md:w-1/2 p-6 grid place-items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-xl">I am Kiya Kebe</h3>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
                Passionate Software Engineer.
              </h1>
              <p className="text-xl md:text-2xl">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect you with your clients
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://drive.google.com/file/d/1N6FuYk4mb6A23wrRzh97phtR1tG8Kgky/view?usp=sharing"
                  download="https://drive.google.com/file/d/1N6FuYk4mb6A23wrRzh97phtR1tG8Kgky/view?usp=sharing"
                  target="__blank"
                  className="bg-gradient-to-r from-[#834EF0] to-[#4d279a] text-white flex self-center py-4 px-10 rounded-3xl"
                >
                  Download CV
                  <ArrowDown className="h-6 w-6 me-4 ms-4" />
                </Link>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/kiyakebe/"
                    target="__blank"
                    className="flex items-center border-2 border-[#834EF0] p-3 rounded-full aspect-square"
                  >
                    <Github className="mx-auto group-hover:ms-4 text-[#834EF0] " />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kiyakebe/"
                    target="__blank"
                    className="flex items-center border-2 border-[#834EF0] p-3 rounded-full"
                  >
                    <Linkedin className="mx-auto group-hover:ms-4 text-[#834EF0] " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-6">
            <div className="rounded-lg">
              <Image
                src="/kiya-kebe.webp?height=400&width=400"
                alt="Expert Blog"
                width={450}
                height={400}
                className="rounded-lg grayscale-[90%] border-4 border-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
