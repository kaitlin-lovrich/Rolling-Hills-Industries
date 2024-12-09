import Image from "next/image";
import { photoList } from "../_utilities";

export default function PhotoCredits() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <section className="mx-auto w-[95%] max-w-[1400px] mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0  gap-5 lg:gap-7 xl:gap-10 w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Photo Credits
                    </h2>
                    <p className="text-navy-blue text-center">
                        Photos from{" "}
                        <a
                            href="www.freepik.com"
                            className="hover:underline hover:decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold  duration-300 ease-out"
                        >
                            Freepik
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2714998"
                            className="hover:underline hover:decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold  duration-300 ease-out"
                        >
                            Pixabay
                        </a>
                    </p>
                    <ul className="flex flex-wrap w-[90%] gap-3 xl:gap-5 text-white text-base">
                        {photoList.map((photo, id) => (
                            <li
                                className="relative w-[250px] h-[250px] overflow-hidden bg-navy-blue/75"
                                key={id}
                            >
                                <Image
                                    src={photo.imageSrc}
                                    alt={photo.alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="flex absolute justify-center items-end p-1 w-full h-full bg-transparent-dark-blue-gradient">
                                    <p>
                                        <a
                                            href={photo.href}
                                            className="hover:text-yellow duration-300 ease-out"
                                        >
                                            {photo.credit}
                                        </a>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}
