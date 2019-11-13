import React, { Component } from "react";
import './styles/tailwind.css';

/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Common lasses

/*---------------------------------------------------------------
------------------------------------------------------------------*/

var titleTemplate   = "uppercase font-semibold tracking-wider mb-3 mt-5 text-gray-900 ";


/*=================================================================
                            Headings
===================================================================*/

function H1(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
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
        <h1 id={props.anchor}
        className = { titleTemplate + "text-3xl mt-10" }>
        {props.children}
        </h1>
    )
}

function H2(props){

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
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
        <h2 id={props.anchor}
        className = { titleTemplate + "text-xl mt-5" }>
        {props.children}
        </h2>
    )
}

function H3(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
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
        <h3 id={props.anchor}
        className = { titleTemplate + "text-lg" }>
        {props.children}
        </h3>
    )
}

function H4(props){


    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }
    
    // render
    return(
        <h4 id={props.anchor}
        className = { titleTemplate + "text-base" }>
        {props.children}
        </h4>
    )
}

function H5(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }
    
    // render 
    return(
        <h4 id={props.anchor}
        className = { titleTemplate + "text-sm" }>
        {props.children}
        </h4>
    )
}

function H6(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    // render                
    return(
        <h4 id={props.anchor}
        className = { titleTemplate + "text-xs" }>
        {props.children}
        </h4>
    )
}