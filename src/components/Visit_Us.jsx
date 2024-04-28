function Visit_Us() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center">
      <div className="p-6 md:p-12 w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">VISIT US</h1>
        <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
        <div className="hidden sm:block">
          <h2 className="text-2xl font-semibold mb-2 text-orange-400">
            SPEND A DAY AT OUR VINEYARDS AND EXPLORE
          </h2>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
          <p className="mb-6">
            If a day (or two!) of wine, food, tastings and scenic views sounds
            like a perfect plan for you, you should definitely come visit us and
            have a good time in our beautiful vineyards. With your loved one,
            your best friends or your family, you will for sure have a memorable
            time.
          </p>
          <button className=" text-orange-500 font-bold py-2 px-4 rounded">
            CLICK TO KNOW MORE
          </button>
          <div className="text-center mt-4 text-orange-500 text-3xl">↓</div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/src/assets/visit.jpg"
          alt="Vineyard"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:hidden w-full">
        <h2 className="text-2xl font-semibold mb-2 text-orange-400">
          SPEND A DAY AT OUR VINEYARDS AND EXPLORE
        </h2>
        <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
        <p className="mb-6">
          If a day (or two!) of wine, food, tastings and scenic views sounds
          like a perfect plan for you, you should definitely come visit us and
          have a good time in our beautiful vineyards. With your loved one, your
          best friends or your family, you will for sure have a memorable time.
        </p>
        <button className=" text-orange-500 font-bold py-2 px-4 rounded">
          CLICK TO KNOW MORE
        </button>
        <div className="text-center mt-4 text-orange-500 text-3xl">↓</div>
      </div>
    </div>
  );
}
export default Visit_Us;
