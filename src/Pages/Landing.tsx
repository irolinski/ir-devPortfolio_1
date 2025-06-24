import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaBriefcase, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import windowAnimation from "../assets/lotties/window.json";
// @ts-ignore
import ParticlesComponent from "../Components/Particles_Stars.jsx";
// @ts-ignore
import { Typewriter } from "../Components/Typewriter.jsx";
import i18n from "../i18n.js";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar absolute top-8 z-20 flex h-12 w-full max-w-7xl flex-row items-start justify-center  px-8 sm:relative lg:absolute lg:top-4 lg:justify-between">
      <div className=" hidden flex-col items-center justify-center lg:flex">
        <img
          src="./../src/assets/icons/logo-white.svg"
          width={40}
          className="opacity-50 hover:opacity-100"
        />
      </div>
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

const LinkIcons = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-30 float-right mr-8 flex flex-col pl-20 md:translate-y-8 lg:mr-24 lg:-translate-y-8 2xl:ml-16">
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
          grow: { scale: 1.1 },
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: { duration: 10 },
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
        <FaGithub className="link-icon" />
      </motion.a>
      <Tooltip id="contact-tooltip" />
      <motion.a
        className="bubble-link contact-link"
        href="#contact-section"
        animate="initial"
        whileHover="grow"
        data-tooltip-id="contact-tooltip"
        data-tooltip-content={t("landing.tooltips.contact")}
        variants={{
          grow: { scale: 1.1 },
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: { duration: 10 },
          },
          initial: {
            y: [-70, -80],
            x: [50],
            rotate: 0,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        <MdContactPhone className="link-icon" />
      </motion.a>
      <Tooltip id="projects-tooltip" />
      <motion.a
        className="bubble-link projects-link hidden lg:block"
        href="#projects-section"
        animate="initial"
        whileHover="grow"
        data-tooltip-id="projects-tooltip"
        data-tooltip-content={t("landing.tooltips.projects")}
        variants={{
          grow: { scale: 1.1 },
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: { duration: 10 },
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
        <FaBriefcase className="link-icon" />
      </motion.a>
    </div>
  );
};

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-screen-wrapper">
        <a
          className="relative flex min-h-[100vh] w-[100vw] flex-row items-center justify-center p-16 md:hidden"
          href="#landing-page-main"
        >
          <Lottie
            className="relative max-w-[320px] -translate-y-6 hover:cursor-s-resize"
            animationData={windowAnimation}
            loop={true}
          />
        </a>
        <div className="landing-page h-auto min-h-[100vh] pt-8 xxs:min-h-[90vh] sm:min-h-[50vh] md:justify-center lg:ml-12 lg:px-10 xl:ml-36 2xl:ml-24">
          <div className="relative w-[100%] px-16 xs:pt-12 md:mt-6 lg:mt-32 lg:px-0 ">
            <div className="z-20 hidden md:block xl:-translate-y-12">
              <LinkIcons />
            </div>
            <div
              className="pointer-events-none xl:mb-12 xl:mr-8"
              id="landing-page-main"
            >
              <motion.div
                initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: "spring", delay: 0.2, duration: 1 }}
              >
                <h1 className="text-4xl font-bold xxs:text-5xl lg:ml-12 lg:-translate-y-16 lg:text-5xl xl:text-6xl">
                  {t("landing.greeting")} <br />
                </h1>
              </motion.div>
              <Typewriter
                className="text-sea pointer-events-none mt-8 text-3xl font-bold xxs:text-4xl sm:text-4xl md:max-w-[80vw] lg:ml-12 lg:max-w-[60vw] lg:-translate-y-16 lg:text-7xl xl:mt-4
         xl:-translate-y-8"
                text={t("landing.about")}
              />
              <h5 className="pt-1 xxs:text-xl sm:text-2xl md:pb-6 lg:hidden">
                (frontend, backend, ui)
              </h5>
            </div>
          </div>
          <div className=" bottom-0 mx-auto mt-[7%] flex min-h-[50%] w-full flex-row  items-center justify-around md:mt-0 lg:justify-center">
            <div className="mt-4 w-3/4 px-2 sm:m-8 md:w-[60%] lg:block lg:-translate-y-8 ">
              <p className="about relative text-left leading-7 sm:m-2 sm:-translate-y-20 sm:p-4 sm:text-xl lg:text-2xl xl:mb-8 xl:mt-4 xl:w-[85%] xl:-translate-y-24">
                <Trans
                  i18nKey="landing.bio"
                  components={{
                    b: <span className="font-bold" />,
                  }}
                />
              </p>
              <div className="section-menu relative mt-20 flex w-full -translate-y-4 flex-row items-center justify-center sm:-translate-y-12 md:mt-0 xl:-translate-y-24">
                <motion.a
                  href="#contact-section"
                  className="menu-button bg-white flex items-center gap-2 px-4 py-6 xs:px-14"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <FaPhoneAlt className="text-base " />
                  {t("landing.nav.contact")}
                </motion.a>
              </div>
            </div>
            <Lottie
              className="mt-[8%] hidden w-[80%] max-w-[320px] -translate-y-20 hover:cursor-crosshair md:mt-36 md:block md:-translate-y-40  lg:w-full lg:min-w-[300px] xl:mr-20 xl:min-w-[350px] xl:-translate-y-64 "
              animationData={windowAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
