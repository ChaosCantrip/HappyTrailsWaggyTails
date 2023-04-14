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

const shownImages = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];
const hiddenImages = ["img10", "img11"];

export default function MontyGallery() {
    useEffect(() => {

        function changeImage() {
            const imageIdToShow = hiddenImages[Math.floor(Math.random() * hiddenImages.length)];
            const imageIdToHide = shownImages[Math.floor(Math.random() * shownImages.length)];
            const imageToShow = document.getElementById(imageIdToShow);
            const imageToHide = document.getElementById(imageIdToHide);
            const to_remove = [];
            imageToShow.classList.forEach((className) => {
                if (className !== styles.hidden) {
                    to_remove.push(className);
                }
            });
            to_remove.forEach((className) => {
                imageToShow.classList.remove(className);
            });
            imageToHide.classList.forEach(className => {
                if (className !== styles.hidden) {
                    imageToShow.classList.add(className);
                }
            });
            imageToShow.classList.remove(styles.hidden);
            imageToHide.classList.add(styles.hidden);
            shownImages.push(imageIdToShow);
            hiddenImages.push(imageIdToHide);
            shownImages.splice(shownImages.indexOf(imageIdToHide), 1);
            hiddenImages.splice(hiddenImages.indexOf(imageIdToShow), 1);
        }

        const interval = setInterval(changeImage, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.gallery}>
            <Image id="img1" src={Photo1} alt={"1"} className={`${styles.x0} ${styles.y0}`}/>
            <Image id="img2" src={Photo2} alt={"2"} className={`${styles.x1} ${styles.y0}`}/>
            <Image id="img3" src={Photo3} alt={"3"} className={`${styles.x2} ${styles.y0}`}/>
            <Image id="img4" src={Photo4} alt={"4"} className={`${styles.x0} ${styles.y1}`}/>
            <Image id="img5" src={Photo5} alt={"5"} className={`${styles.x1} ${styles.y1}`}/>
            <Image id="img6" src={Photo6} alt={"6"} className={`${styles.x2} ${styles.y1}`}/>
            <Image id="img7" src={Photo7} alt={"7"} className={`${styles.x0} ${styles.y2}`}/>
            <Image id="img8" src={Photo8} alt={"8"} className={`${styles.x1} ${styles.y2}`}/>
            <Image id="img9" src={Photo8} alt={"9"} className={`${styles.x2} ${styles.y2}`}/>
            <Image id="img10" src={Photo9} alt={"10"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img11" src={Photo9} alt={"11"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
        </div>
    )
}