import { H1, CTAButton } from ".";

const Banner = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full space-y-36">
        <div className="flex flex-col">
          <H1 text="Affective Computing" center={true} />
          <H1 text="Research Interest Group" center={true} />
        </div>

        <CTAButton
          href="#welcome"
          textProp={{ text: "Get Started ", center: true }}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />
      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover bg-hero" />
    </section>
  );
};

export default Banner;
