import Link from "next/link";

const FooterJumbo = () => {
  return (
    <div className="bg-blue-600 py-10 rounded-2xl relative">
      <div className="p-6 lg:px-10">
        <div className="space-y-6 ">
          <h1 className="text-2xl md:text-4xl text-center font-bold text-white">
            Join SMM Expert Blog Post
          </h1>
          <p className="text-white text-center">Try it now and see the magic</p>
          <div>
            <div className="flex justify-center gap-4">
              <Link
                href="https://my.smm-expert.com/"
                className="bg-slate-100 text-blue-700 font-semibold py-4 px-6 rounded-3xl"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between py-10 space-y-6 md:space-y-0">
      <div className="md:flex md:items-center">
        &copy; {new Date().getFullYear()} Cheap SEO. All rights reserved by{" "}
        <a
          href="https://my.smm-expert.com/"
          target="__blank"
          className="underline ms-2"
        >
          my.smm-expert.com
        </a>
      </div>
      <div className="md:flex md:items-center md:gap-5 space-y-6 md:space-y-0">
        <a href="mailto:contact@smm-expert.com/">
          contact@smm-expert.com
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="lg:container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-18 lg:max-w-[1440px]">
      <FooterJumbo />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
