import React, { Component } from "react";
import './styles/tailwind.css';


/*=================================================================
                            Inputs
===================================================================*/



/** <InputTextMovingLabel/>
 * 
 *  Input text with moving label from inside the input to on top of it
 * 
 */
class InputTextMovingLabel extends Component {

    constructor(props) {

        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'label': true
                        }

        // Props filter, check whether all the pros are correct
        let filter = propsFilter(props, propsInfos)

        if(filter[0]){
            return(
                <Error>Missing {filter[1]} property</Error>
            )
        }

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
        // Admitted props : true = needed, false = optional
        let propsInfos =  {
                        'label': true,
                        'placeholder': true
                        }

        // Props filter, check whether all the pros are correct
        let filter = propsFilter(props, propsInfos)

        if(filter[0]){
            return(
                <Error>Missing {filter[1]} property</Error>
            )
        }

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
    // Admitted props : true = needed, false = optional
    let propsInfos =  {
                    'label': true
                    }
    
    // Props filter, check whether all the pros are correct
    let filter = propsFilter(props, propsInfos)

    if(filter[0]){
        return(
            <Error>Missing {filter[1]} property</Error>
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