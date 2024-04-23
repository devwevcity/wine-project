function Third() {
  return (
    <div
      class="container"
      style={{ margin: "0px", maxWidth: "98%", padding: "0px" }}
    >
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="Second-h1">OUR WINES</h1>
          <span className="dot-line"></span>
          <p className="Second-p text-center">
            Everything we do at Sula is guided by core values that aim at
            <br /> preserving and enhancing the art of winemaking. We love to
            make
            <br /> wine, and we are happy to have talented winemakers. All you
            have
            <br /> to do is to discover them all!
          </p>
          <h3 className="Second-h2">DISCOVER</h3>
          <img
            src="/src/assets/down-arrow.jpg"
            alt="Image 1"
            className=""
            style={{ filter: "brightness(0)", width: "15px" }}
          />
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col ">
              <img
                src="/src/assets/bottle.jpg"
                alt="Image 1"
                className="Second-i Third-bg"
              />
            </div>
            <div class="col">
              <img
                src="/src/assets/bottle.jpg"
                alt="Image 1"
                className="Second-i Third-bg"
              />
            </div>
            <div class="w-100"></div>
            <div class="col">
              <img
                src="/src/assets/bottle.jpg"
                alt="Image 1"
                className="Second-i Third-bg"
              />
            </div>
            <div class="col">
              <img
                src="/src/assets/bottle.jpg"
                alt="Image 1"
                className="Second-i Third-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Third;
