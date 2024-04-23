import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
function GetInTouch() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/src/assets/visit.jpg"
        alt="Image 2"
        className=""
        style={{ width: "100%", height: "1132px" }}
      />
      <div className="Get-In text-center">
        <h1 className="Get-In-h">GET IN TOUCH</h1>
        <span
          className="dot-line"
          style={{
            display: "block",
          }}
        ></span>
        <FaLocationDot className="Get-In-Ic" />
        <p className="Get-In-text">
          Sula Vineyards, Nashik
          <br />
          Gat 36/2, Govardhan Village, Gangapur-
          <br />
          Savargaon Rd Nashik, Maharashtra 422222
        </p>
        <IoCall className="Get-In-Ic" />
        <p className="Get-In-text">
          +91 9970090010
          <br />
          10 am to 7 pm
          <br />
          General Enquiry, Tours and Tasting, Dining, Bottle
          <br /> Shop, Events and Weddings
        </p>
        <span
          className="dot-line"
          style={{
            display: "block",
          }}
        ></span>
        <FaLocationDot className="Get-In-Ic" />
        <p className="Get-In-text">
          Domaine Sula
          <br />
          115/86, Gangedoddi Village, Chekkere Post,
          <br /> Bangalore - Malur Road, Malur, Karnataka
          <br /> 562160, India
        </p>
        <IoCall className="Get-In-Ic" />
        <p className="Get-In-text">
          +917022940839
          <br />
          10 am to 7 pm
          <br />
          General Enquiry, Tours and Tasting, Bottle & Gift
          <br /> Shop, Dining
        </p>
        <span
          className="dot-line"
          style={{
            display: "block",
          }}
        ></span>
        <IoMail className="Get-In-Ic" />
        <p className="Get-In-text">info@sulawines.com</p>
        <span
          className="dot-line"
          style={{
            display: "block",
            marginBottom: "70px",
          }}
        ></span>
      </div>
    </div>
  );
}
export default GetInTouch;
