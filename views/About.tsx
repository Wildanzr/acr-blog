import Image from "next/image";
import { H2, TList, DList } from "@/components";
import {
  BsReception4,
  BsDiagram3Fill,
  BsCurrencyBitcoin,
} from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full h-full bg-center bg-no-repeat bg-cover bg-qr">
      <div className="flex flex-col w-full h-full px-8 pt-12 pb-32 space-y-8 max-w-screen-2xl lg:px-14 backdrop-blur-sm">
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
                <span className="font-bold">Educational Data Mining</span>, and{" "}
                <span className="font-bold">Pattern Recognition</span>.
              </p>
            </div>

            <div className="flex items-start justify-start lg:items-center lg:justify-center">
              <div className="flex flex-col items-start justify-start w-full space-y-6">
                <div className="flex flex-row items-center justify-center space-x-5">
                  <div className="flex px-2 py-2 border-4 rounded-full border-redprimary">
                    <BsReception4 className="text-2xl text-whiteprimary" />
                  </div>
                  <div className="flex flex-col">
                    <TList text="5+ Years of Experience" />
                    <DList text="Remarkable research results over a span of 5+ years" />
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center space-x-5">
                  <div className="flex px-2 py-2 border-4 rounded-full border-redprimary">
                    <BsDiagram3Fill className="text-2xl text-whiteprimary" />
                  </div>
                  <div className="flex flex-col">
                    <TList text="Great Research Team" />
                    <DList text="Skilled team pursuit more breakthrough achievement" />
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center space-x-5">
                  <div className="flex px-2 py-2 border-4 rounded-full border-redprimary">
                    <BsCurrencyBitcoin className="text-2xl text-whiteprimary" />
                  </div>
                  <div className="flex flex-col">
                    <TList text="Well Funded" />
                    <DList text="Works seamlessly with ample financial support" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
