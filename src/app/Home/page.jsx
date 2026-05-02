import Image from "next/image";
import main from "../../../assets/beard-oil.jpg";
import otherPhto from "../../../assets/stacked-bracelets-set.jpg";
import { FaGripfire } from "react-icons/fa";
import glass from "../../../assets/hand-holds-a-pink-sunglasses-with-a-open-palm.jpg"

const HomePage = () => {
  return (
    <div>
      {/* Banner / Slider */}
      <div className="carousel w-full h-[500px] rounded-xl overflow-hidden">

        {/* Slide 1 */}
        <div
          id="slide1"
          className="carousel-item relative w-full bg-gradient-to-r from-orange-400 to-yellow-300"
        >
          <div className="hero min-h-full w-full">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <Image
                src={main}
                alt="Summer Sale"
                width={420}
                height={420}
                className="rounded-xl"
              />

              <div>
                <h1 className="text-5xl font-black text-white">
                  Summer Sale <span className="text-red-500">50% OFF</span>
                </h1>

                <p className="py-6 text-white font-semibold">
                  Protect your skin with premium sun-care essentials.
                </p>

                <button className="btn btn-error font-bold text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className="carousel-item relative w-full bg-gradient-to-r from-pink-500 to-red-500"
        >
          <div className="hero min-h-full w-full">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <Image
                src={glass}
                alt="Hot Deals"
                width={420}
                height={420}
                className="rounded-xl"
              />

              <div>
                <h1 className="text-5xl font-black text-white flex items-center gap-2">
                  <FaGripfire className="text-amber-300" />
                  Hot Deals
                </h1>

                <p className="py-6 text-white font-semibold">
                  Glow brighter this season with trending products.
                </p>

                <button className="btn btn-warning font-bold">
                  Explore Deals
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className="carousel-item relative w-full bg-gradient-to-r from-gray-500 to-sky-400"
        >
          <div className="hero min-h-full w-full">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <Image
                src={otherPhto}
                alt="Accessories Sale"
                width={420}
                height={420}
                className="rounded-xl"
              />

              <div>
                <h1 className="text-5xl font-black text-white flex items-center gap-2">
                  <FaGripfire className="text-yellow-300" />
                  New Arrival
                </h1>

                <p className="py-6 text-white font-semibold">
                  Stylish accessories at the best seasonal price.
                </p>

                <button className="btn btn-success font-bold text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;