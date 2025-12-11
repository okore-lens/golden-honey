"use client";

import { CheckCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setEmail("");
            setLoading(false);

            // Reset after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-golden-light/5 to-cream/30">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Join Our Waiting List
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Be the first to know about new products and special
                        offers
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 sm:p-12 border border-golden-light/20 shadow-lg">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-12 rounded-lg border-golden-light/30 focus:border-golden-primary focus:ring-golden-primary/20 text-foreground placeholder:text-muted-foreground"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 bg-golden-primary hover:bg-golden-dark text-background font-semibold rounded-lg transition-all duration-300"
                            >
                                {loading ? "Joining..." : "Join the List"}
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                We respect your privacy. Unsubscribe at any
                                time.
                            </p>
                        </form>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle className="w-16 h-16 text-golden-primary" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-foreground">
                                Welcome to Golden Honey!
                            </h3>
                            <p className="text-muted-foreground">
                                Thank you for joining our community. We'll be in
                                touch soon with exciting updates.
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center space-y-4">
                    <p className="text-muted-foreground">
                        Questions? Reach out to us
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                        <a
                            href="tel:+254752941736"
                            className="text-golden-primary hover:text-golden-dark font-semibold transition-colors"
                        >
                            +254 752 941 736
                        </a>
                        <a
                            href="tel:+254741844437"
                            className="text-golden-primary hover:text-golden-dark font-semibold transition-colors"
                        >
                            +254 741 844 437
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
