import React, { Component } from "react";
import './styles/tailwind.css';

/*=================================================================
                        Sliders
===================================================================*/


function Slider(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }
    return(
        <section className="Slider relative">
            <section className="flex flex-no-wrap w-full py-5 overflow-y-hidden overflow-x-scroll" >
                {props.children}
                <div className="h-1 w-10 flex-none"></div>
            </section>
            <div className="absolute right-0 top-0 bottom-0 bg-whiteGradient-right w-20"></div>
        </section>
        
    )
}
