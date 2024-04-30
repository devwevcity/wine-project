import { FiYoutube } from "react-icons/fi";
function Footer() {
  return (
    <div className="text-center bg-black">
      <h2 className="text-yellow-500 text-lg py-4">
        Click here to find your favorite Sula near you!
      </h2>
      <img
        src="/src/assets/logo.png"
        alt="Image 1"
        className="max-w-xs mx-auto mb-4"
      />

      {/* social media icon */}
      <div className="flex justify-center space-x-4 mb-8">
        <div className="relative">
          <div className="absolute w-8 h-8 border-2 border-white rotate-45 transform"></div>
          <div className="relative z-10 p-2">
            <FiYoutube className="text-white" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-8 h-8 border-2 border-white rotate-45 transform"></div>
          <div className="relative z-10 p-2">
            <FiYoutube className="text-white" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-8 h-8 border-2 border-white rotate-45 transform"></div>
          <div className="relative z-10 p-2">
            <FiYoutube className="text-white" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-8 h-8 border-2 border-white rotate-45 transform"></div>
          <div className="relative z-10 p-2">
            <FiYoutube className="text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-8">
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">GALLERY</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">CAREER</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">ADDRESS</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">STORE</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">LOCATOR</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">BROCHURE</div>
        <div className="text-white px-2 mb-2 md:mb-0 md:mr-2">
          INVESTOR RELATIONS
        </div>
        <div className="text-white px-2 mb-2 md:mb-0">NEWSLETTERS</div>
      </div>

      {/* five column */}
      <div className="flex flex-wrap justify-center mb-8 space-y-2 md:space-y-0 md:space-x-8 px-4">
        <div className="text-white opacity-50">RED WINE</div>
        <div className="text-white opacity-50">WHITE WINE</div>
        <div className="text-white opacity-50">ROSÉ WINE</div>
        <div className="text-white opacity-50">SPARKLING WINE</div>
        <div className="text-white opacity-50">WINE IN A CAN</div>
      </div>

      <hr className="border-t border-white my-8" />

      <p className="text-white text-sm mb-4">
        Sula Vineyards © 2024. All rights reserved.
      </p>
      <p className="text-white text-sm">Proudly created by DWC</p>
    </div>
  );
}
export default Footer;