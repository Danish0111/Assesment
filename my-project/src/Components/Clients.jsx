import React, { useEffect, useState } from "react";
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';
import client8 from '../assets/client8.png';
import client9 from '../assets/client9.png';
import client10 from '../assets/client10.png';
import client11 from '../assets/client11.png';
import client12 from '../assets/client12.png';
import client13 from '../assets/client13.png';
import client14 from '../assets/client14.png';
import client15 from '../assets/client15.png';
import client16 from '../assets/client16.png';
import client17 from '../assets/client17.png';
import client18 from '../assets/client18.png';
import client19 from '../assets/client19.png';
import client20 from '../assets/client20.png';
import client21 from '../assets/client21.png';
import client22 from '../assets/client22.png';


const Clients = () => {
    const [logos, setLogos] = useState([]);

    const logoUrls = [
        client1, client2, client3, client4, client5,
        client6, client7, client8, client9, client10,
        client11, client12, client13, client14, client15,
        client16, client17, client18, client19, client20,
        client21, client22
    ];


    useEffect(() => {
        // Generate an array of logos with random positions
        const generateLogos = () =>
            logoUrls.map((url, index) => ({
                id: index,
                url: url,
                top: Math.random() * 90 + "px",
                right: Math.random() * 70 + "%",
                left: Math.random() * 80 + "%",
                width: 50 + Math.random() * 30,
            }));

        setLogos(generateLogos());
    }, []);

    return (
        <>
            <div className="Clients_Container flex flex-col justify-between items-center py-10">
                <div className="text w-full lg:w-[60%] flex flex-col items-center pb-10">
                    <h1>Our Happy Clients</h1>
                    <p className="text-[#666666] text-center">
                        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
                        resource-leveling customer service for state of the art customer service.
                    </p>
                </div>
                <div className="logos_container" >
                    {logos.map((logo) => (
                        <img className={`right-[${logo.width}] hidden lg:block`}
                            key={logo.id}
                            src={logo.url}
                            alt={`Client logo ${logo.id}`}
                            style={{ width: logo.width, position: "relative", right: logo.right }}
                        />
                    ))}
                </div>
                <div className="show_more flex items-center">
                    <span>Show more</span>
                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16667 10H15M10.8333 5L15.2441 9.41074C15.5695 9.73618 15.5695 10.2638 15.2441 10.5893L10.8333 15" stroke="#1C4670" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Clients;
