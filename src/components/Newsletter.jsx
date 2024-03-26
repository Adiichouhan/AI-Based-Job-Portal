import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText/>
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
            Lorem ipsum dolor sequi enim repudiandae similique aut velit laudantium cumque quos voluptate quisquam dignissimos unde, itaque ut labore?
        </p>

        <div className="w-full space-y-4">
            <input type="email" name="email" id="email"  placeholder="name@email.com" className="w-full block py-2 pl-3 border focus:outline-none"/>

            <input type="submit"  value={"Subscribe"} className="w-full block py-2 pl-3 border focus:outline-none bg-black rounded-sm text-white cursor-pointer font-semibold"/>
            
        </div>
      </div>

      {/* Second Div */}

      <div className="mt-5">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaRocket/>
          Get Notice Faster 
        </h3>
        <p className="text-primary/75 text-base mb-4">
            Lorem ipsum dolor sequi enim repudiandae similique aut velit laudantium cumque quos voluptate quisquam dignissimos unde, itaque ut labore?
        </p>

        <div className="w-full space-y-4">
            <input type="email" name="email" id="email"  placeholder="name@email.com" className="w-full block py-2 pl-3 border focus:outline-none"/>

            <input type="submit"  value={"Upload Your Resume "} className="w-full block py-2 pl-3 border focus:outline-none bg-black rounded-sm text-white cursor-pointer font-semibold"/>
            
        </div>
      </div>

    </div>
  );
};

export default Newsletter;
