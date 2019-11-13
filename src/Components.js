import React, { Component } from "react";
import './styles/tailwind.css';
import Prism from 'prismjs';
import "./styles/prism.css";
/*---------------------------------------------------------------
/*---------------------------------------------------------------

            Définition des template de classes communs 

/*---------------------------------------------------------------

------------------------------------------------------------------*/


var btnTemplate     = "outline-none px-6 py-2  uppercase font-semibold tracking-wider text-sm mr-2 my-2 border-2 ";

var titleTemplate   = "uppercase font-semibold tracking-wider mb-3 mt-5 text-gray-900 ";

// on set la hauteur du header qui est utilisée dans les classes Nav et Template
var headerHeight    = "16";
/*---------------------------------------------------------------
/*---------------------------------------------------------------

                        Composant HEADER
                       
/*---------------------------------------------------------------
------------------------------------------------------------------*/
function Header(props){

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
    
  return(
    <div className="px-8 py-4 mb-4 bg-gray-300 text-gray-700">
        {props.children}
    </div>
  )
}

/*---------------------------------------------------------------
/*---------------------------------------------------------------

                          Nav

/*---------------------------------------------------------------
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
    return(

        <a href={props.href}>
            <div className="my-2 md:my-0 w-5/6 md:w-auto text-gray-800 mx-auto rounded hover:bg-gray-300 text-gray-800 p-3 text-sm">
                {props.children}

            </div>
        </a>


  )
}


/*---------------------------------------------------------------
/*---------------------------------------------------------------

                          Template

/*---------------------------------------------------------------
------------------------------------------------------------------*/
function Template(props){
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
    return(

        <section className={"relative block w-full border-t-2 border-gray-300 overflow-hidden shadow " + size}>
   
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
    return(

        <section className="hidden md:block absolute block top-0 bottom-0 right-0 w-1/4 border-r-2 border-gray-200 h-full p-4 overflow-hidden overflow-y-scroll">
            <nav>
                {props.children}
            </nav>
        </section>


  )
}

function ContentRight(props){
    return(

        <section className="w-full absolute block top-0 bottom-0 right-0 md:w-3/4 mt-7 md:mt-0  h-full p-4 overflow-hidden overflow-y-scroll z-10">

                {props.children}

        </section>


  )
}

function ContentLeft(props){
    return(

        <section className="absolute block top-0 bottom-0 left-0 w-3/4 h-full p-4 overflow-hidden overflow-y-scroll">

                {props.children}

        </section>


  )
}




/*---------------------------------------------------------------
/*---------------------------------------------------------------

                          Cards

/*---------------------------------------------------------------
------------------------------------------------------------------*/


function Card(props){
    /*-----------------
    gestion du flex
    -------------------*/
    var flex = ''
    if(props.flex !== undefined){
        flex = 'flex';
    }
    return(
        <div className={"relative bg-gray-100 shadow-lg border-t-2 border-gray-200 rounded-lg w-full my-5 overflow-hidden " + flex}>
            {props.children}
        </div>
    )
}

function CardImageLeft(props){

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
                <img className="h-40 w-full lg:h-full object-cover lg:w-1/2" src={process.env.PUBLIC_URL + '/img/unsplash/resized/'+props.image}/>
                
                <div className="lg:w-1/2 p-10 lg:h-full overflow-y-scroll">
                    {props.children}
                </div>
            </section>
        </div>
    

    
  )
}

function CardImageRight(props){

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

/*---------------------------------------------------------------
                        Slider
------------------------------------------------------------------*/

function Slider(props){
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


/*---------------------------------------------------------------
                        Diaporama
------------------------------------------------------------------*/

function Diaporama(props){
    return(

        <section className="w-full flex items-center justify-between my-5">
            <div className="cursor-pointer">
                <img className="w-10 h-10" src={process.env.PUBLIC_URL + '/img/icons/arrow-l.png'}/>
            </div>
            <section className="w-5/6 bg-red-500 flex items-center justify-center" >
                {props.children}
            </section>
            <div className="cursor-pointer">
                <img className="w-10 h-10" src={process.env.PUBLIC_URL + '/img/icons/arrow-r.png'}/>
            </div>        
        </section>
        
    )
}




/*---------------------------------------------------------------
                        titles
------------------------------------------------------------------*/
function H1(props){
  return(
    <h1 id={props.anchor}
      className = { titleTemplate + "text-3xl mt-10" }>
      {props.children}
    </h1>
  )
}

function H2(props){
  return(
    <h2 id={props.anchor}
      className = { titleTemplate + "text-xl mt-5" }>
      {props.children}
    </h2>
  )
}

function H3(props){
  return(
    <h3 id={props.anchor}
      className = { titleTemplate + "text-lg" }>
      {props.children}
    </h3>
  )
}

function H4(props){
  return(
    <h4 id={props.anchor}
      className = { titleTemplate + "text-base" }>
      {props.children}
    </h4>
  )
}

function H5(props){
  return(
    <h4 id={props.anchor}
      className = { titleTemplate + "text-sm" }>
      {props.children}
    </h4>
  )
}

function H6(props){
  return(
    <h4 id={props.anchor}
      className = { titleTemplate + "text-xs" }>
      {props.children}
    </h4>
  )
}

/*---------------------------------------------------------------
                          Buttons
------------------------------------------------------------------*/
function BtnMainFilled(props){
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
  return(
    <button
      className = { btnTemplate + "bg-transparent text-brandColor-800 border-brandColor-200 hover:bg-brandColor-200 rounded" }
      onClick   = {()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}

function BtnMainPillFilled(props){
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
  return(
    <button
      className = { btnTemplate + "bg-transparent text-brandColor-800 border-brandColor-200 hover:bg-brandColor-200 rounded-full" }
      onClick   = {()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}

function BtnAltFilled(props){
  return(
    <button
      className={btnTemplate+"bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800 rounded"}
      onClick={()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}


function BtnAltStroked(props){
  return(
    <button
      className={btnTemplate+"bg-transparent hover:bg-gray-400 border-gray-400 text-gray-800 rounded"}
      onClick={()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}

function BtnAltPillFilled(props){
  return(
    <button
      className={btnTemplate+"bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800 rounded-full"}
      onClick={()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}


function BtnAltPillStroked(props){
  return(
    <button
      className={btnTemplate+"bg-transparent hover:bg-gray-400  border-gray-400 text-gray-800 rounded-full"}
      onClick={()=>props.actionOnClick(props.destination)}>
      {props.children}
    </button>
  )
}

/*---------------------------------------------------------------
                          inputs
------------------------------------------------------------------*/

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


/*---------------------------------------------------------------
                          Documentation
------------------------------------------------------------------*/

function Markdown(props){

    return(
        <div className="my-4">
            <pre><code className="language-html">{ props.code }</code></pre>
        </div>
    )
}

function Doc(props){
    return(
        <div className="my-2">
            <span className="font-mono text-brandColor-500 font-medium"><i>{props.keyword}</i></span>
            <span className="mx-1 font-mono text-gray-600 text-sm">({props.type}):</span>
            <span>{props.children}</span>
        </div>
    )
}



/*---------------------------------------------------------------
                          Separators
------------------------------------------------------------------*/

function Hr(props){
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
    Card,
    CardImageLeft,
    CardImageRight,
    CardImageFull,
    CardImageTop,
    Slider,
    Diaporama
}

