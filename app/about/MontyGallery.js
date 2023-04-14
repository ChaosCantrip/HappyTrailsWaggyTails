"use client";

import styles from "@/styles/modules/gallery.module.css";

import Photo1 from "@/public/images/monty/monty1.jpg";
import Photo2 from "@/public/images/monty/monty2.jpg";
import Photo3 from "@/public/images/monty/monty3.jpg";
import Photo4 from "@/public/images/monty/monty4.jpg";
import Photo5 from "@/public/images/monty/monty5.jpg";
import Photo6 from "@/public/images/monty/monty6.jpg";
import Photo7 from "@/public/images/monty/monty7.jpg";
import Photo8 from "@/public/images/monty/monty8.jpg";
import Photo9 from "@/public/images/monty/monty9.jpg";
import Photo10 from "@/public/images/monty/monty10.jpg";
import Photo11 from "@/public/images/monty/monty11.jpg";
import Photo12 from "@/public/images/monty/monty12.jpg";
import Photo13 from "@/public/images/monty/monty13.jpg";
import Photo14 from "@/public/images/monty/monty14.jpg";
import Photo15 from "@/public/images/monty/monty15.jpg";
import Photo16 from "@/public/images/monty/monty16.jpg";
import Photo17 from "@/public/images/monty/monty17.jpg";
import Photo18 from "@/public/images/monty/monty18.jpg";

import Image from "next/image";
import { useEffect } from "react";

export default function MontyGallery() {
    useEffect(() => {

        function changeImage() {
            const hiddenImages = [];
            const shownImages = [];
            const gallery = document.getElementById("gallery");
            for (const child of gallery.children) {
                if (child.classList.contains(styles.hidden)) {
                    hiddenImages.push(child);
                } else {
                    shownImages.push(child);
                }
            }
            const imageToShow = hiddenImages[Math.floor(Math.random() * hiddenImages.length)];
            const imageToHide = shownImages[Math.floor(Math.random() * shownImages.length)];
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
        }

        const interval = setInterval(changeImage, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div id="gallery" className={styles.gallery}>
            <Image id="img1" src={Photo1} alt={"1"} className={`${styles.x0} ${styles.y0}`}/>
            <Image id="img2" src={Photo2} alt={"2"} className={`${styles.x1} ${styles.y0}`}/>
            <Image id="img3" src={Photo3} alt={"3"} className={`${styles.x2} ${styles.y0}`}/>
            <Image id="img4" src={Photo4} alt={"4"} className={`${styles.x0} ${styles.y1}`}/>
            <Image id="img5" src={Photo5} alt={"5"} className={`${styles.x1} ${styles.y1}`}/>
            <Image id="img6" src={Photo6} alt={"6"} className={`${styles.x2} ${styles.y1}`}/>
            <Image id="img7" src={Photo7} alt={"7"} className={`${styles.x0} ${styles.y2}`}/>
            <Image id="img8" src={Photo8} alt={"8"} className={`${styles.x1} ${styles.y2}`}/>
            <Image id="img9" src={Photo9} alt={"9"} className={`${styles.x2} ${styles.y2}`}/>
            <Image id="img10" src={Photo10} alt={"10"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img11" src={Photo11} alt={"11"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img12" src={Photo12} alt={"12"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img13" src={Photo13} alt={"13"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img14" src={Photo14} alt={"14"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img15" src={Photo15} alt={"15"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img16" src={Photo16} alt={"16"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img17" src={Photo17} alt={"17"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
            <Image id="img18" src={Photo18} alt={"18"} className={`${styles.x0} ${styles.y0} ${styles.hidden}`}/>
        </div>
    )
}