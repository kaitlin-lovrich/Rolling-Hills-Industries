import { Banner, Button } from "./components";

export default function Home() {
    return (
        <>
            <main className="items-center justify-items-center min-h-screen">
                <Banner
                    backgroundImageUrl="/shiny-night-city.jpg"
                    altText="Shiny night city"
                    isHomePage={true}
                >
                    <h1>ROLLING HILLS COMMERCIAL CLEANING SERVICES</h1>
                    <div className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-3 *:xl:py-4  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-14  *:*:pr-1.5 *:*:sm:pr-4">
                        <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
                    </div>
                    <span>
                        Cleaning Western PA Since 1986, Proudly Employee Owned
                        Since 2022
                    </span>
                </Banner>
                <section>
                    <article></article>
                </section>
            </main>
        </>
    );
}
