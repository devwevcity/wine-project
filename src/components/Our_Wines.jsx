function Our_Wines() {
  return (
    <div className="flex flex-wrap md:flex-nowrap text-center">
      <div className="w-full md:w-1/2 bg-white text-zinc-800 p-8 flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold mb-4">OUR WINES</h2>
        <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />

        <div className="hidden sm:block">
          <p className="text-lg p-3">
            Everything we do at Sula is guided by core values that aim at
            preserving and enhancing the art of winemaking. We love to make
            wine, and we are happy to have talented winemakers. All you have to
            do is to discover them all!
          </p>
          <button className="text-orange-500 font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors w-1/2 mx-auto">
            DISCOVER
          </button>
          <div className="text-center mt-4 text-orange-500 text-3xl">↓</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4">
        <img
          src="/src/assets/bottle.jpg"
          alt="Image 1"
          className="col-span-1 bg-[#f7f7f7]"
        />
        <img
          src="/src/assets/bottle.jpg"
          alt="Image 2"
          className="col-span-1 bg-[#f7f7f7]"
        />
        <img
          src="/src/assets/bottle.jpg"
          alt="Image 3"
          className="col-span-1 bg-[#f7f7f7]"
        />
        <img
          src="/src/assets/bottle.jpg"
          alt="Image 4"
          className="col-span-1 bg-[#f7f7f7]"
        />
      </div>
      <div className="sm:hidden w-full">
        <p className="text-lg p-3">
          Everything we do at Sula is guided by core values that aim at
          preserving and enhancing the art of winemaking. We love to make wine,
          and we are happy to have talented winemakers. All you have to do is to
          discover them all!
        </p>
        <button className="text-orange-500 font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors w-1/2 mx-auto">
          DISCOVER
        </button>
        <div className="text-center mt-4 text-orange-500 text-3xl">↓</div>
      </div>
    </div>
  );
}
export default Our_Wines;
