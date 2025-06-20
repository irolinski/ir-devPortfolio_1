import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactPage() {
  return (
    <div
      className="contact section bg-white flex justify-center lg:block"
      id="contact-section"
    >
      <h2 className="section-header text-center lg:hidden">Contact me!</h2>
      <div className="width-[100vw] absolute flex min-h-[90%] flex-col items-center justify-center xxs:min-h-[80%] xxs:pt-[15vh] md:pt-[7.5vh] lg:relative lg:flex-row">
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
          className="flex flex-col py-16 xxs:py-[7.5vh] lg:flex-row lg:p-8"
        >
          <FaPhoneAlt className="icon mx-auto mb-4 h-auto w-12 p-2 xxs:w-14 sm:w-16 md:mb-5 lg:w-12" />
          <a
            href="tel:+48602484620"
            className="text-center text-xl xxs:text-2xl sm:text-3xl md:text-4xl lg:px-4 lg:py-2 lg:text-2xl"
          >
            +48 602 484 620
          </a>
        </motion.div>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.4 }}
          className="flex flex-col py-8 xxs:py-[7.5vh] lg:flex-row lg:p-8"
        >
          <IoIosMail className="icon mx-auto mb-4 h-auto w-12 p-2 xxs:w-14 sm:w-16 md:mb-5 lg:w-12" />
          <a
            className="text-center text-xl xxs:text-2xl sm:text-3xl md:text-4xl lg:px-4 lg:py-2 lg:text-2xl"
            href="mailto:ignacy.rolinski@gmail.com"
          >
            ignacy.rolinski@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}
