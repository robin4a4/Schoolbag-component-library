import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";
/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Common lasses

/*---------------------------------------------------------------
------------------------------------------------------------------*/

// on set la hauteur du header qui est utilisée dans les classes Nav et Template
var headerHeight    = "16";



/*=================================================================
                            HEADERS
===================================================================*/
function Header(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'logo': false,
                'fixed': false,
                'title': false,
                'children': false
                }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    // définition des variables
    var logoImg;
    var fixedClass;

    // récupération des props
    var logo = props.logo
    var fixed = props.fixed

    // gestion du logo 
    if(logo!==undefined){
        logo = <img className="w-10 h-10 mx-2" src={process.env.PUBLIC_URL + '/img/logos/'+logo} alt="brand logo"/>
    }

    // gestion du fixed
    if(fixed!==undefined){
        fixedClass = "fixed top-0 left-0 right-0 z-30"; 
    }
    return(
        <header className={"h-"+headerHeight+" w-full flex justify-between px-5 py-2 border-t-4 items-center border-brandColor-500 shadow bg-white z-30 " + fixedClass}>
            <div className="flex items-center">
                
                {logo}
                
                <span className="uppercase font-semibold tracking-wider text-gray-900 text-xs md:text-sm">{props.title}</span>
            </div>
            <div>
                {props.children}
            </div>
        </header>
    )
}



function HeaderTitleFull(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    return(
        <div className="px-8 py-4 mb-4 bg-gray-300 text-gray-700">
            {props.children}
        </div>
    )
}