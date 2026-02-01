const products = [
    { icon: "🍯", name: "Raw Honey" },
    { icon: "✨", name: "Filtered Honey" },
    { icon: "📦", name: "Bulk Honey" },
    { icon: "🕯️", name: "Beeswax" },
    { icon: "💚", name: "Propolis" },
    { icon: "🔶", name: "Honeycomb" },
];

export default function ProductsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-cream/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Our Products
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Premium honey and bee products for every need
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="group p-8 rounded-2xl bg-white border border-primary hover:border-golden-primary/40 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {product.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold text-foreground">
                                {product.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
