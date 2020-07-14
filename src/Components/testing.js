import React, { useState, useEffect } from "react";
import Data from "../Data/sortData.json";
// Install this with npm to allow us to play sound throught the device
import useSound from 'use-sound';
import correctSound from '../media/corrrect.mp3';
import incorrectSound from '../media/wrong.mp3';
import "../App.css";

import Cube from 'react-3d-cube';
import Logo from '../media/logo192.png';
import Side from '../media/testside2.png';
import Label from '../media/labelside.png';

function Testing(){

    const [correct] = useSound(
        correctSound,
        {volume: 1}
    );
    const [incorrect] = useSound(
        incorrectSound,
        {volume: 1}
    );

    const [sort, setSort] = useState({
        apprv: null,
        zip: null,
        length: null,
        color: null,
        zipLength: null
    });
        
    function checkAnswer(c){
        // Check if the answer is correct or not
        var boolStat = false;

        //debugger;
        for(var i = 0; i < Data[c].Chart.length; i++){
            for(var j = 0; j < Data[c].Chart[i].Zipcode.length; j++){
                if(sort.zip === Data[c].Chart[i].Zipcode[j]){
                    //alert("Correct");
                    correct();
                    boolStat = true;
                    break;
                }
            }
        }

        if(boolStat === false){
            //alert("Incorrect");
            incorrect();
        }

        getNumber();
    }

    function getNumber(){

        // Random select a 'color' associated with a belt
        var randID = Math.floor(Math.random() * 4);

        var chartLength = Data[randID].Chart.length;
        var chartRand = Math.floor(Math.random() * chartLength);
        var chartApprv = Data[randID].Chart[chartRand].Apprv;
        var zipLength = Data[randID].Chart[chartRand].Zipcode.length;
        var zipRand = Math.floor(Math.random() * zipLength);
        
        setSort({
            apprv: chartApprv,
            zip: Data[randID].Chart[chartRand].Zipcode[zipRand],
            length: chartLength,
            color: Data[randID].Color,
            zipLength: zipLength
        })

    }
    function handleUpdate(e){
        e.preventDefault();
        getNumber();
    }

    return (
        <div>
            <button onClick = {e => handleUpdate(e)}>
                Click me
            </button>
            <h2>{sort.color}</h2>
            <h3>{sort.length}</h3>
            <h3>{sort.apprv}</h3>
            <h3>{sort.zip}</h3>

            <div>
                <button onClick = {() => checkAnswer(0)}>Red</button>
                <button onClick = {() => checkAnswer(1)}>Yellow</button>
                <button onClick = {() => checkAnswer(2)}>Orange</button>
                <button onClick = {() => checkAnswer(3)}>Brown</button>
            </div>

            <div>
                <h1>Cube</h1>
                <div style = {{width: 300, height: 300}}>
                    <Cube size = {300} index = "front">
                        <div className = "image">
                            <img src = {Label} alt = "logo"/>
                            <h2>VT 570</h2>
                        </div>
                        <div>
                            <img src = {Side} alt = "logo"/>
                        </div>
                        <div>
                            <img src = {Side} alt = "logo"/>
                        </div>
                        <div>
                            <img src = {Side} alt = "logo"/>
                        </div>
                        <div>
                            <img src = {Logo} alt = "logo"/>
                        </div>
                        <div>
                            <img src = {Logo} alt = "logo"/>
                        </div>
                        
                    </Cube>
                    <div>right</div>
                        <div>back</div>
                        <div>left</div>
                        <div>top</div>
                        <div>bottom</div>
                </div>
            </div>
            

        </div>
        
        
    )
    

};
export default Testing;