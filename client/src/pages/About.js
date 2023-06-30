import { DarkThemeToggle, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import Instruction from "../components/Instruction";
import Doubtcomponent from "../components/Doubt";
import { useEffect } from "react";
import FooterComponent from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="h-full relative w-full color.blue bg-East bay w-[80%] m-auto" >
                <div className={`w-[75%] m-auto`} data-aos="flip-up"  data-aos-delay="100">
                        <Instruction></Instruction>
                </div>
                <div id="feedback" className="w-[85%] m-auto "  data-aos="fade-up"  data-aos-delay="100">
                    <Doubtcomponent></Doubtcomponent>
                </div>
            </div>

        </>
    )
}