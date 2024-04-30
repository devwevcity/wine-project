import { useState } from "react";

function Dot() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative max-w-[200px] inline-block">
      {/* Element to hover over */}
      <div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span class="relative flex mx-auto h-[25px] w-[25px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 "></span>
          <div className="flex justify-center items-center w-[25px] h-[25px] bg-yellow-400 rounded-full animate-pulse">
            <span className="block w-[12px] h-[12px] bg-white rounded-full"></span>
          </div>
        </span>
      </div>

      {/* Card */}
      {isHovered && (
        <div class="w-full mb-[20px]">
          <img
            class="w-full"
            src="/src/assets/award.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">OUR WINES</div>
            <p class="text-gray-700 text-base">See Details</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dot;

{
  /* <div class="max-w-[200px]   inline-block">
      <div class="w-full mb-[20px]">
        <img
          class="w-full"
          src="/src/assets/award.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">OUR WINES</div>
          <p class="text-gray-700 text-base">See Details</p>
        </div>
      </div>

      <span class="relative flex mx-auto h-[25px] w-[25px]">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 "></span>
        <div className="flex justify-center items-center w-[25px] h-[25px] bg-yellow-400 rounded-full animate-pulse">
          <span className="block w-[12px] h-[12px] bg-white rounded-full"></span>
        </div>
      </span>
    </div> */
}
