import React, {useState, useEffect, Component} from 'react';

import Cube from 'react-3d-cube';
import Side from '../media/testside2.png';
import Label from '../media/labelside.png';
import TopBottom from '../media/logo192.png';

class Box extends Component(){

    constructor(props){
        super(props);
        //this.state = {state: null};
    }

    componentDidMount(){
        //this.setState({state: this.props.apprv});
    }
  
    render(){
        return(
        
            <div className = "cube" style = {{width: 300, height: 300}}>
                <Cube size = {300} index = "front">
                    <div className = "panel">
                        <img src = {Label} alt = "front-side"/>
                        <h2>HERE</h2>
                    </div>
                    <div className = "panel"> 
                        <img src = {Side} alt = "right-side"/>
                    </div>
                    <div className = "panel">
                        <img src = {Side} alt = "back-side"/>
                    </div>
                    <div className = "panel">
                        <img src = {Side} alt = "left-side"/>
                    </div>
                    <div className = "panel">
                        <img src = {TopBottom} alt = "top-side"/>
                    </div>
                    <div className = "panel">
                        <img src = {TopBottom} alt = "bottom-side"/>
                    </div>
                </Cube>
            </div>
        )
    }
    
}
export default Box;