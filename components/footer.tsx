import Image from "next/image";
import {Icon} from "@iconify/react"

export default function Footer() {
    return (
        <footer className="bg-linear-to-t from-golden-dark/5 to-background border-t border-golden-light/20 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image src={`./logo.svg`} alt={"logo" } width={200} height={100}/>                            <span className="font-serif font-bold text-foreground">
                              
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Premium honey, fair partnerships, sustainable
                            farming.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="tel:+254752941736"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    +254 752 941 736
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+254741844437"
                                    className="hover:text-golden-primary transition-colors"
                                >
                                    +254 741 844 437
                                </a>
                            </li>
                            <li className="flex gap-4">
                                <Icon icon="logos:facebook"  fontSize={25}/>
                                <Icon icon="skill-icons:instagram" fontSize={25}/>
                                <Icon icon="devicon:twitter" fontSize={22}/>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-golden-light/20 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Golden Honey. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
