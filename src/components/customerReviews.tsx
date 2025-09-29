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
    <div className="relative w-full py-8 sm:py-12 bg-background">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4  top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 md:p-3 z-10 hover:scale-105 transition-transform"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 sm:gap-6 px-4 sm:px-8 scrollbar-hide"
      >
        {clientReviewData.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[350px] lg:w-[400px] bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 text-left snap-start shadow-sm"
          >
            <div className="flex items-center gap-3 my-2 sm:mt-6">
                <p className="text-gray-900 font-semibold text-xl">
                  {client.name}
                </p>
            </div>
            <p
              className="text-gray-800 text-base sm:text-md"
              dangerouslySetInnerHTML={{ __html: client.desc }}
            ></p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 md:p-3 z-10 hover:scale-105 transition-transform"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
