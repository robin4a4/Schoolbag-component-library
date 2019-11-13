import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";

/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Functions
                       
/*---------------------------------------------------------------
------------------------------------------------------------------*/


function propsFilter(props, propsInfos){
    var missingProps = []
    var isError = false;
    // -- comparison of arrays
    for(var propSaved in propsInfos){

        // if one prop saved isn't in props we check if it's optional
        if(!(propSaved in props)){
            if(propsInfos[propSaved]===true){
                isError = true;
                missingProps.push(<span className="bg-red-200 p-1 mx-1 rounded">{propSaved}</span>);
                
            }
      
        }
    } 
    // return of false and the missing prop
    return([isError, missingProps])
}

function switchProps(choices, prop){
    if(prop in choices){
        return(choices[prop]);
    }else{
        return(choices['default']);
    }
}
