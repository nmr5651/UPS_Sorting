// Main React import to make everything work
// As well as local json file that holds all values for boxes
import React, {useState} from 'react';
import Data from '../Data/sortData.json';

// All of the imports for sound-related actions
import useSound from 'use-sound';
import correctSound from '../media/corrrect.mp3';
import incorrectSound from '../media/wrong.mp3';

// Main css file that is used to style everything for now
import "../App.css";

import Label from '../media/labelside.png';

// Main function that will hold most of the important code
function PlayingField() {

    // State initalized with all of the approiate information
    // Will be filled in during the retrieval of the Randomly Generated Labels
    const [sort, setSort] = useState({
        apprv: null,
        zip: null,
        length: null,
        color: null,
        zipLength: null
    });

    // Constant that will play the "correct-answer" sound when method is ran
    const [correct] = useSound(
        correctSound,
        {volume: 1}
    );
    // Constat to play the "incorrect-answer" sound when funciton runs
    const [incorrect] = useSound(
        incorrectSound,
        {volume: 0.6}
    );

    // Function that will check if the answer the user picked is correct/incorrect
    function checkAnswer(c){
        // Check if the answer is correct or not
        var boolStat = false;

        // Loop for the First set of indexs of Json
        for(var i = 0; i < Data[c].Chart.length; i++){
            // Loop for the array of zipcodes within each index
            for(var j = 0; j < Data[c].Chart[i].Zipcode.length; j++){
                if(sort.zip === Data[c].Chart[i].Zipcode[j]){
                    
                    // Runs correct sound function
                    correct();
                    boolStat = true;
                    break;
                }
            }
        }

        if(boolStat === false){
            // Runs the incorrect sound function
            incorrect();
        }

        // Runs the function to retreive another random label
        getNumber();
    }

    /*
     * Function to randomly generate a label from the Json file
     * Seems very confusing, and maybe there is a better way of doing
     * such a task but I found myself doing it this way
     */
    function getNumber(){

        // Will generate a number between 1-4 that will assoicate to a certain color
        var randID = Math.floor(Math.random() * 4);
        // Grabs the length of the amount of different states that color is assoicated to
        var chartLength = Data[randID].Chart.length;
        // Grabs a random index of the length found abve
        // The length varies between each index
        var chartRand = Math.floor(Math.random() * chartLength);
        // Based on the values generated above, grabs the state apprvation assoicated with above index
        var chartApprv = Data[randID].Chart[chartRand].Apprv;
        // Grabs the length of the zipcode array assoicate with the 'chartRand' found above
        var zipLength = Data[randID].Chart[chartRand].Zipcode.length;
        // Generates a random number from the length of the array of zipcodes in assoicated outer index
        var zipRand = Math.floor(Math.random() * zipLength);
        
        // Set the state with the apporatate data found above
        setSort({
            apprv: chartApprv,
            zip: Data[randID].Chart[chartRand].Zipcode[zipRand],
            length: chartLength,
            color: Data[randID].Color,
            zipLength: zipLength
        })

    }

    // Function that is ran from the click of the generate button
    // Don't know exactly why I need the preventDefualt() but its necessary
    function handleUpdate(e){
        e.preventDefault();
        // Runs the function to generate data for the label
        getNumber();
    }


    return (
        <div className = "playing-field">

            <div className = "inner-field">
                <div className = "colored-button-group">
                    <button className = "colored-button red" onClick = {() => checkAnswer(0)}>
                        Placer
                    </button>
                    <button className = "colored-button yellow" onClick = {() => checkAnswer(1)}>
                        Placer
                    </button>
                    <button className = "colored-button orange" onClick = {() => checkAnswer(2)}>
                        Placer
                    </button>
                    <button className = "colored-button brown" onClick = {() => checkAnswer(3)}>
                        Placer
                    </button>
                </div>

                <div className = "label">
                    <img className = "frontlabel" src = {Label} alt = "front"/>
                    <h2>{sort.apprv}   {sort.zip}</h2>
                </div>
                
                <div className = "generate-container">
                    <button className = "generate-button" onClick = {e => handleUpdate(e)}>
                        Generate
                    </button>
                </div>
                
                
            
            </div>

        </div>
    )
};

export default PlayingField;

