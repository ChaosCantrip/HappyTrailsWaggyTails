import layout from "@/styles/modules/layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/modules/home.module.css";

export const metadata = {
    title: "Services"
}

export default function ServicesPage() {
    return (
        <div className={layout.page}>
            <div>
                <h1>Prices</h1>
                <br/>
                <table className={layout.table}>
                    <tbody>
                        <tr>
                            <td>30 Minutes Consultation</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>15 Minutes Home Visit & Interaction</td>
                            <td>£6</td>
                        </tr>
                        <tr>
                            <td>30 Minutes Solo Walk</td>
                            <td>£8</td>
                        </tr>
                        <tr>
                            <td>30 Minutes Walk (Same Household)</td>
                            <td>£6 per dog</td>
                        </tr>
                        <tr>
                            <td>30 Minutes Group Walk</td>
                            <td>£6 per dog</td>
                        </tr>
                        <tr>
                            <td>1 Hour Solo Walk</td>
                            <td>£14</td>
                        </tr>
                        <tr>
                            <td>1 Hour Walk (Same Household)</td>
                            <td>£12 per dog</td>
                        </tr>
                        <tr>
                            <td>1 Hour Group Walk</td>
                            <td>£12 per dog</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1>Services</h1>
                <br/>
                <ul className={layout.list}>
                    <li>Free consultation to determine your exact needs</li>
                    <li><PawIcon/></li>
                    <li>Solo walks for dogs who are a little nervous</li>
                    <li><PawIcon/></li>
                    <li>Group walks for dogs who love to socialise</li>
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