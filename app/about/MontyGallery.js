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

export default function MontyGallery() {
    return (
        <div className={styles.gallery}>
            <Image src={Photo1} alt={"1"}/>
            <Image src={Photo2} alt={"2"}/>
            <Image src={Photo3} alt={"3"}/>
            <Image src={Photo4} alt={"4"}/>
            <Image src={Photo5} alt={"5"}/>
            <Image src={Photo6} alt={"6"}/>
            <Image src={Photo7} alt={"7"}/>
            <Image src={Photo8} alt={"8"}/>
            <Image src={Photo9} alt={"9"}/>
        </div>
    )
}