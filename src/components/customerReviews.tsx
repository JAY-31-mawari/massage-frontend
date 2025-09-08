import { useRef } from "react";
import { clientReviewData } from "../data/servicesData";
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
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:scale-105 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden snap-x snap-mandatory scroll-smooth gap-4 px-10"
      >
        {clientReviewData.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[400px] bg-white rounded-2xl border border-gray-200 p-6 text-left snap-start shadow-sm"
          >
            <p
              className="text-gray-800 text-md"
              dangerouslySetInnerHTML={{ __html: client.desc }}
            ></p>

            <div className="flex items-center gap-3 mt-6">
              <img
                src={client.image}
                alt={client.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h6 className="font-semibold text-gray-900">{client.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:scale-105 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
