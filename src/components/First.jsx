function First() {
  return (
    <div
      className="flex flex-col justify-center items-center  bg-cover bg-center text-center bg-image"
      style={{ backgroundImage: 'url("/src/assets/f1.jpg")' }}
    >
      <img
        src="/src/assets/logo.png"
        alt="Image 1"
        className="mb-14 w-20 md:w-[30%] lg:w-[10%]"
        style={{ marginTop: "50px" }}
      />
      <h1
        className="font-Newtext  font-medium text-white text-shadow text-6xl md:text-[50px] lg:text-[220px]"
        style={{
          textShadow: "4px -4px 36px #000",
          letterSpacing: "18px",
        }}
      >
        SULA
      </h1>
      <h2
        className="font-Newtext text-3xl md:text-7xl font-medium text-white text-shadow mb-0 tracking-widest md:tracking-[10px] lg:tracking-[18px]"
        style={{
          textShadow: "4px -4px 36px #000",
          // letterSpacing: "18px",
          // "@screen sm": { letterSpacing: "10px" },
        }}
      >
        VINEYARDS
      </h2>
      <a href="#section" className="block mx-auto mt-24 mb-10 ">
        <img
          src="/src/assets/down-arrow.jpg"
          alt="Image 2"
          className="h-6 md:h-4 lg:h-9"
        />
      </a>
    </div>
  );
}
export default First;
