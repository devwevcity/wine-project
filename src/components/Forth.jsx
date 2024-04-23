function Forth() {
  return (
    <div
      class="container"
      style={{ margin: "0px", maxWidth: "98%", padding: "0px" }}
    >
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="Second-h1">VISIT US</h1>
          <span className="dot-line"></span>
          <h2 className="Forth-h text-center">
            SPEND A DAY AT OUR VINEYARDS
            <br /> AND EXPLORE
          </h2>
          <span className="dot-line"></span>
          <p className="Second-p text-center">
            If a day (or two!) of wine, food, tastings and scenic views sounds
            like a perfect
            <br /> plan for you, you should definitely come visit us and have a
            good time in our <br />
            beautiful vineyards. With your loved one, your best friends or your
            family, you will
            <br /> for sure have a memorable time.
          </p>
          <h3 className="Second-h2">CLICK TO KNOW MORE</h3>
          <img
            src="/src/assets/down-arrow.jpg"
            alt="Image 1"
            className=""
            style={{ filter: "brightness(0)", width: "15px" }}
          />
        </div>
        <div class="col-6">
          <img
            src="/src/assets/visit.jpg"
            alt="Image 1"
            className=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Forth;
