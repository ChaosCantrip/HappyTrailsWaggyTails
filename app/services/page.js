import layout from "@/styles/modules/layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "Services"
}

export default function ServicesPage() {
    return (
        <div className={layout.page}>
            <div>
                <h1>Prices</h1>
                <br/>
                <ul className={layout.list}>
                    <li>30 Minutes Consultation - Free</li>
                    <li><PawIcon/></li>
                    <li>30 Minutes Home Visit & Interaction - £8</li>
                    <li><PawIcon/></li>
                    <li>45 Minute Walk - £10 (Second Dog +£5)</li>
                    <li><PawIcon/></li>
                    <li>1 Hour Walk - £12 (Second Dog +£6)</li>
                </ul>
            </div>
            <div>
            <h1>Services</h1>
                <br/>
                <ul className={layout.list}>
                    <li>Free consultation to determine your exact needs</li>
                    <li><PawIcon/></li>
                    <li>45 minute walks for dogs who need a moderate walk</li>
                    <li><PawIcon/></li>
                    <li>1 hour walks for dogs to let out their energy</li>
                    <li><PawIcon/></li>
                    <li>Home visits for toilet breaks</li>
                </ul>
            </div>
        </div>
    )
}

function PawIcon(){
    return (
        <FontAwesomeIcon icon={faPaw} className={layout.paw}/>
    )
}