import React, { Component } from "react";
import './styles/tailwind.css';

/*=================================================================
                        Templates
===================================================================*/
function Template(props){

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
        )
    }

    /*-----------------
    gestion de la hauteur du template
    -------------------*/

    var size = ''
    switch (props.size) {
        case 'xs':
            size = 'h-56';
            break;
        case 'sm':
            size = 'h-70';
            break;
        case 'md':
            size = 'h-90';
            break;
        case 'lg':
            size = 'h-150';
            break;
        case 'xl':
            size = 'h-200';
            break;
        case 'full':
            size = 'h-screen fixed top-0 left-0 right-0 bottom-0 ';
            break;
        default:
            console.log('Unvalid Size please select between xs, md, lg, xl, full');
    }

    // on offre le choix de donner une taille dans les attirbuts. Par défaut la card prend la totalité de l'élement
    let sizes = {
                'default': 'h-150',
                'xs': 'h-56',
                'sm': 'h-70',
                'md': 'h-90',
                'lg': 'h-150',
                'xl': 'h-200',
                'full': 'h-screen fixed top-0 left-0 right-0 bottom-0'
                }

    let templateHeight = switchProps(sizes, props.size);

    return(

        <section className={"relative block w-full border-t-2 border-gray-300 overflow-hidden shadow " + templateHeight}>
   
                {props.children}

        </section>


  )
}


class AsideLeft extends Component {
    
    constructor(props) {
        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'children': false
                        }
      
        super(props)
        this.state = {
            isToggled: false
        }

        // bindings of functions
        this.handleClick = this.handleClick.bind(this)

    }

    
    /*---------------------------------------------------------------
    gestion du click sur le burger 
    ------------------------------------------------------------------*/
    handleClick(){
        this.setState((currentState) => ({
            isToggled: !currentState.isToggled, 
        }));
    }

    render(){
        
        /*---------------------------------------------------------------
        gestion du responsive 
        ------------------------------------------------------------------*/
        var menuResponsive = "hidden";
        var launchAnimationBurger;
        var launchAnimationMenu;

        if(this.state.isToggled){
            menuResponsive        = "block"
            launchAnimationMenu   = "animateIn"
            launchAnimationBurger = "burger2close"
        }
        else{
            launchAnimationBurger = "close2burger"
        }

        return(
            <section>
                <section className="relative flex w-full bg-gray-300 border-b-2 border-gray-400 items-center px-2 h-12 z-20 md:hidden">
                    <div onClick={this.handleClick} className={"block p-2 md:hidden flex-none cursor-pointer rounded hover:bg-gray-200 mr-2 " + launchAnimationBurger}>
                        <div className="burger-top border-t-2 border-gray-500 my-1 w-6"></div>
                        <div className="burger-middle border-t-2 border-gray-500 my-1 w-6"></div>
                        <div className="burger-bottom border-t-2 border-gray-500 my-1 w-6"></div>
                    </div>
                    <div className="text-gray-800 uppercase text-wide font-semibold text-xs">
                        Aside menu
                    </div>
                </section>
                
                <section className={launchAnimationMenu + " md:block absolute block top-0 mt-12 md:mt-0  bottom-0 left-0 w-3/5 md:w-1/4 border-r-2 border-gray-300 h-full p-4 overflow-hidden overflow-y-scroll z-20 bg-gray-200 " + menuResponsive}>
                    <nav>
                        {this.props.children}
                    </nav>
                </section>
            </section>
            


        )


    }

}



function AsideRight(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }

    return(

        <section className="hidden md:block absolute block top-0 bottom-0 right-0 w-1/4 border-r-2 border-gray-200 h-full p-4 overflow-hidden overflow-y-scroll">
            <nav>
                {props.children}
            </nav>
        </section>


  )
}

function ContentRight(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }

    return(

        <section className="w-full absolute block top-0 bottom-0 right-0 md:w-3/4 mt-7 md:mt-0  h-full p-4 overflow-hidden overflow-y-scroll z-10">

                {props.children}

        </section>


  )
}

function ContentLeft(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }

    return(

        <section className="absolute block top-0 bottom-0 left-0 w-3/4 h-full p-4 overflow-hidden overflow-y-scroll">

                {props.children}

        </section>


  )
}