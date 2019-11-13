import React, { Component } from "react";
import './styles/tailwind.css';

/*=================================================================
                        Cards
===================================================================*/



function Card(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }

    return(
        <div className="relative bg-gray-100 shadow-lg border-t-2 border-gray-200 rounded-lg w-full my-5 overflow-hidden ">
            {props.children}
        </div>
    )
}

function CardImageLeft(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': false,
                    'image': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    // on offre le choix de donner une taille dans les attirbuts. Par défaut la card prend la totalité de l'élement
    let sizes = {
                'default': 'w-full',
                'xs': 'w-1/4',
                'sm': 'w-1/2',
                'md': 'w-3/4',
                'lg': 'w-4/5',
                'xl': 'w-5/6',
                'full': 'w-full'
                }

    let cardSize = switchProps(sizes, props.size);

    return(
        <div className={"CardImageLeft flex-none lg:h-150 overflow-hidden bg-white shadow-lg rounded-lg my-5 "+ cardSize}>
            <section className="h-full w-full items-center lg:flex">
                <img className="h-40 w-full lg:h-full object-cover lg:w-1/2" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
                
                <div className="lg:w-1/2 p-10 lg:h-full overflow-y-scroll">
                    {props.children}
                </div>
            </section>
        </div>
    

    
  )
}

function CardImageRight(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': false,
                    'image': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    // on offre le choix de donner une taille dans les attirbuts. Par défaut la card prend la totalité de l'élement
    let cardSize = 'w-full';
    if(props.size==='md'){
        cardSize = 'w-4/5';
    }
    else if(props.size==='lg'){
        cardSize = 'w-5/6';
    }
    

    return(
        <div className={"CardImageLeft flex-none lg:h-150 overflow-hidden bg-white shadow-lg rounded-lg my-5 "+ cardSize}>
            <section className="h-full w-full items-center lg:flex">
                <img className="h-40 w-full object-cover lg:hidden" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
                <div className="lg:w-1/2 p-10 lg:h-full overflow-y-scroll">
                    {props.children}
                </div>
                <img className="hidden lg:block h-40 w-full lg:h-full object-cover lg:w-1/2" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
                
                
            </section>
        </div>
    

    
  )
}

function CardImageFull(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': false,
                    'image': true,
                    'title': true,
                    'description': true,
                    }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }
    
    // if so we can continue
    const desc = props.description.substring(0, 40)+"...";
    return(
        <section style={{"background":"url("+process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image+")"}} className="CardImageFull relative bg-white shadow-lg rounded-lg overflow-hidden w-70 h-56 bg-cover bg-center cursor-pointer hover:shadow-xl flex-none mr-6" >

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-darkGradient">
                <div className="absolute bottom-0 mx-4 mb-4">
                    <div className="uppercase font-bold tracking-wider my-1 text-white text-xl">{props.title}</div>
                    <div className="my-1 text-white">{desc}</div>
                </div>
            </div>

        </section>
    )
}

function CardImageTop(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': false,
                    'image': true,
                    'title': true,
                    'description': true,
                    }

    const desc = props.description.substring(0, 60)+"...";
    return(
        <section className="CardImageTop bg-white shadow-lg rounded-lg overflow-hidden w-70 h-90 cursor-pointer hover:shadow-xl flex-none" >
            <img className="object-cover w-full h-56" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
            <div className="w-full p-3">
                <div className="uppercase font-bold tracking-wider my-1 text-gray-800 text-xl">{props.title}</div>
                <div className="my-1 text-gray-600">{desc}</div>
            </div>

        </section>
    )
}