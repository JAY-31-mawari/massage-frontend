import React from "react";
import { Leaf, Heart, Sun, Timer as Relax, Hand, Bone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";

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

    return (
        <>
            <main className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full bg-primary text-white py-20 px-6 lg:py-28 text-center">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                            Embrace Wellness Through Massage Therapy
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400">
                            Discover a path to profound relaxation, pain relief, and holistic well-being. Our expert therapists are
                            dedicated to your comfort and health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="/book-appointment"
                                className="inline-flex items-center justify-center rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 px-6 py-3 text-lg transition-transform hover:scale-105"
                            >
                                Book Your Appointment
                            </a>
                            <a
                                href="/find-clinic"
                                className="inline-flex items-center justify-center rounded-lg border border-white text-white px-6 py-3 text-lg font-semibold transition-transform hover:scale-105"
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
                            {serviceDescData?.map((data, index) => (
                                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                                    {data}
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
                            {[
                                { icon: Leaf, title: "Stress Reduction", desc: "Calms the nervous system, reducing anxiety and promoting deep relaxation." },
                                { icon: Heart, title: "Pain Relief", desc: "Alleviates muscle tension, soreness, and chronic pain conditions like headaches and back pain." },
                                { icon: Sun, title: "Improved Sleep", desc: "Helps in achieving more restful and restorative sleep by relaxing the body and mind." },
                                { icon: Relax, title: "Enhanced Mood", desc: "Boosts endorphins, leading to feelings of well-being, happiness, and reduced depression." },
                                { icon: Hand, title: "Better Circulation", desc: "Increases blood flow, aiding in nutrient delivery to muscles and removal of metabolic waste." },
                                { icon: Bone, title: "Increased Flexibility", desc: "Loosens tight muscles and connective tissues, improving range of motion and joint health." }
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
                                >
                                    {/* Icon with Circle Background */}
                                    <div className="bg-primary/10 rounded-full p-4 mb-4 transition-colors duration-300 group-hover:bg-white">
                                        <benefit.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 group-hover:text-white">{benefit.desc}</p>
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
                                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground">
                                            Smooth, heated stones are placed on specific points of the body to warm and relax muscles, allowing for deeper pressure during the massage.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Above Footer */}
                {/* <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6 lg:py-24 text-center">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400">
                            Take the next step towards a healthier, more relaxed you. Our team is here to guide you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <a
                                href="/book-appointment"
                                className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 font-semibold px-6 py-3 text-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
                            >
                                Book Your Appointment Today
                            </a>

                            <a
                                href="/find-clinic"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-6 py-3 text-lg font-semibold transition-transform transform hover:scale-105"
                            >
                                Locate a Clinic Near You
                            </a>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer />
        </>
    );
}
