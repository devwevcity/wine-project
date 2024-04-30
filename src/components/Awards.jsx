import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Awards() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768;
      setSlidesToShow(isLargeScreen ? 3 : 1);
    };

    handleResize(); // Call the function on initial load
    window.addEventListener("resize", handleResize); // Listen for window resize

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1 className="text-orange-500 text-2xl  lg:text-6xl text-center">
        Our Awards
      </h1>
      <h2 className="text-orange-400 text-2xl  lg:text-6xl text-center">
        AND RECOGNITIONS
      </h2>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
  {
    name: `Decanter World Wine Awards 2020`,
    img: `/src/assets/award.jpg`,
    review: `Dindori Reserve Viogner Silver`,
  },
];
export default Awards;