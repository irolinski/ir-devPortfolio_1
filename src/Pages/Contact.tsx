import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function ContactPage() {
  return (
    <div className="contact section bg-white flex justify-center lg:block">
      <h2 className="section-header text-center lg:hidden text-navy">Contact me!</h2>
      <div className="min-h-[80%] absolute width-[100vw] flex flex-col justify-center items-center xxs:pt-[15vh] md:pt-[7.5vh] lg:relative lg:flex-row">
        <div className="flex flex-col py-16 xxs:py-[7.5vh] lg:p-8 lg:flex-row">
          <FaPhoneAlt className="icon mx-auto mb-4 p-2 w-12 xxs:w-14 sm:w-16 h-auto md:mb-5 lg:w-12" />
          <span className="text-xl xxs:text-2xl sm:text-3xl md:text-4xl text-center lg:text-2xl lg:py-2 lg:px-4 text-navy">
            139 131 222
          </span>
        </div>
        <div className="flex flex-col py-8 xxs:py-[7.5vh] lg:p-8 lg:flex-row">
          <IoIosMail className="icon mx-auto mb-4 p-2 w-12 xxs:w-14 sm:w-16 h-auto md:mb-5 lg:w-12" />
          <span className="text-xl xxs:text-2xl sm:text-3xl md:text-4xl lg:text-2xl lg:py-2 lg:px-4 text-center text-navy">
            xavier@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
