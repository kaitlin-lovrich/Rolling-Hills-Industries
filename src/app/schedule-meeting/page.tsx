export default function ScheduleMeeting() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <section className="mx-auto w-[95%] max-w-[1400px] mt-8">
                <article className="flex flex-col justify-center items-center px-2 lg:px-0 gap-5 lg:gap-7 xl:gap-10 w-full sm:w-[85%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Schedule Your On-site Estimate
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Rolling Hills is committed to providing tailored
                            cleaning solutions that meet your specific needs.
                            During this free on-site meeting, one of our
                            experienced representatives will visit your place of
                            business to conduct a thorough walkthrough. This
                            allows us to assess your space and provide a
                            personalized and accurate cleaning estimate.
                        </p>
                        <p>
                            We look forward to meeting you and discussing how we
                            can help keep your business looking its best—all at
                            no cost to you!
                        </p>
                    </div>
                    <div
                        className="calendly-inline-widget w-[75%] min-w-[320px] h-[650px] sm:h-[700px]"
                        data-url="https://calendly.com/doug-prah-rollinghillsindustries/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=032954&primary_color=e8a927"
                    ></div>
                    <script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        async
                    ></script>
                </article>
            </section>
        </main>
    );
}
