"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Banner } from "../_components";
import emailjs from "@emailjs/browser";

export default function Contact() {
    return (
        <main className="flex flex-col gap-4 min-h-screen">
            <Banner
                backgroundImageUrl="/shiny-night-city.jpg"
                altText="Shiny night city"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-2 sm:py-3">
                        <h1>CONTACT</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0 py-6 xl:py-11 2xl:py-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12 w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Contact Rolling Hills Industries Inc Today
                    </h2>
                    <div className="flex justify-around items-start gap-5 sm:gap-9 lg:gap-14 xl:gap-16 px-5 lg:px-0 w-full *:leading-relaxed text-start">
                        <div className="flex flex-col gap-3 sm:gap-5">
                            <h3 className="text-navy-blue font-bold text-xl lg:text-2xl xl:text-3xl">
                                Rolling Hills Industries Inc
                            </h3>
                            <address className="flex flex-col gap-3 xl:gap-5 not-italic">
                                <p>700 Hoke St</p>
                                <p>Latrobe, PA 15650</p>
                                <p>
                                    <a
                                        href="tel:724-539-4199"
                                        className="hover:underline"
                                    >
                                        724-539-4199
                                    </a>
                                </p>
                            </address>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-5">
                            <h3 className="text-navy-blue font-bold text-xl lg:text-2xl xl:text-3xl">
                                Business Hours
                            </h3>
                            <div className="grid grid-cols-2 gap-2 xl:gap-5 ">
                                <p>Mon - Fri</p>
                                <p>9:00 am - 5:00 pm</p>
                                <p>Sat - Sun</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col justify-center items-center px-5 lg:px-0 py-6 xl:py-11 2xl:py-14 gap-5 lg:gap-7 xl:gap-10 2xl:gap-12  w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Contact Us for a Free Estimate!
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p>
                            Are you interested in our services? We welcome the
                            opportunity to talk with you about your cleaning
                            needs and provide you with a free estimate. We are
                            confident the quality of our services will provide
                            you a clean environment where employees feel
                            healthy, productivity is high, and customers are
                            satisfied.
                        </p>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="relative my-6 xl:my-11 2xl:my-14">
                    <figure>
                        <Image
                            src="/office-buildings.jpg"
                            alt="Office buildings"
                            fill={true}
                            className="rounded-xl"
                        />
                    </figure>
                    <form className="relative gap-5 xl:gap-7 py-6 xl:py-11 2xl:py-14 px-5 xl:px-7 text-white text-lg font-semibold bg-diagonal-light-blue-to-navy rounded-xl">
                        <div className="grid grid-rows-4 grid-flow-col gap-5 xl:gap-7">
                            <label htmlFor="from_name">
                                Your Name (required)
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    // value={formData["from_name"]}
                                    // onChange={handleChange}
                                    required
                                    aria-label="Name Input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                />
                            </label>
                            <label htmlFor="reply_to">
                                Your Email (required)
                                <input
                                    type="email"
                                    id="reply_to"
                                    name="reply_to"
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}
                                    required
                                    aria-label="Email Input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></input>
                            </label>
                            <label htmlFor="reply_to">
                                Phone Number
                                <input
                                    type="phone_number?"
                                    id=""
                                    name=""
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}
                                    required
                                    aria-label="Phone number input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></input>
                            </label>
                            <label htmlFor="reply_to">
                                Industry Type
                                <input
                                    type="select"
                                    id=""
                                    name=""
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}
                                    placeholder="Select"
                                    required
                                    aria-label="Phone number input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></input>
                            </label>
                            <label htmlFor="reply_to">
                                Business/Company Name
                                <input
                                    type="name"
                                    id=""
                                    name=""
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}
                                    required
                                    aria-label="Business or company name"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></input>
                            </label>
                            <label htmlFor="reply_to">
                                Physical Address
                                <input
                                    type="name"
                                    id=""
                                    name=""
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}
                                    required
                                    aria-label="Physical Address"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></input>
                            </label>
                            <div className="grid grid-rows-subgrid gap-5 xl:gap-7 row-span-2">
                                <label
                                    htmlFor="reply_to"
                                    className="row-start-2"
                                >
                                    What services are you interested in?
                                    <input
                                        type="select"
                                        id=""
                                        name=""
                                        // value={formData["reply_to"]}
                                        // onChange={handleChange}
                                        placeholder="Select"
                                        required
                                        aria-label="What services are you interested in?"
                                        className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                    ></input>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="message">
                                Please Describe Your Facility
                                <textarea
                                    id="message"
                                    name="message"
                                    // value={formData["reply_to"]}
                                    // onChange={handleChange}

                                    required
                                    aria-label="Message input"
                                    rows={4}
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white"
                                ></textarea>
                            </label>
                        </div>
                    </form>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1800px]">
                <article className="w-full pt-4 sm:pt-7 lg:pt-11 xl:pt-16">
                    <iframe
                        className="aspect-video h-full min-h-[545px] lg:min-h-[650px] max-h-[800px] xl:max-h-[900px] rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0390909054245!2d-79.38554292325173!3d40.31928997145544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834cd4d7433928d%3A0x230fc3511100926c!2sRolling%20Hills%20Industries!5e0!3m2!1sen!2sus!4v1730999364494!5m2!1sen!2sus"
                        width={"100%"}
                        height={"100%"}
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </article>
            </section>
        </main>
    );
}
