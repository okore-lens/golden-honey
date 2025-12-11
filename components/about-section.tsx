import Image from "next/image";

import honeyFarmImage from "@/assets/honey-farm.jpg";

export default function AboutSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                            Our Story
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Golden Honey partners with farmers across Kenya to
                            collect, refine, package, and distribute
                            high-quality organic honey. We believe in fair trade
                            practices and sustainable farming.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="border-l-4 border-golden-primary pl-4">
                                <h4 className="font-bold text-foreground mb-1">
                                    Our Mission
                                </h4>
                                <p className="text-muted-foreground">
                                    To provide premium honey while empowering
                                    farmers through fair partnerships.
                                </p>
                            </div>
                            <div className="border-l-4 border-golden-secondary pl-4">
                                <h4 className="font-bold text-foreground mb-1">
                                    Our Vision
                                </h4>
                                <p className="text-muted-foreground">
                                    To be Kenya's most trusted honey brand,
                                    recognized for quality and integrity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-linear-to-br from-golden-light/30 to-golden-primary/10 aspect-square flex items-center justify-center">
                        <Image
                            src={honeyFarmImage}
                            alt="Honey farming"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
