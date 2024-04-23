import Fifth from "./Fifth";
function First_Home() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="/src/assets/f1.jpg"
          alt="Image 2"
          className=""
          style={{ maxWidth: "100%" }}
        />
        <img src="/src/assets/logo.png" alt="Image 1" className="First-l" />
        <h1 className="First-h1">SULA</h1>
        <h2 className="First-h2">VINEYARDs</h2>
        <a className="First-a">
          <img src="/src/assets/down-arrow.jpg" alt="Image 2" className="" />
        </a>

        <div className="Home-dot">
          <Fifth />
        </div>
      </div>
    </>
  );
}
export default First_Home;
