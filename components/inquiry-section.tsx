"use client";

import { CheckCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InquirySection() {
    const [formData, setFormData] = useState({
        email: "",
        inquiryType: "customer", // customer, farmer
        message: "",
        name: "",
        phone: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/send-inquiry", {
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to send inquiry");
            }

            setSubmitted(true);
            setFormData({
                email: "",
                inquiryType: "customer",
                message: "",
                name: "",
                phone: "",
            });

            // Reset after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError(
                "Failed to send inquiry. Please try again or contact us directly.",
            );
            console.error("Form submission error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-golden-light/5 to-cream/30">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Whether you're looking to buy honey or partner with us
                        as a farmer, we'd love to hear from you.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 sm:p-12 border border-golden-light/20 shadow-lg">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="flex gap-3 mb-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="customer"
                                        checked={
                                            formData.inquiryType === "customer"
                                        }
                                        onChange={handleChange}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-foreground">
                                        I want to buy honey
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="farmer"
                                        checked={
                                            formData.inquiryType === "farmer"
                                        }
                                        onChange={handleChange}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm font-medium text-foreground">
                                        I'm a farmer/producer
                                    </span>
                                </label>
                            </div>

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Full Name
                                </label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-lg border-golden-light/30 focus:border-golden-primary focus:ring-golden-primary/20"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-lg border-golden-light/30 focus:border-golden-primary focus:ring-golden-primary/20"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Phone Number
                                </label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="+254 7... (optional)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="h-11 rounded-lg border-golden-light/30 focus:border-golden-primary focus:ring-golden-primary/20"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    {formData.inquiryType === "farmer"
                                        ? "Tell us about your honey or produce"
                                        : "What would you like to know?"}
                                </label>
                                <textarea
                                    name="message"
                                    placeholder={
                                        formData.inquiryType === "farmer"
                                            ? "Share details about your honey production..."
                                            : "Tell us your requirements..."
                                    }
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-golden-light/30 focus:border-golden-primary focus:ring-golden-primary/20 focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                                />
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                                    {error}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full h-11 bg-golden-primary hover:bg-golden-dark text-background font-semibold rounded-lg transition-all duration-300"
                            >
                                {loading ? "Sending..." : "Send Inquiry"}
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                We'll get back to you shortly. Quick response
                                via WhatsApp or phone call.
                            </p>
                        </form>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle className="w-16 h-16 text-golden-primary" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-foreground">
                                Thank You!
                            </h3>
                            <p className="text-muted-foreground">
                                {formData.inquiryType === "farmer"
                                    ? "We're excited to explore a partnership with you. We'll contact you soon."
                                    : "Your inquiry has been received. We'll be in touch shortly with more details."}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center space-y-4">
                    <p className="text-muted-foreground">
                        Prefer to reach us directly?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                        <a
                            href="https://wa.me/254710978258"
                            className="text-golden-primary hover:text-golden-dark font-semibold transition-colors"
                        >
                            WhatsApp: +254 710 978 258
                        </a>
                        <a
                            href="tel:+254710978258"
                            className="text-golden-primary hover:text-golden-dark font-semibold transition-colors"
                        >
                            Call: +254 710 978 258
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
