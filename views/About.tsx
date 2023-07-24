import Image from "next/image";
import { H2, ItemAbout, Wave1 } from "@/components";
import {
  BsReception4,
  BsDiagram3Fill,
  BsCurrencyBitcoin,
} from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col w-full h-full bg-center bg-no-repeat bg-cover bg-qr"
    >
      <div className="flex flex-col w-full h-full space-y-8 backdrop-blur-sm">
        <div className="flex flex-col px-8 pt-12 mb-16 space-y-8 max-w-screen-2xl lg:px-16">
          <H2 text="About" center={true} />
          <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-5 md:space-y-0">
            <div className="px-5 py-5 unset-img lg:px-12 lg:py-12">
              <Image
                src="/images/acrig.png"
                alt="Affective Computing Research Interest Group"
                fill={true}
                className="object-contain object-center custom-img"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
              <div className="flex flex-col w-full h-full">
                <p className="text-lg font-semibold text-justify font-jakarta text-whiteprimary lg:text-xl">
                  <span className="px-[5px] bg-redprimary">
                    Work To Enhance Technology
                  </span>
                </p>
                <p className="text-sm font-light text-justify indent-8 font-jakarta text-whiteprimary lg:text-base">
                  ACRIG&apos;s research initiative was established in{" "}
                  <span className="font-bold">2017</span> within the esteemed
                  Intelligent Systems Laboratory at{" "}
                  <span className="font-bold">FILKOM UB</span>. The research
                  conducted within ACRIG focuses on cutting-edge topics such as{" "}
                  <span className="font-bold">Affective Computing</span>,{" "}
                  <span className="font-bold">Affective Engineering</span>,{" "}
                  <span className="font-bold">Intelligent Systems</span>,{" "}
                  <span className="font-bold">Data Mining</span>,{" "}
                  <span className="font-bold">Educational Data Mining</span>,
                  and <span className="font-bold">Pattern Recognition</span>.
                </p>
              </div>

              <div className="flex items-start justify-start lg:items-center lg:justify-center">
                <div className="flex flex-col items-start justify-start w-full space-y-6">
                  <ItemAbout
                    title="5+ Years of Experience"
                    description="Remarkable research results over a span of 5+ years"
                    icon={
                      <BsReception4 className="text-2xl text-whiteprimary" />
                    }
                  />

                  <ItemAbout
                    title="Great Research Team"
                    description="Skilled team pursuit more breakthrough achievement"
                    icon={
                      <BsDiagram3Fill className="text-2xl text-whiteprimary" />
                    }
                  />

                  <ItemAbout
                    title="Well Funded"
                    description="Works seamlessly with ample financial support"
                    icon={
                      <BsCurrencyBitcoin className="text-2xl text-whiteprimary" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Wave1 />
      </div>
    </section>
  );
};

export default About;
