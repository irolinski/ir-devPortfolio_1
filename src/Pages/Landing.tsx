import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Trans, useTranslation } from "react-i18next";
import { FaBriefcase, FaGithub, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
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

const LinkIcons = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-20 float-right mr-8 flex flex-col pl-20 lg:mr-24 lg:-translate-y-8 xl:mr-52 2xl:ml-16">
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
        className="bubble-link projects-link"
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

const SectionMenuMobile = () => {
  const { t } = useTranslation();

  return (
    <div className="section-menu relative mb-16 flex w-full flex-col items-center gap-y-6  xs:mt-0 xs:pb-12 xs:pt-0 lg:hidden">
      <motion.a
        href="#about-section"
        className="menu-button flex items-center gap-2 px-4 py-3 sm:p-4 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaUserAlt className="text-base " />
        {t("landing.nav.about")}
      </motion.a>

      <motion.a
        href="#projects-section"
        className="menu-button mt-4 flex items-center gap-2 px-4 py-3 sm:p-4 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <FaBriefcase className="text-base " />
        {t("landing.nav.projects")}
      </motion.a>

      <motion.a
        href="#contact-section"
        className="menu-button mt-6 flex items-center gap-2 px-4 py-3 sm:p-4 "
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
  );
};

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="mb-12">
      <ChooseLanguageBar />
      <a
        className="relative flex flex min-h-[100vh] w-[100vw] flex-row items-center justify-center p-16 md:hidden"
        href="#landing-page-main"
      >
        <Lottie
          className="relative max-w-[320px] -translate-y-6 hover:cursor-s-resize"
          animationData={windowAnimation}
          loop={true}
        />
      </a>
      <div className="landing-page h-auto min-h-[100vh] pt-8 md:justify-center lg:ml-12 lg:px-10 xl:ml-36 2xl:ml-24">
        <div className="relative w-[100%] px-16 xs:pt-12 lg:mt-32 lg:px-0 ">
          <div className="hidden lg:block">
            <LinkIcons />
          </div>
          <div className="lg:mb-12 xl:mr-8" id="landing-page-main">
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
              className="text-sea mt-8 text-3xl font-bold xxs:text-4xl lg:ml-12 lg:max-w-[70vw] lg:-translate-y-16 lg:text-6xl xl:-translate-y-8 xl:text-7xl"
              text={t("landing.about")}
            />
            <h5 className="pt-4 xxs:text-xl sm:text-2xl md:text-3xl lg:hidden">
              (frontend, backend, ui)
            </h5>
          </div>
        </div>
        <div className=" bottom-0 mx-auto mt-[3em] flex min-h-[50%] w-full flex-row  items-center justify-around xs:mt-[15%] md:mt-[7%] lg:mt-0 lg:justify-center">
          {/* <SectionMenuMobile /> */}
          <div className="m-8 w-[60%] lg:block lg:-translate-y-8 ">
            <p className="about relative m-2 -translate-y-20 p-4 text-left text-xl xl:w-[85%] xl:-translate-y-28">
              <Trans
                i18nKey="landing.bio"
                components={{
                  b: <span className="font-bold" />,
                }}
              />
            </p>
          </div>
          <Lottie
            className="mt-[8%] hidden w-[80%] max-w-96 -translate-y-20 hover:cursor-crosshair md:block lg:w-full  lg:min-w-[300px] lg:-translate-y-40 xl:mr-20 xl:min-w-[350px] xl:-translate-y-52 "
            animationData={windowAnimation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
