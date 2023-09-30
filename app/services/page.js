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
                <p>30 Minutes Consultation - Free</p>
                <p>30 Minutes Home Visit & Interaction - £8</p>
                <p>30 Minutes Walk - £8</p>
                <p>45 Minutes Walk - £10</p>
                <p>1 Hour Walk - £12</p>
            </div>
            <div>
                <h1>Services</h1>
                <br/>
                <ul className={layout.list}>
                    <li>Free consultation to determine your exact needs</li>
                    <li><PawIcon/></li>
                    <li>30 minute walks for dogs who need a little exercise</li>
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