import React, { Component } from "react";
import './styles/tailwind.css';

/*=================================================================
                            Navs
===================================================================*/

/*---------------------------------------------------------------
    Main Nav with reponsible capabilities
------------------------------------------------------------------*/
class Nav extends Component {
    constructor(props) {
        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                    'position': false,
                    'children': false,
                    }
        // Props filter, check whether all the pros are correct
        let filter = propsFilter(props, propsInfos)

        if(filter[0]){
            return(
                <Error>Missing {filter[1]} property</Error>
            )
        }

        super(props)
        this.state = {
            isToggled: false
        }

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
        var position = this.props.position;
        if(this.props.position===undefined){
            position = "right";
        }
        
        /*---------------------------------------------------------------
        gestion du responsive 
        ------------------------------------------------------------------*/
        var menuResponsive = "hidden";
        var launchAnimationBurger;
        var launchAnimationMenu;
        var responsiveContent;

        if(this.state.isToggled){
            menuResponsive        = "block"
            launchAnimationMenu   = "animateIn"
            launchAnimationBurger = "burger2close"
        }
        else{
            launchAnimationBurger = "close2burger"
            launchAnimationMenu   = "animateOut"
        }

        var responsiveContentClasses = launchAnimationMenu + "  w-1/3 top-0 mt-"+headerHeight+" "+position+"-0 bottom-0 bg-gray-200 flex-none border-t-2 border-gray-300 overflow-y-scroll overflow-x-hidden z-20 "+ menuResponsive


        /*------------------------------------------------------------------------
        gestion du type de menu: si main, on fixe le menu responsive au viewport
        ---------------------------------------------------------------------------*/
        var type = this.props.type;
        if(type==="main"){
            responsiveContent = <section className={"fixed "+responsiveContentClasses}>
                                    {this.props.children}
                                </section>
        }
        else{
            responsiveContent = <section className={"absolute "+responsiveContentClasses}>
                                    {this.props.children}
                                </section>
        }

        return(
            <section>
                <nav className="hidden px-2 md:flex  md:justify-between">
                    {this.props.children}
                </nav>
                <div onClick={this.handleClick} className={"block p-2 md:hidden flex-none cursor-pointer rounded hover:bg-gray-200 " + launchAnimationBurger}>
                    <div className="burger-top border-t-2 border-gray-500 my-1 w-6"></div>
                    <div className="burger-middle border-t-2 border-gray-500 my-1 w-6"></div>
                    <div className="burger-bottom border-t-2 border-gray-500 my-1 w-6"></div>
                </div>

                {responsiveContent}
            </section>


        )
    }
}





function ItemNav(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'href': false,
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

        <a href={props.href}>
            <div className="my-2 md:my-0 w-5/6 md:w-auto text-gray-800 mx-auto rounded hover:bg-gray-300 text-gray-800 p-3 text-sm">
                {props.children}

            </div>
        </a>


  )
}

/*---------------------------------------------------------------
    Sub Nav perfect for in card navigation 
    ex: put a sub nav on top of a slider to change the content of the slider 
    according to the selection
------------------------------------------------------------------*/
function SubNav(props){
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false,
                }

    // render
    return(

        <nav className="flex w-full justify-between items-center p-1">
            {props.children}
        </nav>
  )
}

function ItemSubNav(props){

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'actionOnClick': true,
                    'destination': true,
                    'children': false
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

        <div 
        className = "bg-gray-300 hover:bg-gray-300 text-gray-900 p-3 text-sm rounded-full"
        onClick   = {()=>props.actionOnClick(props.destination)}>
        >
            {props.children}
        </div>

  )
}

