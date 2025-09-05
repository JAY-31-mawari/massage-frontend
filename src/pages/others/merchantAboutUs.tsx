import { Link } from "react-router-dom";
import aboutService from "../../assets/img/city-2.png";
import ListIcon from "../../assets/img/svg/list-icon.svg";
import Availability from "../../assets/img/svg/availability.svg";
import PriceTag from "../../assets/img/svg/priceTag.svg";
import SuitCase from "../../assets/img/svg/suitcase.svg";
import AboutSerivceBg from "../../assets/img/background/aboutService.png";
import Testimony1 from "../../assets/img/partners/emma-make-2x.webp";
import Testimony2 from "../../assets/img/partners/harbor-bickmore-2x.webp";
import Testimony3 from "../../assets/img/partners/batzorig-regzen-2x.webp";

export function MerchantAboutUs() {
  const aboutServiceLists = [
    {
      id: 1,
      icon: Availability,
      text: "Set your availability for freelance and full-time work",
    },
    {
      id: 2,
      icon: ListIcon,
      text: "List services you'd like to offer",
    },
    {
      id: 3,
      icon: SuitCase,
      text: "Showcase your best work on your profile",
    },
    {
      id: 4,
      icon: PriceTag,
      text: "Set your own price and timeline",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: Testimony1,
      imageText: "Clinic based practitioner",
      header: "Get discovered by clients",
      testimony:
        "Illustrator Emma Makeopens in a new tab creates commissioned work for clients like Anthropologie and Penguin Random House.",
    },
    {
      id: 2,
      image: Testimony2,
      imageText: "Home based practitioner",
      header: "Offer freelance services",
      testimony:
        "Font designer Harbor Bickmoreopens in a new tab crafts custom fonts for clients on demand as a freelance service.",
    },
    {
      id: 3,
      image: Testimony3,
      imageText: "Mobile practitioner",
      header: "Sell creative assets",
      testimony:
        "Self-taught designer Batzorig Regzenopens in a new tab designs top-selling presentation templates made with small businesses in mind.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative text-white text-center py-20 sm:py-28 md:py-32 bg-no-repeat bg-cover bg-center w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${AboutSerivceBg})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative font-bold px-4 sm:px-6 md:px-10">
          <p className="text-xl sm:text-2xl md:text-3xl">
            Last minute wellness - make booking process simple and easy
          </p>
          <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mt-4">
            <h1>Grow your Career</h1>
            <h1>Share your work</h1>
          </div>
          <Link
            to="/register"
            className="my-6 tracking-wider inline-block px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white text-base sm:text-lg md:text-xl rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Become a Practitioner
          </Link>
        </div>
      </div>

      {/* About Service Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:!px-24 py-12 md:py-16 lg:!py-24 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:gap-8">
        <div className="p-2 sm:p-4">
          <p className="text-[#0057FF] text-xl sm:text-2xl font-semibold">
            Get Discovered
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            New Opportunities from top clients
          </h1>
          {aboutServiceLists.map((service) => (
            <div className="flex items-center my-2" key={service.id}>
              <img
                src={service.icon}
                alt={`service-${service.id}`}
                className="py-2 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="ml-3 text-base sm:text-lg md:text-xl">
                {service.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src={aboutService}
            alt="illustration"
            className="max-w-[220px] sm:max-w-xs md:max-w-sm w-full h-auto"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#fafbff] py-8 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:mx-12 md:mx-24 lg:mx-32">
            How can you earn on Last minute wellness
          </h1>
          <p className="text-gray-700 mt-3 text-base sm:text-lg md:text-xl lg:text-2xl sm:mx-12 md:mx-32 lg:mx-96">
            Last minute wellness is a community of over 50 million members
            across the world. See how they use our platform to grow their
            careers on our blog
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 sm:my-16 md:mx-8 lg:mx-12">
          {testimonials.map((testimoniest) => (
            <div key={testimoniest.id}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={testimoniest.image}
                  alt={testimoniest.imageText}
                  className="rounded-2xl w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] sm:h-[50%] bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h1 className="text-lg sm:text-xl">
                    {testimoniest.imageText}
                  </h1>
                </div>
              </div>
              <h1 className="font-bold my-2 text-lg sm:text-xl">
                {testimoniest.header}
              </h1>
              <p className="text-base sm:text-lg">{testimoniest.testimony}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}