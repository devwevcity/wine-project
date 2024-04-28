function About_Us() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
      <hr className="border-orange-500 border-dashed mx-auto mb-4 w-1/5 " />
      <div className="hidden sm:block">
        <div className="grid grid-cols-4 gap-4 mt-10 ">
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 1"
              className="w-full"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 2"
              className="w-full"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 3"
              className="w-full"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 4"
              className="w-full"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile mode */}
      <div className="sm:hidden">
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4">
          <div className="col-span-1">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 4"
              className="w-1/2"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-[12px] mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 4"
              className="w-1/2"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-[12px] mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 4"
              className="w-1/2"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-[12px] mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="/src/assets/sustainability.png"
              alt="Image 4"
              className="w-1/2"
            />
            <div className="px-6 py-4">
              <h5 className="font-bold text-[12px] mb-2 text-yellow-500">
                SUSTAINABILITY
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About_Us;
