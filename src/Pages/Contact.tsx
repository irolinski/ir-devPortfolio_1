import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  validateEmailInput,
  validateMessageInput,
  validateNameInput,
  validateStringLength,
} from "../../utils/formValidation";

type InputLength = { min: number; max: number };

const NAME_LENGTH: InputLength = { min: 2, max: 60 };
const EMAIL_LENGTH: InputLength = { min: 5, max: 300 };
const MESSAGE_LENGTH: InputLength = { min: 100, max: 1000 };

export default function ContactScreen() {
  const { t } = useTranslation();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [disableSendButton, setDisableSendButton] = useState(false);

  const validateContactForm = (): boolean => {
    let isValid = true;

    const nameValid =
      validateNameInput(contactForm.name) &&
      validateStringLength(contactForm.name, NAME_LENGTH.min, NAME_LENGTH.max);
    const emailValid =
      validateEmailInput(contactForm.email) &&
      validateStringLength(
        contactForm.email,
        EMAIL_LENGTH.min,
        EMAIL_LENGTH.max,
      );
    const messageValid =
      validateMessageInput(contactForm.message) &&
      validateStringLength(
        contactForm.message,
        MESSAGE_LENGTH.min,
        MESSAGE_LENGTH.max,
      );

    setErrors({
      name: !nameValid,
      email: !emailValid,
      message: !messageValid,
    });

    isValid = nameValid && emailValid && messageValid;
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContactForm()) return;

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      alert("Email sent successfully!");
      setDisableSendButton(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send email.");
    }
  };

  return (
    <div
      className="contact section bg-white flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:min-h-min lg:p-8"
      id="contact-section"
    >
      <h2 className="section-header mb-10 text-center text-3xl font-bold">
        {t("contactMe.header")}
      </h2>

      {/* Contact Form */}
      <div className="w-ful flex flex-row justify-center px-4 pb-8">
        <p className="text-center text-xl font-bold">
          {t("contactMe.description_1")}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="contact-form flex w-full max-w-2xl items-center justify-center space-y-8 xs:max-w-[400px] md:max-w-[660px]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-2 space-x-2 md:flex-row">
          <div className="flex w-full flex-col gap-y-2 ">
            <label className=" font-bold" htmlFor="name-input">
              {t("contactMe.nameLabel")}
            </label>
            <input
              className={`input input-bordered w-full ${errors.name ? "border-red-500" : ""}`}
              type="text"
              name="name"
              id="name-input"
              placeholder={t("contactMe.namePlaceholder")}
              maxLength={NAME_LENGTH.max}
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  name:
                    !validateNameInput(contactForm.name) ||
                    !validateStringLength(
                      contactForm.name,
                      NAME_LENGTH.min,
                      NAME_LENGTH.max,
                    ),
                }))
              }
            />
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="font-bold" htmlFor="e-mail-input">
              {t("contactMe.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              id="e-mail-input"
              placeholder={t("contactMe.emailPlaceholder")}
              maxLength={EMAIL_LENGTH.max}
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  email:
                    !validateEmailInput(contactForm.email) ||
                    !validateStringLength(
                      contactForm.email,
                      EMAIL_LENGTH.min,
                      EMAIL_LENGTH.max,
                    ),
                }))
              }
              className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-1">
          <label className="font-bold" htmlFor="message-input">
            {t("contactMe.messageLabel")}
          </label>
          <textarea
            className={`textarea textarea-bordered w-full ${errors.message ? "border-red-500" : ""}`}
            name="message"
            id="message-input"
            placeholder={t("contactMe.messagePlaceholder")}
            maxLength={MESSAGE_LENGTH.max}
            rows={6}
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                message:
                  !validateMessageInput(contactForm.message) ||
                  !validateStringLength(
                    contactForm.message,
                    MESSAGE_LENGTH.min,
                    MESSAGE_LENGTH.max,
                  ),
              }))
            }
          />
        </div>
        <div className="flex w-full flex-row justify-end px-4">
          <button
            type="submit"
            disabled={disableSendButton}
            className={`contact-form-button btn btn-primary text-white rounded-md px-8 py-2 text-lg ${
              disableSendButton ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {disableSendButton ? t("contactMe.sent") : t("contactMe.send")}
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div
        className="contact section bg-white flex min-h-[100vh] w-full justify-center sm:block sm:min-h-0"
        id="contact-section"
      >
        <div className="w-ful flex flex-row justify-center px-4 py-12 sm:py-6">
          <p className="text-center text-xl font-bold">
            {t("contactMe.description_2")}
          </p>
        </div>
        <div className="width-[100vw] absolute flex min-h-[90%] flex-col items-center justify-center pt-16 xxs:min-h-[80%] sm:relative sm:flex-row sm:justify-around sm:pt-8 lg:justify-center">
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-center justify-center py-16 xxs:py-[7.5vh] lg:flex-row lg:p-8"
          >
            <div className="icon mb-4 flex h-14 w-14 flex-row items-center justify-center">
              <FaPhoneAlt className="h-auto w-full p-3.5" />
            </div>
            <a
              href="tel:+48602484620"
              className="text-center text-xl xxs:text-2xl lg:px-4 lg:py-2 lg:text-2xl"
            >
              +48 602 484 620
            </a>
          </motion.div>
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", delay: 0.2, duration: 0.4 }}
            className="flex flex-col items-center justify-center py-8 xxs:py-[7.5vh] lg:flex-row lg:p-8"
          >
            <div className="icon mb-4 flex h-14 w-14 flex-row items-center justify-center">
              <FaEnvelope className="h-auto w-full p-3.5" />
            </div>
            <a
              className="text-center text-xl xxs:text-2xl lg:px-4 lg:py-2 lg:text-2xl"
              href="mailto:ignacy.rolinski@gmail.com"
            >
              ignacy.rolinski@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
      {/* <div className=" flex min-h-[80vh] flex-col justify-center gap-10 sm:flex-row">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex flex-col items-center space-x-4 space-y-8"
        >
          <FaPhoneAlt className="text-primary text-3xl" />
          <a
            href="tel:+48602484620"
            className="text-gray-700 hover:text-primary text-xl font-medium"
          >
            +48 602 484 620
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="flex flex-col items-center space-x-4 space-y-8"
        >
          <FaEnvelope className="text-primary text-3xl" />
          <a
            href="mailto:ignacy.rolinski@gmail.com"
            className="text-gray-700 hover:text-primary text-xl font-medium"
          >
            ignacy.rolinski@gmail.com
          </a>
        </motion.div>
      </div> */}
    </div>
  );
}
