import React from "react"
import Style from "../css/Footer.css"

const Footer = () => (
    <div id="footer_section">
       <ul id="freetrial">
            <li className="first">Essai gratuit</li>
            <li>30 minutes d'appel restantes dans votre période d'essai</li>
       </ul>

        <div className="freetrialtime">
            <div className="bar_button">
                <h3><button className="button1" disabled>30 min</button><span className="time"></span></h3>
                <button className="button2">Choisir un plan</button>
            </div>
        </div>

        <ul id="minutes">
            <li className="start">30 min</li>
            <li className="end">0 min</li>
       </ul>

    </div>
)

export default Footer;
