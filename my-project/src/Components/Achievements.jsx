import React from 'react';

const Achievements = () => {
    return (
        <div className="achievements_container bg-[#FAFAFA] relative py-8 px-4">
            <div className="welcome text-[#EB8D15] text-center uppercase text-sm tracking-widest">
                Why Register Karo
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl py-4 pb-10 text-center font-semibold">
                Some Numbers are Important
            </h1>

            <div className="achievements grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {[
                    { number: "1M", label: "Customers" },
                    { number: "12", label: "Years of Excellence" },
                    { number: "41", label: "R&D Engineers" },
                    { number: "78", label: "Countries" },
                    { number: "3287", label: "Partners" },
                    { number: "41", label: "Awards Received" }
                ].map((item, index) => (
                    <div key={index} className="achievement flex flex-col items-center">
                        <b className="text-4xl md:text-5xl font-extrabold">{item.number}</b>
                        <div className="font-bold text-sm md:text-base">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
