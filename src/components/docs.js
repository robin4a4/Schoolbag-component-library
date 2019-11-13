import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";

/*=================================================================
                            Docs
===================================================================*/
function Markdown(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'code': true
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    return(
        <div className="my-4">
            <pre><code className="language-html">{ props.code }</code></pre>
        </div>
    )
}

function Doc(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'keyword': true,
                    'type': false,
                    'children': false
                    }

    return(
        <div className="my-2">
            <span className="font-mono text-brandColor-500 font-medium"><i>{props.keyword}</i></span>
            <span className="mx-1 font-mono text-gray-600 text-sm">({props.type})</span>:
            <span>{props.children}</span>
        </div>
    )
}
