const tests = [
    "Purity Analysis",
    "Moisture Content",
    "Pesticide Screening",
    "Bacterial Count",
    "Heavy Metal Detection",
    "Enzymatic Activity",
];

export default function QualitySection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Quality & Testing
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every batch undergoes rigorous scientific testing
                    </p>
                </div>

                <div className="bg-linear-to-br from-cream to-white rounded-2xl p-12 border border-golden-light/20">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                        {tests.map((test) => (
                            <div key={test} className="text-center">
                                <div className="w-10 h-10 rounded-full bg-golden-light text-primary flex items-center justify-center mx-auto mb-2 font-bold">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-foreground">
                                    {test}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-golden-light/20 pt-8">
                        <p className="text-center text-muted-foreground leading-relaxed">
                            Our state-of-the-art laboratory is equipped with
                            modern testing equipment to ensure every jar of
                            Golden Honey meets international quality standards.
                            We're certified and transparent in all our
                            processes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
