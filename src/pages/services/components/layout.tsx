import { useNavigate } from "react-router-dom";
import {
  physiotherapyBenefits,
  massageBenefits,
  chiropracticBenefits,
  acupunctureBenefits,
} from "../../../data/servicesData";

interface OtherServicesData {
  title: string;
  image: string;
  url: string;
}

interface ServiceTitleProps {
  serviceTitle: string;
  serviceImage: string | undefined;
  serviceDescData: string[] | undefined;
  otherServicesData: OtherServicesData[];
}

export default function ServiceMainComponent({
  serviceTitle,
  serviceImage,
  serviceDescData,
  otherServicesData,
}: ServiceTitleProps) {
  const navigate = useNavigate();

  const allBenefits:any = {
    "Physiotherapy": physiotherapyBenefits,
    "Massage Therapy": massageBenefits,
    "Acupuncture": acupunctureBenefits,
    "Chiropractic Care": chiropracticBenefits,
  };

  const benefitsToRender = allBenefits[serviceTitle] || []

  return (
    <>
      <main className="flex flex-col items-center bg-background">
        {/* Hero Section */}
        <section className="w-full bg-blue-600 text-white py-20 px-6 lg:py-28 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
              Embrace Wellness Through Massage Therapy
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
              Discover a path to profound relaxation, pain relief, and holistic
              well-being. Our expert therapists are dedicated to your comfort
              and health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/serviceList"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 px-6 py-3 text-lg transition-transform hover:scale-105"
              >
                Book Your Appointment
              </a>
              <a
                href="/serviceList"
                className="inline-flex items-center justify-center rounded-lg border border-white text-white px-6 py-3 text-lg font-semibold hover:text-primary transition-transform hover:scale-105"
              >
                Find a Clinic Near You
              </a>
            </div>
          </div>
        </section>

        {/* What is Massage Therapy Section */}
        <section className="w-full bg-background py-16 px-6 lg:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Understanding {serviceTitle}
              </h2>
              {serviceDescData?.map((desc, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {desc}
                </p>
              ))}
            </div>
            {serviceImage && (
              <img
                src={serviceImage}
                alt={serviceTitle}
                className="rounded-xl object-cover w-full max-h-[450px] shadow-lg"
              />
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full bg-primary py-16 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Benefits of Regular Massage
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsToRender.map((benefit:any, index:any) => (
                <div
                  key={index}
                  className="group bg-white text-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-primary/10 rounded-full p-4 mb-4 transition-colors duration-300 ">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Massage Section */}
        <section className="w-full bg-background py-16 px-6 lg:py-24">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Our Popular Massage Types
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServicesData.map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/service/${service.url}`)}
                  className="bg-card text-foreground shadow-md hover:shadow-xl rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      Smooth, heated stones are placed on specific points of the
                      body to warm and relax muscles, allowing for deeper
                      pressure during the massage.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
