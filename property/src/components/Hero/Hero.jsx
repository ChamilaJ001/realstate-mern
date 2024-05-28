import HeroFilter from "../HeroFilter/HeroFilter";

const Hero = () => {
  return (
    <>
      <section className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="w-full order-2 sm:order-1 ">
          <h1 className="font-bold text-[32px] xl:text-[56px] lg:text-[48px] md:text-[36px] xl:mt-36 lg:mt-36 md:mt-32 tracking-wide mb-0">
            Easy way to find a perfect property
          </h1>

          <p className="mt-5 relative xl:text-[24px] lg:text-[20px] md:text-[18px] text-gray-500 text-justify">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating more than 10 years. Search
            millions of apartments and houses on Finder.
          </p>
        </div>

        {/* Right */}
        <div className="w-full mt-8 sm:mt-0 order-1 sm:order-2">
          <img
            src="/img/hero.jpg"
            alt="hero image"
            width="100%"
            height="auto"
            className="md:w-full md:mt-16"
          />
        </div>
      </section>

      <section className="w-full">
        <HeroFilter />
      </section>
    </>
  );
};
export default Hero;
