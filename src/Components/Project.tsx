import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaAppStore, FaDesktop, FaGithub, FaGooglePlay } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Accordion from "./Accordion";

type projectPropTypes = {
  name: string;
  thumbnail_url: string;
  description: string;
  accordion_data: { question: string; answer: JSX.Element | string }[];
  github_url?: string;
  live_url?: string;
  appstore_url?: string;
  googleplay_url?: string;
};

export default function ProjectPage({
  name,
  thumbnail_url,
  description,
  accordion_data,
  github_url,
  live_url,
  appstore_url,
  googleplay_url,
}: projectPropTypes) {
  const { t } = useTranslation();

  return (
    <div className="project-main section flex flex-col items-center justify-center  px-2 pt-12 lg:px-32">
      <motion.div
        className="hidden w-full items-center justify-center md:flex md:flex-col"
        initial={{ translateX: -100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
      >
        <div className=" flex w-3/4 flex-col items-center justify-center">
          <h3 className="text-center text-3xl ">{t(name)}</h3>
          <p className="px-4 text-center xs:text-xl md:w-3/4 md:p-2 md:text-xl">
            {t(description)}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex w-full flex-col items-center justify-center pt-4"
        initial={{ translateX: -100, opacity: 0.2 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="w-1/2 border-t" />
        <div className="flex flex-col items-center">
          <div className="project section flex w-[90%] flex-col items-center lg:flex-row">
            <div className="hidden w-full items-center lg:flex">
              <img
                className="relative mx-auto w-[350px] md:my-2"
                src={thumbnail_url}
              />
            </div>
            <div className="flex flex-col items-center sm:w-3/4">
              <h3 className="pb-8 text-center text-3xl xxs:text-4xl md:hidden md:pb-2">
                {t(name)}
              </h3>
              <img className="px-8 md:my-2 lg:hidden" src={thumbnail_url} />
              <p className=" px-4 py-5 text-center xs:text-lg md:hidden md:p-2">
                {t(description)}
              </p>
              <div className="flex justify-center px-4 pb-5 md:p-4 md:pt-12">
                <Accordion data={accordion_data} />
              </div>
              <div className="my-4 flex flex-col items-center">
                <div className="project-links -mt-2 flex justify-center xxs:pt-8 xs:mt-0 md:pt-0">
                  {github_url && (
                    <React.Fragment>
                      <Tooltip id="gh-tooltip" />
                      <a
                        className="project-icon m-4"
                        href={github_url}
                        target="_blank"
                        data-tooltip-id="gh-tooltip"
                        data-tooltip-content={t(
                          "recentProjects.tooltips.github",
                        )}
                      >
                        <FaGithub />
                      </a>
                    </React.Fragment>
                  )}
                  {live_url && (
                    <React.Fragment>
                      <Tooltip id="live_url-tooltip" />
                      <a
                        className="project-icon m-4"
                        href={live_url}
                        target="_blank"
                        data-tooltip-id="live_url-tooltip"
                        data-tooltip-content={t(
                          "recentProjects.tooltips.live_url",
                        )}
                      >
                        <FaDesktop />
                      </a>
                    </React.Fragment>
                  )}
                  {appstore_url && (
                    <React.Fragment>
                      <Tooltip id="appStore-tooltip" />
                      <a
                        className="project-icon m-4"
                        href={appstore_url}
                        target="_blank"
                        data-tooltip-id="appStore-tooltip"
                        data-tooltip-content={t(
                          "recentProjects.tooltips.appStore",
                        )}
                      >
                        <FaAppStore />
                      </a>
                    </React.Fragment>
                  )}
                  {googleplay_url && (
                    <React.Fragment>
                      <Tooltip id="googlePlay-tooltip" />
                      <a
                        className="project-icon m-4"
                        href={googleplay_url}
                        target="_blank"
                        data-tooltip-id="googlePlay-tooltip"
                        data-tooltip-content={t(
                          "recentProjects.tooltips.googlePlay",
                        )}
                      >
                        <FaGooglePlay />
                      </a>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
