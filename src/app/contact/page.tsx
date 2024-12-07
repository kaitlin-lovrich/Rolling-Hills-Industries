"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Banner } from "../_components";
import emailjs from "@emailjs/browser";
import { Window } from "../_utilities";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        "from_name": "",
        "reply_to": "",
        "phone_number": "",
        "business_name": "",
        "address": "",
        "industry_type": "",
        "services_needed": "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const myPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const reSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        setIsMounted(true);
        emailjs.init(myPublicKey!);
    }, [myPublicKey]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js`;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const recaptchaResponse = (
            window as unknown as Window
        ).grecaptcha.getResponse();

        if (!recaptchaResponse) {
            setStatus("Please complete the reCAPTCHA.");
            return;
        }
        async function submitForm() {
            try {
                const response = await emailjs.sendForm(
                    serviceId!,
                    templateId!,
                    e.target as HTMLFormElement,
                    {
                        publicKey: myPublicKey,
                    }
                );
                if (response.status !== 200) {
                    throw new Error("Email service returned an error."); // Throw an error to be caught below
                }
                setStatus("Message sent successfully!");
                setFormData({
                    "from_name": "",
                    "reply_to": "",
                    "phone_number": "",
                    "business_name": "",
                    "address": "",
                    "industry_type": "",
                    "services_needed": "",
                    message: "",
                });
                (window as unknown as Window).grecaptcha.reset();
            } catch {
                setStatus("Failed to send message.");
            }
        }
        submitForm();
    }

    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
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
            <section
                className={`flex flex-col mx-auto w-[95%] max-w-[1400px] gap-10 xl:gap-14 lg:mt-4 transition opacity transform duration-500 ${
                    isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 w-full m:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Contact Rolling Hills Industries Inc Today
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-around items-start gap-5 sm:gap-9 lg:gap-14 xl:gap-16 lg:px-0 w-full *:leading-relaxed text-start">
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
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 w-full md:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
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
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="relative mt-2 drop-shadow-lg">
                    <figure>
                        <Image
                            src="/office-buildings.jpg"
                            alt="Office buildings"
                            fill={true}
                            className="rounded-xl"
                        />
                    </figure>
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex flex-col gap-5 xl:gap-7 py-6 xl:py-11 2xl:py-14 px-5 xl:px-7 text-white text-lg font-semibold bg-diagonal-light-blue-to-navy rounded-xl"
                    >
                        <div className="grid sm:grid-cols-2 gap-5 xl:gap-7 ">
                            <label htmlFor="from_name">
                                Your Name (required)
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    value={formData["from_name"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Name"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                />
                            </label>
                            <label htmlFor="reply_to">
                                Your Email (required)
                                <input
                                    type="email"
                                    id="reply_to"
                                    name="reply_to"
                                    value={formData["reply_to"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Email"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                ></input>
                            </label>
                            <label htmlFor="phone_number">
                                Phone Number
                                <input
                                    type="tel"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData["phone_number"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Phone number"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                ></input>
                            </label>
                            <label htmlFor="business_name">
                                Business/Company Name
                                <input
                                    type="text"
                                    id="business_name"
                                    name="business_name"
                                    value={formData["business_name"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Business or company name"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                ></input>
                            </label>
                            <label htmlFor="address">
                                Physical Address
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData["address"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Physical Address"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                ></input>
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 xl:gap-7">
                            <label htmlFor="industry_type">
                                Industry Type
                                <select
                                    id="industry_type"
                                    name="industry_type"
                                    value={formData["industry_type"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Industry Type"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg *:text-dark-gray"
                                >
                                    <option value="" disabled>
                                        Select Industry
                                    </option>
                                    <option value="manufacturing">
                                        Manufacturing
                                    </option>
                                    <option value="warehousing">
                                        Warehousing
                                    </option>
                                    <option value="education">Education</option>
                                    <option value="government">
                                        Government
                                    </option>
                                    <option value="financial">Financial</option>
                                    <option value="hospitality">
                                        Hospitality
                                    </option>
                                    <option value="automotive">
                                        Automotive
                                    </option>
                                    <option value="medical">Medical</option>
                                    <option value="professional office">
                                        Professional Office
                                    </option>
                                    <option value="real-estate-property-mgmt">
                                        Real Estate/Property Mgmt.
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label htmlFor="services_needed">
                                What services are you interested in?
                                <select
                                    id="services_needed"
                                    name="services_needed"
                                    value={formData["services_needed"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="What services are you interested in?"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg *:text-dark-gray"
                                >
                                    <option value="" disabled>
                                        Select Service
                                    </option>
                                    <option value="general-janitorial">
                                        General Janitorial
                                    </option>
                                    <option value="carpet-care">
                                        Carpet Care
                                    </option>
                                    <option value="hard-surface-floor-care">
                                        Hard-Surface Floor Care
                                    </option>
                                    <option value="windows-glass">
                                        Windows/Glass
                                    </option>
                                    <option value="spring-seasonal-cleaning">
                                        Spring/Seasonal Cleaning
                                    </option>
                                    <option value="specialty-service">
                                        Specialty Service
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-span-2 relative">
                            <label htmlFor="message">
                                Please Describe Your Facility
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData["message"]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Message"
                                    rows={4}
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-white drop-shadow-lg"
                                ></textarea>
                            </label>
                        </div>
                        <button
                            className="*:size-6 absolute bottom-[59px] right-[30px] text-xl hover:cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out text-white hover:text-yellow"
                            type="submit"
                            aria-label="Submit"
                        >
                            <FaPaperPlane />
                        </button>
                        <div
                            className="g-recaptcha"
                            data-sitekey={reSiteKey}
                        ></div>
                        {status && <p>{status}</p>}
                    </form>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="w-full mt-2 mb-5 drop-shadow-lg">
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
