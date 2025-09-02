import { useRef } from "react";
import { clientReviewData } from "../data/servicesData";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => scroll("left")}
          className="bg-[#fff] rounded-full shadow p-1 mr-1"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white rounded-full shadow p-1 ml-1"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-2 scrollbar-hide"
      >
        {clientReviewData.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[350px] md:w-[430px] bg-white rounded-2xl border border-gray-200 p-6 text-left snap-start"
          >
            <p
              className="text-gray-800 text-lg"
              dangerouslySetInnerHTML={{ __html: client.desc }}
            ></p>

            <div className="flex items-center gap-3 mt-6">
              <img
                src={client.image}
                alt={client.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{client.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
