import Lottie from "lottie-react";
import layingAnimation from "../../public/lotties/looking.json";

export default function AboutPage() {
  return (
    <div className="section about bg-grey px-16 lg:hidden">
      <h2 className="section-header text-center">About me. </h2>
      <div className="flex flex-col items-center px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <div className="float-left py-[20%] pb-8 text-left xs:py-[25%] sm:py-[15%]">
          <span>My name is Ignacy and I'm a </span>
          <span className="text-xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">
            full-stack
          </span>{" "}
          web developer.
        </div>
        <div className="float-right pb-8 text-right xxs:py-[20%] xs:py-[25%] sm:py-[15%]">
          <span>
            {" "}
            My main stack is{" "}
            <span className="text-xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">
              Node.js
            </span>{" "}
            and{" "}
            <span className="text-xl font-bold  xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              React
            </span>{" "}
            w/ various UI frameworks.
          </span>
        </div>

        <div className=" float-left pb-8 text-left xxs:py-[20%] xs:py-[25%] sm:py-[15%]">
          <span>
            I'm also experienced in{" "}
            <span className="text-xl font-bold  xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              designing UIs
            </span>{" "}
            tailored to my clients' needs.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <Lottie
          className="relative min-w-[100%] -translate-y-6"
          animationData={layingAnimation}
          loop={true}
        />
      </div>
    </div>
  );
}
