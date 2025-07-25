import React from "react";
import { Leaf, Heart, Sun, Timer as Relax, Hand, Bone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface otherServicesData {
    title: string
    image: string
    url: string
}

interface ServiceTitleProps {
    serviceTitle: string
    serviceImage: string | undefined
    serviceDescData: string[] | undefined
    otherServicesData: otherServicesData[]
}

export default function ServiceMainComponent({ serviceTitle, serviceImage, serviceDescData, otherServicesData }: ServiceTitleProps) {

    const navigate = useNavigate()

    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full bg-primary text-primary-foreground py-20 px-4 md:px-6 lg:py-32 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Embrace Wellness Through Massage Therapy
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                        Discover a path to profound relaxation, pain relief, and holistic well-being. Our expert therapists are
                        dedicated to your comfort and health.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href="/book-appointment"
                            className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 text-lg font-medium transition"
                        >
                            Book Your Appointment
                        </a>
                        <a
                            href="/find-clinic"
                            className="inline-flex items-center justify-center rounded-md border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-3 text-lg font-medium transition"
                        >
                            Find a Clinic Near You
                        </a>
                    </div>
                </div>
            </section>

            {/* What is Massage Therapy Section */}
            <section className="w-full bg-background py-16 px-4 md:px-6 lg:py-24">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Understanding {serviceTitle}
                        </h2>
                        {serviceDescData && serviceDescData.map((data)=>(
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {data}
                        </p>
                        ))} 

                    </div>
                    <img
                        src={serviceImage}
                        alt={serviceTitle}
                        className="rounded-xl object-cover w-full h-auto shadow-lg"
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full bg-secondary py-16 px-4 md:px-6 lg:py-24">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary-foreground">
                        Key Benefits of Regular Massage
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card */}
                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Leaf className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Stress Reduction</h3>
                            <p className="text-muted-foreground text-center">
                                Calms the nervous system, reducing anxiety and promoting deep relaxation.
                            </p>
                        </div>

                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Heart className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Pain Relief</h3>
                            <p className="text-muted-foreground text-center">
                                Alleviates muscle tension, soreness, and chronic pain conditions like headaches and back pain.
                            </p>
                        </div>

                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Sun className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Improved Sleep</h3>
                            <p className="text-muted-foreground text-center">
                                Helps in achieving more restful and restorative sleep by relaxing the body and mind.
                            </p>
                        </div>

                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Relax className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Enhanced Mood</h3>
                            <p className="text-muted-foreground text-center">
                                Boosts endorphins, leading to feelings of well-being, happiness, and reduced depression.
                            </p>
                        </div>

                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Hand className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Better Circulation</h3>
                            <p className="text-muted-foreground text-center">
                                Increases blood flow, aiding in nutrient delivery to muscles and removal of metabolic waste.
                            </p>
                        </div>

                        <div className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center">
                            <Bone className="h-10 w-10 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Increased Flexibility</h3>
                            <p className="text-muted-foreground text-center">
                                Loosens tight muscles and connective tissues, improving range of motion and joint health.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Massage Section */}
            <section className="w-full bg-background py-16 px-4 md:px-6 lg:py-24">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Explore Our Popular Massage Types
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherServicesData.map((service) => (
                            <div onClick={()=>navigate(`/service/${service.url}`)} className="bg-card text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="object-cover w-full h-48 mb-4"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground">
                                        Smooth, heated stones are placed on specific points of the body to warm and relax muscles, allowing for
                                        deeper pressure during the massage.
                                    </p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="w-full bg-primary text-primary-foreground py-16 px-4 md:px-6 lg:py-24 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to Experience the Difference?
                    </h2>
                    <p className="text-lg md:text-xl opacity-90">
                        Take the next step towards a healthier, more relaxed you. Our team is here to guide you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href="/book-appointment"
                            className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 text-lg font-medium transition"
                        >
                            Book Your Appointment Today
                        </a>
                        <a
                            href="/find-clinic"
                            className="inline-flex items-center justify-center rounded-md border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-6 py-3 text-lg font-medium transition"
                        >
                            Locate a Clinic Near You
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}