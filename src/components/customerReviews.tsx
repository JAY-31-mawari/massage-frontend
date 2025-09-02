import { useState } from "react";
import { clientReviewData } from "../data/servicesData";
import TinySlider from "tiny-slider-react";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";
import { Star } from "lucide-react";

export default function CustomerReviews() {
  // Track expanded reviews by index
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    autoplay: true,
    nav: false,
    speed: 400,
    gutter: 20,
    items: 3,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  return (
    <section className="py-40 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-black text-foreground mb-8 tracking-tight">
            Transformative Stories
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Discover how our clients have found healing, relaxation, and renewal
            through our signature treatments.
          </p>
        </div>

        {/* Carousel */}
        <TinySlider settings={settings}>
          {clientReviewData.map((client, index) => (
            <div key={index} className="px-3 tns-item">
              <div className="border p-8 rounded-3xl transform transition-all duration-500 bg-white shadow-md min-h-[350px] flex flex-col">
                <div>
                  {/* Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Review Content */}
                  <blockquote
                    className={`text-lg text-muted-foreground leading-relaxed italic font-medium ${
                      expanded[index] ? "" : "line-clamp-4"
                    }`}
                    dangerouslySetInnerHTML={{ __html: client.desc }}
                  />

                  {/* Show More / Show Less */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-primary font-medium hover:underline"
                  >
                    {expanded[index] ? "Show Less" : "Show More"}
                  </button>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4 mt-6">
                  <img
                    src={`https://ui-avatars.com/api/?name=${
                      client?.name || "User"
                    }&background=random`}
                    alt="Profile"
                    className="h-12 w-12 rounded-full border"
                  />
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </section>
  );
}
