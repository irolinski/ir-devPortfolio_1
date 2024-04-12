import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function ContactPage () {
    return(
        <div className='contact section bg-white'>
          <h2 className='section-header text-center'>Contact me!</h2>
          <div className=''>
            <div className='flex flex-col py-16'>
              {/* <img className='icon max-w-16 mx-auto my-2' src="/icons/phone.svg"/> */}
              <FaPhoneAlt className="icon max-w-16 mx-auto mb-4 p-2 w-16 h-auto" />
              <span className='text-2xl text-center'>+48 139 131 222</span>
            </div>
            <div className='flex flex-col py-8'>
              {/* <img className='icon max-w-16 mx-auto my-2' src="icons/mail.svg"/> */}
              <IoIosMail className="icon max-w-16 mx-auto mb-4 p-2 w-16 h-auto" />
              <span className='text-2xl text-center'>xavier@gmail.com</span>
            </div>
          </div>
        </div>
        )
    
}