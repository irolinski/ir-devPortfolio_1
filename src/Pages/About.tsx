import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Trans, useTranslation } from "react-i18next";
import layingAnimation from "../../public/lotties/looking.json";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div
      className="section about-me bg-grey min-h-[100vh] px-2 xxxs:px-16 sm:px-32 md:pb-16 lg:hidden"
      id="about-section"
    >
      <h2 className="section-header text-center">{t("aboutMe.header")} </h2>
      <div className="flex flex-col items-center px-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="float-left py-[20%] pb-8 text-left xs:py-[15%] md:py-[7.5%]"
        >
          <Trans
            i18nKey="aboutMe.mobileText.line_1"
            components={{
              b: (
                <span className="text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl" />
              ),
            }}
          />
        </motion.div>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="float-right pb-8 text-right xxs:py-[15%] md:py-[7.5%]"
        >
          <Trans
            i18nKey="aboutMe.mobileText.line_2"
            components={{
              b: (
                <span className="text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl" />
              ),
            }}
          />
        </motion.div>
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className=" z-10 float-left pb-8 text-left xxs:py-[15%] md:py-[7.5%]"
        >
          <Trans
            i18nKey="aboutMe.mobileText.line_3"
            components={{
              b: (
                <span className="text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl" />
              ),
            }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="flex flex-col items-center pb-16 xxs:pb-36 md:mt-32 lg:hidden"
      >
        <Lottie
          className="relative z-10 w-96 max-w-[60vw] -translate-y-24 pt-24 md:-translate-y-48"
          animationData={layingAnimation}
          loop={true}
        />
      </motion.div>
    </div>
  );
}
