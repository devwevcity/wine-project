import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

function Get_In_Touch() {
  return (
    <>
      <img
        src="/src/assets/visit.jpg"
        alt="Image 4"
        className="sm:hidden w-full "
      />
      <div
        className="bg-cover bg-center flex  justify-center items-center text-center"
        style={{
          backgroundImage: 'url("/src/assets/visit.jpg")',
        }}
      >
        <div className="bg-white w-full md:w-1/2 py-8 ">
          <h1 className="text-yellow-500 font-bold text-2xl mb-4">
            GET IN TOUCH
          </h1>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />

          <div className="flex flex-col items-center mb-6">
            <FaLocationDot className="text-yellow-500 w-6 h-6" />
            <p className="ml-2 text-gray-700">
              Sula Vineyards, Nashik <br />
              Gat 36/2, Govardhan Village, Gangapur- <br />
              Savargaon Rd Nashik, Maharashtra 422222
            </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <IoCall className="text-yellow-500 w-6 h-6" />
            <p className="ml-2 text-gray-700">
              +91 9970090010 <br />
              10 am to 7 pm <br />
              General Enquiry, Tours and Tasting, Dining, Bottle <br />
              Shop, Events and Weddings
            </p>
          </div>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
          <div className="flex flex-col items-center mb-6">
            <FaLocationDot className="text-yellow-500 w-6 h-6" />
            <p className="ml-2 text-gray-700">
              Domaine Sula <br />
              115/86, Gangedoddi Village, Chekkere Post, <br />
              Bangalore - Malur Road, Malur, Karnataka <br />
              562160, India
            </p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <IoCall className="text-yellow-500 w-6 h-6" />
            <p className="ml-2 text-gray-700">
              +917022940839 <br />
              10 am to 7 pm <br />
              General Enquiry, Tours and Tasting, Bottle & Gift <br />
              Shop, Dining
            </p>
          </div>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
          <div className="flex flex-col items-center mb-6">
            <IoMail className="text-yellow-500 w-6 h-6" />
            <p className="ml-2 text-gray-700">info@sulawines.com</p>
          </div>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
        </div>
      </div>
    </>
  );
}
export default Get_In_Touch;
