"use client";
import React, { useState, useEffect } from "react";

export default function CalendlyCalendar() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add an event listener to check when the Calendly widget is loaded
        function handleCalendlyLoad(event: MessageEvent) {
            if (
                event.origin === "https://assets.calendly.com" &&
                event.data.event === "widget:loaded"
            ) {
                setIsLoading(false); // Stop showing the loading message
            }
        }
        window.addEventListener("message", handleCalendlyLoad);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("message", handleCalendlyLoad);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 10000); // 10 seconds fallback

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="animate-pulse text-2xl">
                    Loading Calendly...
                </div>
            ) : (
                <>
                    <div
                        className="calendly-inline-widget w-[75%] min-w-[320px] h-[650px] sm:h-[700px]"
                        data-url="https://calendly.com/doug-prah-rollinghillsindustries/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=032954&primary_color=e8a927"
                    ></div>
                    <script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        async
                    ></script>
                </>
            )}
        </>
    );
}
