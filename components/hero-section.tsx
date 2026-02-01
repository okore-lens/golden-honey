"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import drip from "@/assets/drip.png"

interface HeroSectionProps {
    onJoinClick: () => void;
}

export default function HeroSection({ onJoinClick }: HeroSectionProps) {
    return (<>
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-cream via-background to-golden-light/10 -z-10"></div>

            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                    <span className="text-primary">Pure Honey.</span>
                    <br />
                    <span className="text-foreground">Fair Prices.</span>
                    <br />
                    <span className="text-primary">
                        Strong Partnerships.
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We buy premium honey directly from farmers and supply pure
                    honey to homes and businesses across Kenya.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button
                        size="lg"
                        onClick={onJoinClick}
                        className="bg-primary hover:bg-golden-dark text-background transition-all duration-300 rounded-full"
                    >
                        Buy Honey
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-golden-light/10 hover:text-primary rounded-full transition-all duration-300 bg-transparent"
                        onClick={onJoinClick}
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </section>            <Image src={drip} alt={"drip design"} className="w-full"   />
</>
    );
}
