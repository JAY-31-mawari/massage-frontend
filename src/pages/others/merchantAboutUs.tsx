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
      <div
        className="relative text-white text-center py-40 bg-no-repeat bg-cover bg-center w-full h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${AboutSerivceBg})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative font-bold">
          <p className="text-3xl text-white">
            Last minute wellness - make booking process simple and easy
          </p>
          <div className="font-bold text-7xl">
            <h1>Grow your Career</h1>
            <h1>Share your work</h1>
          </div>
          <Link
            to="/register"
            className="my-6 tracking-wider inline-block px-3 py-3 bg-blue-600 text-white text-xl rounded-lg shadow-none hover:bg-blue-700 transition duration-200"
          >
            Become a Practitioner
          </Link>
        </div>
      </div>

      <section className="p-24 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-8">
        <div className="p-4">
          <p className="text-[#0057FF] text-2xl font-semibold">
            Get Discovered
          </p>
          <h1 className="text-6xl font-bold leading-tight">
            New Opportunities from top clients
          </h1>
          {aboutServiceLists.map((service) => (
            <div className="flex items-center">
              <img
                src={service.icon}
                alt={`service-${service.id}`}
                className="py-2 w-10 h-10"
              />
              <p className="my-3 text-xl">{service.text}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src={aboutService}
            alt="illustration"
            className="max-w-sm w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-[#fafbff] py-8">
        <div className="text-center">
          <h1 className="font-bold text-6xl mx-32">
            How can you earn on Last minute wellness
          </h1>
          <p className="text-gray-700 mx-96 my-3 text-2xl">
            Last minute wellness is a community of over 50 million members
            across the world. See how they use our platform to grow their
            careers on our blog
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-16 mx-12">
          {testimonials.map((testimoniest) => (
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={testimoniest.image}
                  alt={testimoniest.imageText}
                  className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h1 className="text-xl">{testimoniest.imageText}</h1>
                </div>
              </div>
              <h1 className="font-bold my-2 text-xl">{testimoniest.header}</h1>
              <p className="text-lg">{testimoniest.testimony}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
