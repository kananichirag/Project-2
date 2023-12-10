import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col lg:flex-row pb-20 px-5">
      <div className="w-full lg:w-2/4 mt-14">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="w-full lg:w-2/4 ">
        <h1 className=" text-black text-center text-3xl font-semibold mt-5">
          CONTACT US
        </h1>
        <div className="flex  flex-col  lg:m-5 ">
          <div>
            <p className="flex flex-row m-3 text-center items-center mt-5">
              Any query and info about prodduct feel free to call anytime we
              24X7 vaialible
            </p>
          </div>

          <div className="flex flex-row   items-center mt-5">
            <p className=" flex flex-row     items-center justify-center">
              <BiMailSend size={"25px"} /> : help@ecommerceapp.com
            </p>
          </div>

          <div>
            <p className=" flex flex-row  text-center items-center mt-5">
              <BiPhoneCall size={"25px"} /> : 012-3456789
            </p>
          </div>

          <div>
            <p className=" flex flex-row lg:flex-col    text-center items-center mt-5">
              <BiSupport size={"25px"} /> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
