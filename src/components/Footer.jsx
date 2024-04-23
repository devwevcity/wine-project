import { TfiYoutube } from "react-icons/tfi";
function Footer() {
  return (
    <div className="text-center bg-dark">
      <h2 className="Footer-h2">
        Click here to find your favorite Sula near you!
      </h2>
      <img src="/src/assets/logo.png" alt="Image 1" className="Footer-I" />

      {/* social media icon */}
      <div
        class="row  justify-content-center"
        style={{ maxWidth: "98%", marginTop: "15px" }}
      >
        <div className=" col-auto rotated-border-wrapper">
          <div className="rotated-border"></div>
          <div className="content">
            <TfiYoutube />
          </div>
        </div>
        <div className=" col-auto rotated-border-wrapper">
          <div className="rotated-border"></div>
          <div className="content">
            <TfiYoutube />
          </div>
        </div>
        <div className=" col-auto rotated-border-wrapper">
          <div className="rotated-border"></div>
          <div className="content">
            <TfiYoutube />
          </div>
        </div>
        <div className=" col-auto rotated-border-wrapper">
          <div className="rotated-border"></div>
          <div className="content">
            <TfiYoutube />
          </div>
        </div>
      </div>

      {/* eight column */}

      <div
        class="row justify-content-center"
        style={{ maxWidth: "98%", margin: "30px" }}
      >
        <div class="col-auto text-white Footer-EC">GALLERY</div>
        <div class="col-auto text-white Footer-EC"> CAREER </div>
        <div class="col-auto text-white Footer-EC"> ADDRESS</div>
        <div class="col-auto text-white Footer-EC">STORE</div>
        <div class="col-auto text-white Footer-EC">LOCATOR</div>
        <div class="col-auto text-white Footer-EC"> BROCHURE</div>
        <div class="col-auto text-white Footer-EC">INVESTOR RELATIONS</div>
        <div class="col-auto text-white Footer-EC">NEWSLETTERS</div>
      </div>

      {/* five column */}
      <div
        class="row justify-content-center "
        style={{
          maxWidth: "98%",
          justifyContent: "space-evenly",
          padding: "0 8em",
        }}
      >
        <div class="col-auto Footer-FC">RED WINE</div>
        <div class="col-auto Footer-FC">WHITE WINE </div>
        <div class="col-auto Footer-FC"> ROSÉ WINE </div>
        <div class="col-auto Footer-FC">SPARKLING WINE</div>
        <div class="col-auto Footer-FC">WINE IN A CAN</div>
      </div>
      <span className="Footer-line"></span>
      <p className="text-white Footer-bo">
        Sula Vineyards © 2024. All rights reserved.
      </p>
      <p className="text-white">Proudly created by DWC</p>
    </div>
  );
}
export default Footer;
