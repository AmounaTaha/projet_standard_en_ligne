import React from "react"
import Style from "../css/TopBar.css"

// get our fontawesome imports
import { f2a0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";

const TopBar = () => (
    <div id="top_section">
       <ul>
            <div>
                <li>Elit Dentaire</li>
                <FontAwesomeIcon icon="f2a0" />
            </div>
            <div><li>Forfait 5H</li></div>
            <div><li>Crédit</li></div>
            <button><li>Standard ouvert</li></button>
       </ul>
    </div>
)

export default TopBar;