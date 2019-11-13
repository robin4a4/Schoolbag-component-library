import React, { Component } from "react";
import './styles/tailwind.css';

/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Common lasses

/*---------------------------------------------------------------
------------------------------------------------------------------*/

var btnTemplate     = "outline-none px-6 py-2  uppercase font-semibold tracking-wider text-sm mr-2 my-2 border-2 ";

/*=================================================================
                            Buttons
===================================================================*/

function BtnMainFilled(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className = { btnTemplate + "bg-brandColor-200 text-brandColor-800 border-brandColor-200 hover:bg-brandColor-300 rounded hover:border-brandColor-300" }
        onClick   = {()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

// boutton avec fond transparent border 4
function BtnMainStroked(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className = { btnTemplate + "bg-transparent text-brandColor-800 border-brandColor-200 hover:bg-brandColor-200 rounded" }
        onClick   = {()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

function BtnMainPillFilled(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className = { btnTemplate + "bg-brandColor-200 text-brandColor-800 border-brandColor-200 hover:bg-brandColor-300 rounded-full hover:border-brandColor-300" }
        onClick   = {()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

// boutton avec fond transparent border 4
function BtnMainPillStroked(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className = { btnTemplate + "bg-transparent text-brandColor-800 border-brandColor-200 hover:bg-brandColor-200 rounded-full" }
        onClick   = {()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

function BtnAltFilled(props){

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800 rounded"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}


function BtnAltStroked(props){

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }
                
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-transparent hover:bg-gray-400 border-gray-400 text-gray-800 rounded"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

function BtnAltPillFilled(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800 rounded-full"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}


function BtnAltPillStroked(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-transparent hover:bg-gray-400  border-gray-400 text-gray-800 rounded-full"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}



function BtnError(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-red-200 hover:bg-red-300  border-red-200 hover:border-red-300  text-red-800 rounded-full"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}

function BtnSuccess(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': true,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <button
        className={btnTemplate+"bg-green-200 hover:bg-green-300  border-green-200 hover:border-green-300 text-green-800 rounded-full"}
        onClick={()=>props.actionOnClick(props.destination)}>
        {props.children}
        </button>
    )
}
