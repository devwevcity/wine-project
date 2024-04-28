function Story() {
  return (
    <div className="flex flex-wrap md:flex-nowrap text-center">
      <div className="sm:hidden w-full">
        <h2 className="text-4xl font-bold mb-4 mx-auto">OUR STORY</h2>
        <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4">
        <img
          src="/src/assets/our-story-2.jpg"
          alt="Image 1"
          className="col-span-1"
        />
        <img
          src="/src/assets/our-story-2.jpg"
          alt="Image 2"
          className="col-span-1"
        />
        <img
          src="/src/assets/our-story-2.jpg"
          alt="Image 3"
          className="col-span-1"
        />
        <img
          src="/src/assets/our-story-2.jpg"
          alt="Image 4"
          className="col-span-1"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white text-zinc-800 p-8 flex flex-col justify-center text-center">
        <div className="hidden sm:block">
          <h2 className="text-4xl font-bold mb-4">OUR STORY</h2>
          <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
        </div>
        <p className="text-lg p-3">
          Rajeev Samant established Sula Vineyards in 1999, Nashik’s first
          winery, and paved the way for the emergence of India’s Wine Capital.
          Today, Sula is India’s leading wine company, spearheading the charge
          of Indian wine across the world. He is a committed environmentalist,
          and everything at Sula is guided by sustainability and protecting the
          environment.
        </p>
        <button className="text-orange-500 font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors w-1/2 mx-auto">
          CLICK TO KNOW MORE
        </button>
        <div className="text-center mt-4 text-orange-500 text-3xl">↓</div>
      </div>
    </div>
  );
}
export default Story;
