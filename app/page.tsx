"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ProductsSection from "@/components/products-section";
import QualitySection from "@/components/quality-section";
import WaitlistSection from "@/components/waitlist-section";

const sections = [
    { id: "hero", label: "Home" },
    { id: "highlights", label: "Why Us" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "quality", label: "Quality" },
    { id: "waitlist", label: "Join Us" },
];

export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToSection = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <div className="bg-background text-foreground overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-golden-light/20 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Image
                            src="/logo.svg"
                            alt="Golden Honey Logo"
                            width={200}
                            height={100}
                        />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-8">
                            {sections.map((section) => (
                                <button
                                    type="button"
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-sm text-muted-foreground hover:text-golden-primary transition-colors duration-300 relative group"
                                >
                                    {section.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden-primary group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-golden-primary"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 border-t border-golden-light/20">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    type="button"
                                    onClick={() => scrollToSection(section.id)}
                                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-golden-primary hover:bg-golden-light/5 transition-colors"
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.hero = el;
                    }}
                >
                    <HeroSection
                        onJoinClick={() => scrollToSection("waitlist")}
                    />
                </div>

                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.highlights = el;
                    }}
                >
                    <HighlightsSection />
                </div>

                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.about = el;
                    }}
                >
                    <AboutSection />
                </div>

                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.products = el;
                    }}
                >
                    <ProductsSection />
                </div>

                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.quality = el;
                    }}
                >
                    <QualitySection />
                </div>

                <div
                    ref={(el) => {
                        if (el) sectionRefs.current.waitlist = el;
                    }}
                >
                    <WaitlistSection />
                </div>
            </main>

            <Footer />
        </div>
    );
}
