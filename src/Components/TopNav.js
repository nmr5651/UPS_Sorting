import React from 'react';
import '../App.css';

import Logo from '../media/upslogo.png';

function TopNav(){

    return(
        <div className = "TopNav-container">
            <div className = "logo-container">
                <img className = "logo"src = {Logo} alt = "UPS"/>
            </div>
            <div className = "header">
                <h2>UPS Sorting Game - Nashua Hub in a Box</h2>
                <h4>Instructions</h4>
                <p>Simply click on the 'Generate' button create and random label.</p>
                <p>Then click on one of the colored buttons that represents which belt that package should go on.</p>
                <p>You will hear a ding for a correct answer, and a buzzer for an incorrect answer.</p>
            </div>
        </div>
    )
}
export default TopNav;