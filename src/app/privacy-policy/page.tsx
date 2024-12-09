export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <section className="mx-auto w-[95%] max-w-[1400px] mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0  gap-5 lg:gap-7 xl:gap-10 w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Privacy Policy
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <h3 className="text-navy-blue text-center font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                            Use of Google Analytics
                        </h3>

                        <p>
                            The use of Google Analytics helps to analyze how
                            visitors use this website. Google Analytics is a
                            tool that tracks and reports on various user
                            activities such as page views, clicks, scrolls, and
                            user engagement. Specifically, Rolling Hills
                            Industries tracks the following metrics:
                        </p>
                        <ul className="list-disc mx-8">
                            <li>
                                <span className="font-bold">Page views:</span>{" "}
                                The number of times a page on this site is
                                viewed.
                            </li>
                            <li>
                                <span className="font-bold">Event count:</span>{" "}
                                Interactions like clicks on buttons or links and
                                page scrolls.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Engaged sessions:
                                </span>{" "}
                                Sessions where the user actively interacts with
                                the site.
                            </li>
                            <li>
                                <span className="font-bold">Active users:</span>{" "}
                                The number of users currently on the site.
                            </li>
                        </ul>

                        <p>
                            Google Analytics collects this data using cookies or
                            similar technologies, which may include information
                            like your IP address. This data is used to
                            understand user behavior on the site to improve user
                            experience, design, and content.
                        </p>

                        <h2 className="text-navy-blue text-xl sm:text-2xl xl:text-3xl font-bold">
                            Data Privacy and Your Rights
                        </h2>

                        <ul className="list-disc mx-8">
                            <li>
                                All information collected through Google
                                Analytics is anonymous and used strictly for
                                analytical purposes.
                            </li>
                            <li>
                                No personal information such as names, emails,
                                or specific user-identifiable details are
                                collected through this tool.
                            </li>
                            <li>
                                You can choose to disable cookies through your
                                browser settings or opt out of Google Analytics
                                tracking by installing the{" "}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    aria-label="Google Analytics Opt-out Browser Add-on"
                                    className="hover:underline hover:decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold"
                                >
                                    Google Analytics opt-out browser add-on
                                </a>
                                .
                            </li>
                        </ul>
                        <p>
                            You will be prompted to accept or decline tracking
                            when you visit this site.
                        </p>
                        <p>
                            See{" "}
                            <a
                                href="https://business.safety.google/privacy/"
                                aria-label="How Google processes personal information"
                                className="hover:underline hover:decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold"
                            >
                                Google&apos;s Business Data Responsibility Site
                            </a>{" "}
                            to learn more about how Google processes personal
                            information
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}
