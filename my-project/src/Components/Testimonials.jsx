import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import avatar from '../assets/avatar.png';

const Testimonials = () => {
    const swiperRef = useRef(null);
    const testimonials = [
        {
            rating: 4.9,
            feedback:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
            name: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: avatar,
        },
        {
            rating: 4.9,
            feedback:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
            name: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: avatar,
        },
        {
            rating: 4.9,
            feedback:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
            name: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: avatar,
        },
        {
            rating: 4.9,
            feedback:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
            name: "Chris",
            position: "President and CEO, PrintReach, USA",
            avatar: avatar,
        },
    ];

    return (
        <section className="py-10 bg-[#1C4670]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 flex justify-between">
                    <h2 className="text-4xl text-left font-bold text-white">
                        What people say about us
                    </h2>
                    <div className="flex gap-4 ">
                        <button
                            className="swiper-button-prev text-xl text-indigo-600 hover:text-indigo-800 md:w-10 h-8 flex justify-center items-center bg-white rounded-full p-2"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2229 18.3947C10.5398 18.0778 10.5687 17.5817 10.3093 17.2322L10.2229 17.132L2.52128 9.43006L10.2229 1.72807C10.5398 1.41109 10.5687 0.91506 10.3093 0.565521L10.2229 0.465382C9.90588 0.148397 9.40985 0.119581 9.06031 0.378931L8.96017 0.465382L0.62684 8.79871C0.309855 9.1157 0.281038 9.61173 0.540389 9.96126L0.62684 10.0614L8.96017 18.3947C9.30885 18.7434 9.87418 18.7434 10.2229 18.3947Z" fill="#1478F1" />
                            </svg>
                        </button>
                        <button
                            className="swiper-button-next text-xl text-indigo-600 hover:text-indigo-800 md:w-10 h-8 flex justify-center items-center bg-[#FFA229] rounded-full p-2"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.769324 18.3947C0.45234 18.0778 0.423524 17.5817 0.682874 17.2322L0.769324 17.132L8.47091 9.43006L0.769324 1.72807C0.45234 1.41109 0.423524 0.91506 0.682874 0.565521L0.769324 0.465382C1.08631 0.148397 1.58234 0.119581 1.93187 0.378931L2.03201 0.465382L10.3653 8.79871C10.6823 9.1157 10.7111 9.61173 10.4518 9.96126L10.3653 10.0614L2.03201 18.3947C1.68333 18.7434 1.11801 18.7434 0.769324 18.3947Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Slider Wrapper */}
                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="group w-[90%] bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                                <div>
                                    <div className="flex justify-between items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2084 28V19.5804C18.2084 14.2937 19.3502 9.98602 21.6338 6.65734C23.9775 3.2634 27.4329 1.04429 32 0V6.36364C29.9568 6.88578 28.3343 7.8648 27.1324 9.3007C25.9305 10.6713 25.1493 12.3357 24.7887 14.2937H30.1972V28H18.2084ZM0 28V19.5804C0 14.2937 1.14178 9.98602 3.42535 6.65734C5.76901 3.2634 9.19437 1.04429 13.7014 0V6.36364C11.6582 6.88578 10.0357 7.8648 8.8338 9.3007C7.63192 10.6713 6.8507 12.3357 6.49014 14.2937H11.8986V28H0Z" fill="url(#paint0_linear_1_22199)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_22199" x1="16" y1="0" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFA229" />
                                                    <stop offset="0.78125" stopColor="#1C4670" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <span className="text-base flex font-semibold text-indigo-600">
                                            {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                                                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                                                </svg>
                                            ))}
                                        </span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                                        {testimonial.feedback}
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                    <img
                                        className="rounded-full h-10 w-10 object-cover"
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name} avatar`}
                                    />
                                    <div>
                                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                                            {testimonial.name}
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">
                                            {testimonial.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
