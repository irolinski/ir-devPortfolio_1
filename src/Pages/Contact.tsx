import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function ContactPage () {
    return(
        <div className='contact section bg-white flex justify-center'>
          <h2 className='section-header text-center'>Contact me!</h2>
            <div className="min-h-[80%] absolute flex flex-col justify-center items-center xxs:pt-[7.5vh]">
              <div className='flex flex-col py-16 xxs:py-[7.5vh] '>
                <FaPhoneAlt className="icon mx-auto mb-4 p-2 w-12 xxs:w-14 sm:w-20 h-auto md:mb-5" />
                <span className='text-xl xxs:text-2xl sm:text-3xl md:text-4xl text-center'>+48 139 131 222</span>
              </div>
              <div className='flex flex-col py-8 xxs:py-[7.5vh] '>
                <IoIosMail className="icon mx-auto mb-4 p-2 w-12 xxs:w-14 sm:w-20 h-auto md:mb-5" />
                <span className='text-xl xxs:text-2xl sm:text-3xl md:text-4xl text-center'>xavier@gmail.com</span>
              </div>
            </div>
        </div>
        )
    
}