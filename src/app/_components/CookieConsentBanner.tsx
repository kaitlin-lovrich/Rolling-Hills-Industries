"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const userConsent = localStorage.getItem("cookieConsent");
        if (!userConsent) {
            setShowBanner(true);
        }
    }, []);

    function handleConsentClick(userResponse: string) {
        localStorage.setItem("cookieConsent", userResponse);
        setShowBanner(false);
        if (userResponse === "accept") loadGoogleAnalytics();
    }

    function loadGoogleAnalytics() {
        try {
            const script = document.createElement("script");
            script.src =
                "https://www.googletagmanager.com/gtag/js?id=G-XP6Q15P09N";
            script.async = true;

            // Log success or failure
            script.onload = () =>
                console.log("Google Analytics script loaded successfully.");
            script.onerror = (error) =>
                console.error("Failed to load Google Analytics script:", error);

            document.head.appendChild(script);

            const inlineScript = document.createElement("script");
            inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-XP6Q15P09N');
        `;
            document.head.appendChild(inlineScript);
        } catch (error) {
            console.error(`Error loading Google Analytics: ${error}`);
        }
    }

    return showBanner ? (
        <div className="flex justify-evenly items-center flex-col fixed z-50 w-[80%]  max-w-[540px] min-w-[210px] bg-white/95 rounded-xl py-2 bottom-[35px] right-3 sm:right-5 drop-shadow-lg border-[1px] border-navy-blue">
            <div className="flex flex-col text-base xl:text-lg px-4 sm:gap-1.5">
                <h1 className="text-navy-blue font-bold text-xl xl:text-2xl text-center">
                    COOKIE CONSENT
                </h1>

                <p>
                    This website uses cookies for analytical purposes.{" "}
                    <Link
                        href="/privacy-policy"
                        aria-label="Privacy Policy"
                        className="hover:underline hover:decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold"
                    >
                        Privacy Policy
                    </Link>
                </p>
                <div className="flex gap-5 sm:gap-10 justify-center pt-1.5">
                    <button
                        className="bg-navy-blue/90 hover:bg-navy-blue/80 rounded-full drop-shadow-md text-white hover:text-yellow items-center group duration-300 ease-out text-base xl:text-lg gap-1.5 xl:gap-3 px-5 xl:px-7 py-0.5 xl:py-1"
                        onClick={() => handleConsentClick("accept")}
                    >
                        ACCEPT
                    </button>
                    <button
                        className="bg-navy-blue/90 hover:bg-navy-blue/80 rounded-full drop-shadow-md text-white hover:text-yellow items-center group duration-300 ease-out text-base xl:text-lg gap-1.5 xl:gap-3 px-5 xl:px-7 py-0.5 xl:py-1"
                        onClick={() => handleConsentClick("deny")}
                    >
                        DENY
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
