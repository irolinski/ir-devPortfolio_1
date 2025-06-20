import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Trans, useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import windowAnimation from "../../public/lotties/window.json";
// @ts-ignore
import ParticlesComponent from "../Components/Particles_Stars.jsx";
// @ts-ignore
import { Typewriter } from "../Components/Typewriter.jsx";
import i18n from "../i18n.js";

const ChooseLanguageBar = () => {
  const { t } = useTranslation();
  return (
    <div className="choose-language-bar absolute top-8 z-20 flex h-12 w-full flex-col items-center justify-center px-8 sm:relative lg:absolute lg:top-4 lg:items-end">
      <div className="flex flex-col items-center justify-center">
        <span>{t("landing.choose_language")}</span>
        <div className="flex w-24 flex-row justify-between ">
          <a
            href="#landing-page-main"
            className="text-2xl font-bold opacity-50 hover:cursor-pointer hover:opacity-100 focus:opacity-100"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </a>
          <span className="text-xl font-bold opacity-75">|</span>
          <a
            href="#landing-page-main"
            className="text-2xl font-bold opacity-50 hover:cursor-pointer hover:opacity-100 focus:opacity-100"
            onClick={() => i18n.changeLanguage("pl")}
          >
            PL
          </a>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <>
      <ChooseLanguageBar />
      <a
        className="relative flex min-h-[100vh] w-[100vw] p-16 md:hidden"
        href="#landing-page-main"
      >
        <Lottie
          className="relative min-w-[100%] -translate-y-6 hover:cursor-s-resize"
          animationData={windowAnimation}
          loop={true}
        />
      </a>

      <div className="landing-page h-auto min-h-[100vh] px-16 pt-8 md:justify-center lg:ml-12 xl:ml-36 2xl:ml-24">
        <div className="relative w-[100%] xs:pt-12 lg:mt-24 xl:mt-32">
          <div className="float-right mr-8 hidden lg:mr-24 lg:flex lg:flex-col lg:pl-20 xl:mr-52 2xl:ml-16">
            <Tooltip id="github-tooltip" />
            <motion.a
              className="bubble-link github-link"
              href="https://github.com/irolinski"
              target="_blank"
              animate="initial"
              whileHover="grow"
              data-tooltip-id="github-tooltip"
              data-tooltip-content={t("landing.tooltips.github")}
              variants={{
                grow: {
                  scale: 1.1,
                },
                rotate: {
                  rotate: [null, -5, 5, 0],
                  transition: {
                    duration: 10,
                  },
                },
                initial: {
                  y: [-70, -80],
                  x: [-50],
                  rotate: 0,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
            >
              <img className="github-icon" src="/icons/github.svg" />
            </motion.a>
            <Tooltip id="contact-tooltip" />
            <a
              className="bubble-link contact-link"
              href="#contact-section"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content={t("landing.tooltips.contact")}
            >
              <img className="contact-icon" src="/icons/contact.svg" />
            </a>
            <a
              className="bubble-link instagram-link"
              href="https://www.instagram.com/ign_cy"
              target="_blank"
            >
              <img className="instagram-icon" src="/icons/instagram.svg" />
            </a>
          </div>
          <div className="xl:mr-8" id="landing-page-main">
            <motion.div
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              <h1 className="text-4xl font-bold xxs:text-5xl sm:text-6xl lg:ml-12 lg:-translate-y-16 lg:text-6xl">
                {t("landing.greeting")} <br />
              </h1>
            </motion.div>
            <Typewriter
              className="text-sea mt-8 text-3xl font-bold xxs:text-5xl sm:text-6xl lg:ml-12 lg:max-w-[70vw] lg:-translate-y-16 lg:text-7xl"
              text={t("landing.about")}
            />
            <h5 className="pt-4 xxs:text-xl sm:text-2xl md:text-3xl lg:hidden">
              (frontend, backend, ui)
            </h5>
          </div>
        </div>
        <div className=" bottom-0 mx-auto mt-[33%] flex min-h-[50%] items-center justify-center sm:mt-[15%] md:mt-[7%]">
          <div className="section-menu relative flex xxxs:mt-12 xxxs:pt-8 xs:mb-12 xs:mt-0 xs:pb-12 xs:pt-0 md:justify-center md:pt-[25%] lg:hidden">
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#about-section"
            >
              {t("landing.nav.about")}
            </a>
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#projects-section"
            >
              {t("landing.nav.projects")}
            </a>
            <a
              className="menu-button m-2 p-2 sm:p-3 sm:text-xl"
              href="#contact-section"
            >
              {t("landing.nav.contact")}
            </a>
          </div>
          <div className="m-8 hidden lg:block ">
            <p className="about relative m-2 -translate-y-20 p-4 text-left text-xl">
              <Trans
                i18nKey="landing.bio"
                components={{
                  b: <span className="font-bold" />,
                }}
              />
            </p>
          </div>
          <Lottie
            className="hidden max-w-96 -translate-y-20 hover:cursor-crosshair lg:block lg:min-w-[300px] xl:mr-20 xl:min-w-[350px] "
            animationData={windowAnimation}
            loop={true}
          />
        </div>
      </div>
    </>
  );
}
