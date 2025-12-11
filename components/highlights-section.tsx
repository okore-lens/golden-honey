import { Award, Beaker, Leaf, Shield, Users, Zap } from "lucide-react";

const highlights = [
    {
        description:
            "Every batch is scientifically verified for quality and purity.",
        icon: Beaker,
        title: "100% Pure & Lab-Tested",
    },
    {
        description:
            "We ensure farmers receive competitive, transparent pricing.",
        icon: Users,
        title: "Fair Prices for Farmers",
    },
    {
        description: "State-of-the-art filtration and preservation techniques.",
        icon: Zap,
        title: "Modern Processing",
    },
    {
        description: "Consistent, reliable honey supply for all your needs.",
        icon: Award,
        title: "Large-Scale Supply",
    },
    {
        description:
            "AI-assisted systems ensure every jar meets our standards.",
        icon: Shield,
        title: "Quality Control",
    },
    {
        description:
            "Sustainable practices that support both farmers and nature.",
        icon: Leaf,
        title: "Organic & Ethical",
    },
];

export default function HighlightsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-cream/30 to-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Why Choose Golden Honey
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our commitment to excellence in every aspect of honey
                        production
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={highlight.title}
                                className="group p-8 rounded-2xl bg-linear-to-br from-cream to-white hover:shadow-xl transition-all duration-300 border border-golden-light/20 hover:border-golden-primary/40"
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-golden-light text-golden-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                                    {highlight.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
