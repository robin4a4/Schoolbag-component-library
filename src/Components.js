import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";
/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Common lasses

/*---------------------------------------------------------------
------------------------------------------------------------------*/


var btnTemplate     = "outline-none px-6 py-2  uppercase font-semibold tracking-wider text-sm mr-2 my-2 border-2 ";

var titleTemplate   = "uppercase font-semibold tracking-wider mb-3 mt-5 text-gray-900 ";

// on set la hauteur du header qui est utilisée dans les classes Nav et Template
var headerHeight    = "16";

/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Functions
                       
/*---------------------------------------------------------------
------------------------------------------------------------------*/


function propsFilter(component, props, propsInfos){
    var missingProps = []
    var isError = false;
    
    // -- comparison of arrays
    for(var propSaved in propsInfos){

        // if one prop saved isn't in props we check if it's optional
        if(!(propSaved in props)){
            if(propsInfos[propSaved]===true){
                isError = true;
                missingProps.push(<Error>Missing <span className="bg-red-200 p-1 rounded">{propSaved}</span> property in <span className="border-2 border-red-100 p-1 px-2 rounded-full">{component}</span></Error>);
            }
      
        }
    } 
    for(var prop in props){
        if(prop!=='children'){
            // if one prop saved isn't in props we check if it's optional
            if(!(prop in propsInfos)){
                
                    isError = true;
                    missingProps.push(<Warning>Unknown <span className="bg-yellow-300 p-1 rounded">{prop}</span> property in <span className="border-2 border-yellow-300 p-1 px-2 rounded-full">{component}</span></Warning>);

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


/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Components
                       
/*---------------------------------------------------------------
------------------------------------------------------------------*/
/*=================================================================
                            Strucutre
===================================================================*/

function Flex(props){
    // -- component name
    let componentName = 'Flex'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="md:flex mr-child">
            {props.children}
        </div>
    )
}


function Content(props){
    // -- component name
    let componentName = 'Content'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'width':false,
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }
    let width = props.width ? props.width : '5/6'
    return(
        <div className={'w-full mx-2 md:w-'+  width + ' md:mx-auto my-5 '}>
            {props.children}
        </div>
    )
}



/*=================================================================
                            Alert
===================================================================*/

function Error(props){
    // -- component name
    let componentName = 'Error'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="w-full relative bg-red-200 text-red-800 rounded border-2 border-red-300">
            <div className="m-2">{props.children}</div>
        </div>
    )
}

function Success(props){
    // -- component name
    let componentName = 'Success'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="w-full bg-green-200 text-green-800 rounded border-2 border-green-300">
            <div className="m-2">{props.children}</div>
        </div>
    )
}

function Info(props){
    // -- component name
    let componentName = 'Info'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="w-full bg-blue-200 text-blue-800 rounded border-2 border-blue-300">
            <div className="m-2">{props.children}</div>
        </div>
    )
}

function Warning(props){
    // -- component name
    let componentName = 'Warning'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="w-full relative bg-yellow-200 text-yellow-800 rounded border-2 border-yellow-300">
            <div className="m-2">{props.children}</div>
        </div>
    )
}

/*=================================================================
                            HEADERS
===================================================================*/
function Header(props){
    // -- component name
    let componentName = 'Header'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'logo': false,
                'fixed': false,
                'title': false,
                'children': false
                }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'HeaderTitleFull'

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

/*=================================================================
                            Navs
===================================================================*/

/*---------------------------------------------------------------
    Main Nav with reponsible capabilities
------------------------------------------------------------------*/
class Nav extends Component {
    constructor(props) {
        

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
        // -- component name
        let componentName = 'Nav'

        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                    'position': false,
                    'children': false,
                    }
        // Props filter, check whether all the pros are correct
        let filter = propsFilter(componentName, this.props, propsInfos)

        if(filter[0]){
            return(
                filter[1]
            )
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

        var responsiveContentClasses = launchAnimationMenu + " top-0 mt-20 right-0 left-0 bottom-0 w-full bg-gray-200 flex-none border-t-2 border-gray-300 overflow-y-scroll overflow-x-hidden z-20 "+ menuResponsive


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
    // -- component name
    let componentName = 'ItemNav'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'href': false,
                'children': false,
                }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(

        <a href={props.href}>
            <div className="my-2 md:my-0 w-5/6 md:w-auto text-gray-800 mx-auto rounded hover:bg-gray-300 text-gray-800 p-1 md:p-3 text-sm">
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
    // -- component name
    let componentName = 'SubNav'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                'children': false,
                }

    // render
    return(

        <nav className="flex no-wrap overflow-y-hidden overflow-x-scroll w-full items-center p-1 ">
            {props.children}
        </nav>
  )
}

function ItemSubNav(props){
    // -- component name
    let componentName = 'ItemSubNav'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'actionOnClick': true,
                    'destination': false,
                    'children': false
                    }
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    function handleClick(props){            
        props.actionOnClick(props.destination)
    }

    // render
    return(

        <button 
        className = " bg-gray-300 hover:bg-gray-400 focus:bg-brandColor-300 text-gray-900 px-5 py-2 cursor-pointer text-sm rounded-full mr-2 outline-none "
        onClick   = {()=>handleClick(props)}>
            {props.children}
        </button>

  )
}


/*=================================================================
                        Templates
===================================================================*/
function Template(props){
    // -- component name
    let componentName = 'Template'


    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'size': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
        // -- component name
        let componentName = 'AsideLeft'

        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'children': false
                        }

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
                <section className="relative flex w-full bg-gray-300 border-b-2 border-gray-400 items-center px-2 h-12 md:hidden">
                    <div onClick={this.handleClick} className={"block p-2 md:hidden flex-none cursor-pointer rounded hover:bg-gray-200 mr-2 " + launchAnimationBurger}>
                        <div className="burger-top border-t-2 border-gray-500 my-1 w-6"></div>
                        <div className="burger-middle border-t-2 border-gray-500 my-1 w-6"></div>
                        <div className="burger-bottom border-t-2 border-gray-500 my-1 w-6"></div>
                    </div>
                    <div className="text-gray-800 uppercase text-wide font-semibold text-xs">
                        Aside menu
                    </div>
                </section>
                
                <section className={launchAnimationMenu + " md:block absolute block top-0 mt-12 md:mt-0 z-20 md:z-0 bottom-0 left-0 w-4/5 md:w-1/5 border-r-2 border-gray-300 h-full p-4 overflow-hidden overflow-y-scroll bg-gray-200 pb-10 " + menuResponsive}>
                    <nav>
                        {this.props.children}
                    </nav>
                </section>
            </section>
            


        )


    }

}



function AsideRight(props){
    // -- component name
    let componentName = 'AsideRight'

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
    // -- component name
    let componentName = 'ContentRight'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'children': false
                    }

    return(

        <section className="w-full absolute block top-0 bottom-0 right-0 md:w-4/5 mt-12 md:mt-0  h-full p-3 md:p-10 overflow-hidden overflow-y-scroll z-10">

                {props.children}

        </section>


  )
}

function ContentLeft(props){
    // -- component name
    let componentName = 'ContentLeft'

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



/*=================================================================
                            Actions
===================================================================*/

function Popup(props){
    // -- component name
    let componentName = 'Popup'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'close': true,
                    'visible': true,
                    'type': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    // on offre le choix de donner une taille dans les attirbuts. Par défaut la card prend la totalité de l'élement
    let types = {
                'default': 'absolute bg-darkopacity-0.8',
                'full-dark': 'fixed bg-darkopacity-0.8',
                'full-light': 'fixed bg-opacity-0.8',
                'light': 'absolute bg-opacity-0.8',
                'dark': 'absolute bg-darkopacity-0.8'

                }

    let type = switchProps(types, props.type);

    let toogle = props.visible ? 'block' : 'hidden'

    return(
        <section className={type+" overflow-hidden z-50 left-0 top-0 right-0 bottom-0 text-center flex items-center justify-center " + toogle}>
            <div onClick={()=>props.close()} className="cursor-pointer absolute top-0 right-0 mt-4 mr-4 w-9 h-9 p-2 rounded-full hover:bg-gray-700"><img src={process.env.PUBLIC_URL + '/img/icons/close.png'}/></div>
            <div className="flex-none">
                {props.children}
                {props.visible}
            </div>
        </section>
    )
    

}

/*=================================================================
                            CARDS
===================================================================*/


function Card(props){
    // -- component name
    let componentName = 'Card'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'draggable':false,
                    'push': false,
                    'children': false
                    }

    let push = props.push ? <div className="flex items-center justify-center font-semibold rounded-full px-1 h-6 min-w-6 text-white text-xs bg-red-600 absolute top-0 right-0 -mt-2 -mr-2">{props.push}</div> : ''

    return(
        <div className="relative bg-gray-100 shadow-lg border-t-2 border-gray-200 rounded-lg w-full my-5 p-2 ">
            {push}
            {props.children}
        </div>
    )
}

function CardImageLeft(props){
    // -- component name
    let componentName = 'CardImageLeft'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'draggable':false,
                    'size': false,
                    'image': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'CardImageRight'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'draggable':false,
                    'size': false,
                    'image': true,
                    'children': false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'CardImageFull'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'draggable':false,
                    'size': false,
                    'setTargetName': false,
                    'image': true,
                    'title': true,
                    'description': true,
                    'push': false
                    }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        console.log(filter[1])
        return(filter[1])
    }

    // on offre le choix de donner une taille dans les attirbuts. Par défaut la card prend la totalité de l'élement
    let sizes = {
                'default': 'w-70 h-56',
                'xs': 'w-48 h-40',
                'sm': 'w-56 h-48',
                'md': 'w-70 h-56',
                'lg': 'w-90 h-80',
                'xl': 'w-125 h-90',

                }

    let cardSize = switchProps(sizes, props.size);
    
    // if so we can continue
    const desc = props.description.substring(0, 40)+"...";

    //-- if a push notification system is defined
    
    let push = props.push ? <div className="flex items-center justify-center font-semibold rounded-full px-1 h-6 min-w-6 text-white text-xs bg-red-600 absolute top-0 right-0 -mt-2 -mr-2">{props.push}</div> : ''

    return(

        <section style={{"background":"url("+process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image+")"}} className={cardSize + " CardImageFull relative bg-white shadow-lg rounded-lg  bg-cover bg-center cursor-pointer hover:shadow-xl flex-none mr-6"} >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-b-darkGradient rounded-b-lg">
                <div className="absolute bottom-0 mx-4 mb-4">
                    <div className="uppercase font-bold tracking-wider my-1 text-white text-xl">{props.title}</div>
                    <div className="my-1 text-white">{desc}</div>
                </div>
            </div>
            
            {push}
        </section>
    )
}

function CardImageTop(props){
    // -- component name
    let componentName = 'CardImageTop'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'draggable':false,
                    'size': false,
                    'setTargetName': false,
                    'image': true,
                    'title': true,
                    'description': true,
                    }

    const desc = props.description.substring(0, 60)+"...";

    let push = props.push ? <div className="flex items-center justify-center font-semibold rounded-full px-1 h-6 min-w-6 text-white text-xs bg-red-600 absolute top-0 right-0 -mt-2 -mr-2">{props.push}</div> : ''

    return(
        <section className="CardImageTop relative bg-white shadow-lg rounded-lg  w-70 h-90 cursor-pointer hover:shadow-xl flex-none" >
            <img className="object-cover rounded-t-lg w-full h-56" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
            <div className="w-full p-3">
                <div className="uppercase font-bold tracking-wider my-1 text-gray-800 text-xl">{props.title}</div>
                <div className="my-1 text-gray-600">{desc}</div>
            </div>

            {push}
        </section>
    )
}

/*=================================================================
                        NOTIFICATIONS
===================================================================*/



function Notification(props){
    // -- component name
    let componentName = 'Notification'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'title': true,
                    'message': true,
                    'image': false,
                    'visible': false,
                    'fixed': false,
                    'children': false
                    }

    let isFixed = props.fixed ? 'fixed' : 'absolute'
    let visible = props.visible ? 'block' : 'hidden'

    return(
        <section className={"top-0 right-0 left-0 animateFromTop w-full opacity-0 "+ visible +" bg-t-grayGradient " + isFixed +" z-100 "}>
            <section className={"rounded-lg bg-white shadow-lg flex justify-start mx-2 my-2 items-center p-3"} >
                <div className="w-1/5 text-center md:w-auto md:mx-3">
                    <img className="rounded-full w-10 h-10" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
                </div>
                <div className="flex-none w-4/5 md:w-auto md:mx-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 py-1">{props.title}</div>
                    <div className="text-xs text-gray-800">{props.message}</div>

                </div>

                
                
            </section>
        </section>
        
    )
}



/*=================================================================
                            SLIDER
===================================================================*/



function Slider(props){
    // -- component name
    let componentName = 'Slider'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'name': false,
                    'visible': false,
                    'children': false
                    }

    let toogle = props.visible ? 'block' : 'hidden'

    return(
        <section className="Slider relative">
            <section className={"flex flex-no-wrap w-full py-5 overflow-y-hidden overflow-x-scroll " + toogle} >
                {props.children}
                <div className="h-1 w-10 flex-none"></div>
            </section>
            <div className="absolute right-0 top-0 bottom-0 bg-whiteGradient-right w-10"></div>
        </section>
        
    )
}


/*=================================================================
                        SLIDESHOW
===================================================================*/
class Slideshow extends Component {

    constructor(props) {

        super(props)
        // l'état par défaut de la page est home et il n'y a pas d'image sur la page home d'ou id, date et filename nuls
        this.state = {
            slideIndex: 0,
            slidesNumber: this.props.children.length -1,
            childrens: this.props.children 
        };

        this.changeSlides = this.changeSlides.bind(this)

    }


    // Next/previous controls
    changeSlides(n) {
        
        if (this.state.slideIndex > this.state.slidesNumber) {
            this.setState({
                slideIndex: 0
            });
        }
        else if (this.state.slideIndex < 0) {
            this.setState({
                slideIndex: this.state.slidesNumber
            });
        }
        else if (this.state.slideIndex == 0 && n==-1) {
            this.setState({
                slideIndex: this.state.slidesNumber
            });
        }
        else if (this.state.slideIndex == this.state.slidesNumber && n==1) {
            this.setState({
                slideIndex: 0
            });
        }
        else{
            this.setState((currentState) => ({
                slideIndex: currentState.slideIndex+n, 
            }));
        }
    }

    render(){
        return(
            <section className="w-full flex items-center justify-between my-5">
                <div className="w-1/12 mx-2 rounded-lg  cursor-pointer text-2xl text-gray-600 text-center hover:bg-gray-300" onClick={()=>this.changeSlides(-1)}>
                    &#10094;
                </div>
                <section id="test" className="w-5/6 flex items-center justify-center">
                    {this.props.children[this.state.slideIndex]}
                </section>
                <div className="w-1/12 mx-2 rounded-lg cursor-pointer text-2xl text-gray-600 text-center hover:bg-gray-300" onClick={()=>this.changeSlides(1)}>
                    &#10095;
                </div>        
            </section>
        )
    }

}





/*=================================================================
                        TITLES
===================================================================*/
function H1(props){
    // -- component name
    let componentName = 'H1'
    
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'H2'


    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'H3'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'H4'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'H5'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'H6'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'anchor': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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


/*=================================================================
                        BUTTONS
===================================================================*/
function BtnMainFilled(props){
    // -- component name
    let componentName = 'BtnMainFilled'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnMainStroked'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': false,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <button
        className = { btnTemplate + "bg-transparent text-brandColor-800 border-brandColor-200 hover:bg-brandColor-200 rounded" }
        onClick   = {()=>props.actionOnClick()}>
        {props.children}
        </button>
    )
}

function BtnMainPillFilled(props){
    // -- component name
    let componentName = 'BtnMainPillFilled'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnMainPillStroked'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnAltFilled'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnAltStroked'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }
                
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnAltPillFilled'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnAltPillStroked'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnError'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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
    // -- component name
    let componentName = 'BtnSuccess'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'actionOnClick': true,
                    'children': false,
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
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



/*=================================================================
                        LINKS
===================================================================*/

function A(props){
    // -- component name
    let componentName = 'A'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'destination': false,
                    'setTargetName': false,
                    'href': false,
                    'children': false,
                    }
                
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    var html;
    var classes = "text-blue-500 font-semibold tracking-wide hover:text-blue-700 hover:underline";

    /*-----------------------------------------------
    Choose between a <a> or a js onClick with props
    -------------------------------------------------*/

    if(props.href!==undefined && props.actionOnClick === undefined){
        html = <a href={props.href} className={classes}>{props.children}</a>
    }
    else if(props.href===undefined && props.destination !== undefined) {
        html = <span onClick={()=>props.actionOnClick(props.destination)} className={classes}>{props.children}</span>
    }
    return(
        html
    )
}




/*=================================================================
                        INPUTS
===================================================================*/

/** <InputTextMovingLabel/>
 * 
 *  Input text with moving label from inside the input to on top of it
 * 
 */
class InputTextMovingLabel extends Component {

    constructor(props) {

        super(props)
        // l'état par défaut de la page est home et il n'y a pas d'image sur la page home d'ou id, date et filename nuls
        this.state = {
            inputValue: '',
            onFocusClasses: '',
        };
    }

    updateInputValue(evt) {
        this.setState({
        inputValue: evt.target.value
        });
    }

    handleFocus(){
        this.setState({
            onFocusClasses: 'mb-7'
        })
    }

    handleFocusOut(){
        // si il n'y a encore rien écrit dans l'input on remet le placeholder dans l'input
        if(this.state.inputValue===''){
            this.setState({
                onFocusClasses: ''
             }) 
        }
        
    }

    render(){
        // -- component name
        let componentName = 'InputTextMovingLabel'
        
        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'label': true
                        }

        // Props filter, check whether all the pros are correct
        let filter = propsFilter(componentName, this.props, propsInfos)

        if(filter[0]){
            return(
                filter[1]
            )
        }

        return(
        <div className="relative h-16 w-full">
            <input 
                type="text"
                className="pl-2 absolute bottom-0 l-0 h-10 w-full bg-gray-100 focus:bg-gray-200 border-2 border-gray-200 text-gray-800 rounded outline-none"
                required="required"
                onClick={()=>this.handleFocus()}
                onBlur={()=>this.handleFocusOut()}
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}

            />

            {/* ----- LABEL -----*/}
            <div className={"absolute h-10 bottom-0 l-0 pl-2 flex items-center "+ this.state.onFocusClasses} 
                 style={{"transitionDuration":"0.2s"}}>
                <span className="uppercase tracking-wide text-xs text-gray-800 font-semibold">{this.props.label}</span>
            </div>
        </div>
        )
    }


}

/** <InputTextMovingPlaceholder/>
 * 
 *  Input text with moving placeholder from inside the input to on the right
 *  of the fixed label
 * 
 */
class InputTextMovingPlaceholder extends Component {
    
    constructor(props) {
        
        super(props)
        // l'état par défaut de la page est home et il n'y a pas d'image sur la page home d'ou id, date et filename nuls
        this.state = {
            inputValue: '',
            inputPlaceholder: '',
            labelPlaceholder: '',
            launchAnimation: '',
        };
    }

    updateInputValue(evt) {
        this.setState({
        inputValue: evt.target.value
        });
    }

    handleFocus(){
        this.setState({
            inputPlaceholder: 'hidden',
            labelPlaceholder: this.props.placeholder,
            launchAnimation: 'animateIn'
        })
    }

    handleFocusOut(arg){
        // si on click sur le placeholder ça veut dire que l'input n'a pas changé 
        if(arg === 'clickOnPlaceholder'){

            this.setState({
                inputPlaceholder: 'animateIn',
                launchAnimation: 'animateOut'
            })   
        }
        else{

            // si il n'y a encore rien écrit dans l'input on remet le placeholder dans l'input
            if(this.state.inputValue===''){
                this.setState({
                    inputPlaceholder: 'animateIn',
                    launchAnimation: 'animateOut'
                })   
            }
        }
    }

    render(){
        // -- component name
        let componentName = 'InputTextMovingPlaceholder'

        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'label': true,
                        'placeholder': true
                        }

        // Props filter, check whether all the pros are correct
        let filter = propsFilter(componentName, this.props, propsInfos)

        if(filter[0]){
            return(
                filter[1]
            )
        }

        return(

        <div className="relative h-16 w-full my-2">
            <input 
                type="text"
                className="pl-2 absolute bottom-0 l-0 h-10 w-full bg-gray-100 focus:bg-gray-200 border-2 border-gray-200 text-gray-800 rounded outline-none"
                required="required"
                onFocus={()=>this.handleFocus()}
                onBlur={()=>this.handleFocusOut()}
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}

            />

            {/* ----- LABEL -----*/}
            <div className="flex absolute top-0 l-0 mt-1">
                <span className=" uppercase tracking-wide text-xs text-gray-800 font-semibold">         
                    {this.props.label}
                </span>
                <span className={"ml-2 tracking-wide text-xs text-gray-500 font-semibold opacity-0 "+ this.state.launchAnimation}>{this.state.labelPlaceholder}</span>
            </div>

            {/* ----- PLACEHOLDER -----*/}
            <div className={"absolute h-10 bottom-0 l-0 pl-2 flex items-center " + this.state.inputPlaceholder} 
                style={{"transitionDuration":"0.2s"}}
                onClick={()=>this.handleFocus()}
                onBlur={()=>this.handleFocusOut('clickOnPlaceholder')}>
                <span className="tracking-wide text-xs text-gray-500 font-semibold">{this.props.placeholder}</span>
            </div>
            
            
        </div>
        )
    }


}
/** <InputText/>
 * 
 *  Simple input text
 * 
 */
function InputText(props){
    // -- component name
    let componentName = 'InputText'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'label': true
                    }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    return(
        <div className="relative h-16 w-full">
            <input 
                type="text"
                className="pl-2 absolute bottom-0 l-0 h-10 w-full bg-gray-100 focus:bg-gray-200 border-2 border-gray-200 text-gray-800 rounded outline-none"
                required="required"

            />

            <span className="absolute top-0 l-0 mt-1 uppercase tracking-wide text-xs text-gray-800 font-semibold">         
                {props.label}
            </span>

        </div>
    )
}



/*=================================================================
                             DOC
===================================================================*/

function Markdown(props){
    // -- component name
    let componentName = 'Markdown'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'lang': false,
                    'code': true
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    let language = !props.lang ? 'html' : props.lang


    return(
        <div className="my-4">
            <pre><code className={"language-"+language}>{ props.code }</code></pre>
        </div>
    )
}

function InlineCode(props){
    // -- component name
    let componentName = 'InlineCode'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'code': true,
                    'lang':false
                    }

    // Props filter, check whether all the pros are correct
    let filter = propsFilter(componentName, props, propsInfos)

    if(filter[0]){
        return(
            filter[1]
        )
    }

    let language = !props.lang ? 'html' : props.lang

    return(
        <div className="my-2">
            <code className={"invert text-sm language-"+language+" bg-opacity-0"}>{ props.code }</code>   
        </div>
        
    )
}

function Doc(props){
    // -- component name
    let componentName = 'Doc'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'optional':false,
                    'keyword': true,
                    'type': false,
                    'children': false
                    }
                
    let optional = props.optional ? <span className="font-mono mx-1 text-blue-700 text-xs font-semibold"><i>Optional</i></span> : ''
    return(
        <div className="my-4 md:flex border-gray-200 border-b-2 pb-3">
            <div className="w-1/4 mt-2 md:mt-0 md:mr-2 border-none border-gray-200">
                <div className="font-mono text-brandColor-500 font-medium"><i>{props.keyword}</i></div>
                <div className="font-mono text-gray-600 text-sm">({props.type})</div>
                {optional} 
            </div>
            
            <div className="md:w-3/4 md:px-4"> {props.children}</div>
        </div>
    )
}




/*=================================================================
                        SEPARATORS
===================================================================*/

function Hr(props){
    // -- component name
    let componentName = 'Hr'

    // Admitted props : true = needed, false = optional
    let propsInfos =  {}
    return(
        <hr className='my-2'/>
    )
}



/*---------------------------------------------------------------
                          EXPORT
------------------------------------------------------------------*/
export {
    Hr,
    Header,
    HeaderTitleFull,
    Nav,
    SubNav,
    ItemSubNav,
    Template,
    AsideLeft,
    ContentRight,
    AsideRight,
    ContentLeft,
    ItemNav,
    BtnMainFilled,
    BtnMainStroked,
    BtnMainPillFilled,
    BtnMainPillStroked,
    BtnAltFilled,
    BtnAltStroked,
    BtnAltPillFilled,
    BtnAltPillStroked,
    BtnSuccess,
    BtnError,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    InputText,
    InputTextMovingLabel,
    InputTextMovingPlaceholder,
    Markdown,
    Doc,
    InlineCode,
    Card,
    CardImageLeft,
    CardImageRight,
    CardImageFull,
    CardImageTop,
    Slider,
    Slideshow,
    Error,
    Success,
    Info,
    Warning,
    Popup,
    Flex,
    Content,
    Notification,
    A
}

