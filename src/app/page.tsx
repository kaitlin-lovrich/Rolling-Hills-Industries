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
                    <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
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
