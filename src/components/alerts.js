import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";

/*=================================================================
                            Alert
===================================================================*/

function Error(props){
    return(
        <div className="w-full bg-red-100 text-red-700 rounded border-2 border-red-200 p-4">{props.children}</div>
    )
}

function Success(props){
    return(
        <div className="w-full bg-green-200 text-green-800 rounded border-2 border-green-300 p-4">{props.children}</div>
    )
}

function Info(props){
    return(
        <div className="w-full bg-blue-100 text-blue-700 rounded border-2 border-blue-200 p-4">{props.children}</div>
    )
}

function Alert(props){
    return(
        <div className="w-full bg-yellow-200 text-yellow-800 rounded border-2 border-yellow-300 p-4">{props.children}</div>
    )
}