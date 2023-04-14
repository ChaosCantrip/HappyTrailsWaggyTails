"use client";

import styles from "@/styles/modules/gallery.module.css";

import Photo1 from "@/public/images/monty/1.jpg";
import Photo2 from "@/public/images/monty/2.jpg";
import Photo3 from "@/public/images/monty/3.jpg";
import Photo4 from "@/public/images/monty/4.jpg";
import Photo5 from "@/public/images/monty/5.jpg";
import Photo6 from "@/public/images/monty/6.jpg";
import Photo7 from "@/public/images/monty/7.jpg";
import Photo8 from "@/public/images/monty/8.jpg";
import Photo9 from "@/public/images/monty/9.jpg";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MontyGallery() {
    useEffect(() => {

        function changeImage() {
            const randomImage = Math.floor(Math.random() * 9) + 1;
            const imageId = "img" + randomImage;
            document.getElementById(imageId).classList.add(styles.faded);
        }

        const interval = setInterval(changeImage, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.gallery}>
            <Image id="img1" src={Photo1} alt={"1"}/>
            <Image id="img2" src={Photo2} alt={"2"}/>
            <Image id="img3" src={Photo3} alt={"3"}/>
            <Image id="img4" src={Photo4} alt={"4"}/>
            <Image id="img5" src={Photo5} alt={"5"}/>
            <Image id="img6" src={Photo6} alt={"6"}/>
            <Image id="img7" src={Photo7} alt={"7"}/>
            <Image id="img8" src={Photo8} alt={"8"}/>
            <Image id="img9" src={Photo9} alt={"9"}/>
        </div>
    )
}