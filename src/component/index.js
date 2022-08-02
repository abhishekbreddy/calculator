import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";

import '../App.css';
import {
    CLICK_ONE,
    CLICK_TWO,
    CLICK_THREE,
    CLICK_FOUR,
    CLICK_FIVE,
    CLICK_SIX,
    CLICK_SEVEN,
    CLICK_EIGHT,
    CLICK_NINE,
    CLICK_ZERO,
    CLICK_DOT,

    CLEAR_DATA,
    SHOW_HISTORY

 } from '../config';

 import { clickPlus, clickMinus, clickMultiply, clickDivide, clickResult } from '../redux/action'

class App extends Component {


    render() {
        const { 
            cal, 

            clickOne,
            clickTwo,
            clickThree,
            clickFour,
            clickFive,
            clickSix,
            clickSeven,
            clickEight,
            clickNine,
            clickZero,
            clickDot,
            
            clickPlue,
            clickMinus,
            clickMultiply,
            clickDivide,

            showResult,
            clickClear,
            show_history

        } = this.props;

        return (
        <div className="card bg-primary col-sm-12 col-md-6 col-lg-6" style={{margin:"10%",padding:"10px"}}>
            
 
              <div style={{margin : "5px 5px"}} >
                    <FormControl
                    
                        type="text"
                        value={cal.historyShow?cal.history:cal.text}
                        disabled
                    /></div>
        <div className='bg-warning border-rounded' style={{padding:"10px"}}>
           <div className='row' >
                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickOne}
                    >1</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>

                    <Button 
                        className = "button-style" 
                        onClick = {clickTwo}
                    >2</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickThree}
                    >3</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {()=>clickPlue(cal)}
                    >+</Button>
                </div>
                
                
            </div>

            <div className='row'>
            <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickFour}
                    >4</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>                    <Button 
                        className = "button-style" 
                        onClick = {clickFive}
                    >5</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickSix}
                    >6</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {()=>clickMinus(cal)}
                    >-</Button>
                </div>
                
                
            </div>

            <div className='row' >
            <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>                    <Button 
                        className = "button-style" 
                        onClick = {clickSeven}
                    >7</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickEight}
                    >8</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>                    <Button 
                        className = "button-style" 
                        onClick = {clickNine}
                    >9</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {()=>clickMultiply(cal)}
                    >x</Button>
                </div>
                
                
            </div>

            <div className='row'>
            <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickDot}
                    >.</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>
                    <Button 
                        className = "button-style" 
                        onClick = {clickZero}
                    >0</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>                    <Button 
                        className = "button-style" 
                        onClick = {()=>showResult(cal)}
                    >=</Button>
                </div>

                <div className='col-xs-3 col-md-3 col-sm-3 mx-2 text-center'>                    <Button 
                        className = "button-style" 
                        onClick = {()=>clickDivide(cal)}
                    >/</Button>
                </div>
                
                
            </div>

            <div className='row' >
                <div className='col-sm-6'>
                    <Button 
                        className = "button-clear"
                        onClick = {clickClear}
                    >clear</Button>
                </div>
                <div className='col-sm-6'>
                    <Button 
                        className = "button-clear"
                        onClick = {show_history}
                    >history</Button>
                </div>

                
                </div>
                </div>
            </div>

        );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
        cal: state.cal,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickOne : () => {
            dispatch({type:CLICK_ONE})
        },

        clickTwo : () => {
            dispatch({type:CLICK_TWO})
        },

        clickThree : () => {
            dispatch({type:CLICK_THREE})
        },

        clickFour : () => {
            dispatch({type:CLICK_FOUR})
        },

        clickFive : () => {
            dispatch({type:CLICK_FIVE})
        },

        clickSix : () => {
            dispatch({type:CLICK_SIX})
        },

        clickSeven : () => {
            dispatch({type:CLICK_SEVEN})
        },

        clickEight : () => {
            dispatch({type:CLICK_EIGHT})
        },

        clickNine : () => {
            dispatch({type:CLICK_NINE})
        },

        clickZero : () => {
            dispatch({type:CLICK_ZERO})
        },

        clickDot : () => {
            dispatch({type:CLICK_DOT})
        },

        clickPlue : (cal) => {
            dispatch(clickPlus(cal))
        },
        
        clickMinus : (cal) => {
            dispatch(clickMinus(cal))
        },

        clickMultiply : (cal) => {
            dispatch(clickMultiply(cal))
        },

        clickDivide : (cal) => {
            dispatch(clickDivide(cal))
        },

        clickClear : () => {
            dispatch({type:CLEAR_DATA})
        },

        showResult : (cal) => {
            dispatch(clickResult(cal))
        },

        show_history : () => {
            dispatch({type:SHOW_HISTORY})
        }
    }
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

