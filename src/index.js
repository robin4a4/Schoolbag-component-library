import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prism from 'prismjs';

import './styles/tailwind.css';

import {Hr,
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
        Diaporama,
        Error,
        Success,
        Info,
        Alert,
        Popup
        } from './Components';



class App extends Component {
    constructor(props) {
        super(props)
        // states definition
        this.state = {
            popups: {'popup1' : false},
            navSlider: {'slider1' : true,
                        'slider2' : false,
                        'slider3' : false,
                        'slider4' : false,
                        'slider5' : false},
        };

        // binding of functions
        this.actionToogle     = this.actionToogle.bind(this)
        this.changeContent    = this.changeContent.bind(this)


    }

    actionToogle(element){
            this.setState((currentState) => ({
                popups: {[element] : !currentState.popups[element]}
            }));
    }
  
    changeContent(wrapper, contentToShow){
        // set contentToShow to true, the rest will desapear
        this.setState({
            [wrapper]: {[contentToShow] : true}
        });
    }

  render() {

    return (
      <section className="bg-gray-100 h-full w-full">

        <Header title="Schoolbag component library"/>
        <Template size="full">
            <AsideLeft>
                <H6>Header & navs</H6>
                <ItemNav href="#1">With logo</ItemNav>
                <ItemNav href="#2">Without logo</ItemNav>
                <ItemNav href="#3">Without text</ItemNav>
                <Hr/>

                <H6>Templates</H6>
                <ItemNav href="#4">Template without header</ItemNav>
                <ItemNav href="#5">Template with header</ItemNav>
                <Hr/>

                <H6>Buttons</H6>
                <ItemNav href="#6">Main buttons</ItemNav>
                <ItemNav href="#7">Alternative buttons</ItemNav>
                <Hr/>

                <H6>Headings</H6>
                <ItemNav href="#8">Headings</ItemNav>
                <Hr/>

                <H6>Inputs</H6>
                <ItemNav href="#9">Inputs</ItemNav>
                <Hr/>

                <H6>Cards</H6>
                <ItemNav href="#10">Card with an image on the left</ItemNav>
                <ItemNav href="#11">Card with an image on the right</ItemNav>
                <ItemNav href="#12">Small card</ItemNav>
                <ItemNav href="#13">Card with an image on top</ItemNav>
                <Hr/>

                <H6>Sliders</H6>
                <ItemNav href="#14">Simple slider</ItemNav>
                <ItemNav href="#15">Slider with complex HTML</ItemNav>
                <Hr/>
            </AsideLeft>

            <ContentRight>
                <section className="w-full">
               
                    <H1>Actions</H1>

                    <H4>Sub nav</H4>
                    <Card>
                        <SubNav>
                            <ItemSubNav actionOnClick={()=>this.changeContent('navSlider', 'slider1')}>Card xs</ItemSubNav>
                            <ItemSubNav actionOnClick={()=>this.changeContent('navSlider', 'slider2')}>Card sm</ItemSubNav>
                            <ItemSubNav actionOnClick={()=>this.changeContent('navSlider', 'slider3')}>Card md</ItemSubNav>
                            <ItemSubNav actionOnClick={()=>this.changeContent('navSlider', 'slider4')}>Card lg</ItemSubNav>
                            <ItemSubNav actionOnClick={()=>this.changeContent('navSlider', 'slider5')}>Card xl</ItemSubNav>
                        </SubNav>

                        <Slider name="slider1" visible={this.state.navSlider['slider1']}>
                            <CardImageFull size="xs" image="simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="xs" image="mitchell-luo-bFebN-p_go8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="xs" image="mads-schmidt-rasmussen-xfngap_DToE-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="xs" image="mitchell-luo-bFebN-p_go8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                        </Slider>

                        <Slider name="slider2" visible={this.state.navSlider['slider2']}>
                            <CardImageFull size="sm" image="victor-qm9pHqVt7KA-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="sm" image="alexander-tsang-k5kaWuxelPU-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="sm" image="will-turner-839rC40c-F8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>

                        </Slider>
                        <Slider name="slider3" visible={this.state.navSlider['slider3']}>
                            <CardImageFull size="md" image="will-turner-839rC40c-F8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="md" image="victor-qm9pHqVt7KA-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>

                        </Slider>
                        <Slider name="slider4" visible={this.state.navSlider['slider4']}>
                            <CardImageFull size="lg" image="will-turner-839rC40c-F8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="lg" image="victor-qm9pHqVt7KA-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>

                        </Slider>
                        <Slider name="slider5" visible={this.state.navSlider['slider5']}>
                            <CardImageFull size="xl" image="will-turner-839rC40c-F8-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <CardImageFull size="xl" image="victor-qm9pHqVt7KA-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>

                        </Slider>

                        <div className="w-5/6 mx-auto my-10 ">
                            <H4>Description</H4>
                            Create a small navigation component. Here we switch between five Slider components but it can be every other DOM elements as long as you name them (see below).

                            <H4>Connection</H4>
                            Since it is an interactive element, you will have to create a new nav state :
                            <InlineCode code="yournav: {'page1' : true, 'page2' : false}" lang="javascript"/>
                            The boolean value gives the visibility of the page, here the first one is visible by default.
                            By page we mean the DOM elements that will be impacted by the nav. It is not a tangible component (see examples).

                            
                            <H4>Attributs for SubNav</H4>
                            No attributes.
                            <H4>Attributs for ItemSubNav</H4>
                            <Doc keyword="actionOnClick" type="function">
                                Set the function to be called when the user click on the nav item. 
                                The library have this function set to open a page : <InlineCode code="()=>this.changeContent('yournav', 'page1')" lang="javascript"/>
               
                                The first argument is the name of your nav defined as a state, the seconde argument is the page you want to open.
                            </Doc>

                            <H4>Attributs for the components below</H4>
                            In order to make your elements behave like pages, you have to give them a name and a visibile attribut.

                            <Doc keyword="name" type="text">
                                Set the name of your page component. 
                            </Doc>
                            <Doc keyword="visible" type="boleean">
                                Set the visibility of your page. It needs to be managed by your nav state visibility : 
                                <InlineCode code="visible={this.state.yournav['page1']}" lang="javascript"/>
                            </Doc>
   
                            <H4>Component code</H4>
                            <Markdown code="<Popup visible={this.state.popups['popup1']} close={()=>this.actionToogle('popup1')}>Your content</Popup>" lang="javascript"/>

                        </div>
                        
                    </Card>

                    <H4>Popup</H4>
                    <Card>
 
                        <div className="w-5/6 mx-auto my-10 ">
                            <BtnSuccess actionOnClick={()=>this.actionToogle('popup1')} destination="">Show popup</BtnSuccess>

                            <H4>Description</H4>
                            Create a popup element with your content inside that can be toggled on click.
       
                            <H4>Connection</H4>
                            Since it is an interactive element, you will have to create a new popup line in the state object popups:  
                            <InlineCode code="{'yourpopupsname' : false, 'otherpopup' : false}" lang="javascript"/> 
                            The boolean value gives the visibility of the popup.
                            <H4>Attributs</H4>
                            <Doc keyword="visible" type="boolean">
                                Define the visibility of the popup element. False is hidden, True is visible.
                            </Doc>
                            <Doc keyword="close" type="function">
                                Set the function to be called when the user click on the close icon. 
                                The library have this function set to toggle elements : <InlineCode code="()=>this.actionToogle('yourpopupsname')" lang="javascript"/>
                                
                            </Doc>
                            <Doc keyword="type" type="text">
                                Set the format for your popup. <br></br>
                                Options :
                                <li>dark <span className="font-mono mx-1 text-blue-700 text-xs font-semibold"><i>Default</i></span> : dark background that takes the entire container.</li>
                                <li>light : white background that takes the entire container.</li>
                                <li>full-dark : fixed dark background that takes the entire viewport.</li>
                                <li>full-light : fixed white background that takes the entire viewport.</li>
                                
                                
                            </Doc>
   
                            <H4>Component code</H4>
                            <Markdown code="<Popup visible={this.state.popups['popup1']} close={()=>this.actionToogle('popup1')}>Your content</Popup>" lang="javascript"/>

                        </div>
              

                        <Popup visible={this.state.popups['popup1']} close={()=>this.actionToogle('popup1')}>
                            <CardImageFull image="simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg" description="Lorem ipsum desei aezl" title="Test action" setTargetName="simone"/>
                            <div className="flex">
                                <BtnAltFilled actionOnClick={()=>this.actionToogle('popup1')}>Button</BtnAltFilled>
                            </div>
                        </Popup>
                        
                        
        
                    </Card>

                    <H1>Headers & navs</H1>
                    <H4 anchor="1">With logo</H4>
                    <Card>
                        <Header logo="logoipsum2.png" title="Lorem">
                            <Nav>
                                <ItemNav href="">Sub menu 1</ItemNav>
                                <ItemNav href="">Sub menu 2</ItemNav>
                                <ItemNav href="">Sub menu 3</ItemNav>
                                <ItemNav href="">Sub menu 4</ItemNav>
                            </Nav>
                        </Header>

                        <div className="w-5/6 mx-auto my-10 ">
                            <H4>Description</H4>
                            Create a header sticked to the top of the parent.
                            <H4>Attributs</H4>
                            <Doc keyword="logo" type="filename">
                                Insert the filename of the logo you want to show in the top left of your header.
                            </Doc>
                            <Doc keyword="title" type="text">
                                Insert your title.
                            </Doc>
                            <H4>Component code</H4>
                            <Markdown code="<Header logo='logoipsum2.png' title='Lorem'></Header>"/>

                        </div>
                    </Card>


                    <H4 anchor="2">Without logo</H4>      
                    <Card>
                        <Header title="Lorem">
                            <Nav>
                                <ItemNav href="">Sub menu 1</ItemNav>
                                <ItemNav href="">Sub menu 2</ItemNav>
                                <ItemNav href="">Sub menu 3</ItemNav>
                            </Nav>
                        </Header>

                        <div className="w-5/6 mx-auto my-10">
                            <H4>Description</H4>
                            Create a header sticked to the top of the parent without a logo.
                            <H4>Attributs</H4>
                            <Doc keyword="title" type="text">
                                Insert your title.
                            </Doc>
                            <H4>Component code</H4>
                            <Markdown code="<Header title='Lorem'></Header>"/>
                        </div>

                    </Card>

                    <H4 anchor="3">Without text</H4> 
                    <Card>
                        <Header>
                            <Nav>
                                <ItemNav href="">Sub menu 1</ItemNav>
                                <ItemNav href="">Sub menu 2</ItemNav>
                                <ItemNav href="">Sub menu 3</ItemNav>
                            </Nav>
                        </Header>
                        <div className="w-5/6 mx-auto my-10">
                            <H4>Description</H4>
                            Create a header sticked to the top of the parent without logo nor text.
                            <H4>Attributs</H4>
                            <Doc keyword="title" type="text">
                                Insert your title.
                            </Doc>
                            <H4>Component code</H4>
                            <Markdown code="<Header></Header>"/>
                        </div>
                    </Card>


                    <H1>Templates</H1>

                    <H4 anchor="4">Template without header</H4> 
                    <Template size="xl">
                        <AsideLeft>
                            <ItemNav href="">Sub menu 1</ItemNav>
                            <ItemNav href="">Sub menu 2</ItemNav>
                            <ItemNav href="">Sub menu 3</ItemNav>
                        </AsideLeft>
                        <ContentRight>

                            <H4>Description</H4>
                            
                            Create a template without a header. Templates have a fixed height that you can set via the size attribut.
                            
                            You have to create an Aside and a Content element in order to make it works. In this one there is an <Markdown code="<AsideLeft></AsideLeft>"/> and a <Markdown code="<ContentRight></ContentRight>"/>
                            You can invert them with AsideRight and ContentRight.
                            <H4>Attributs</H4>
                            <Doc keyword="size" type="Tailwind sizes">
                                Set the height of your template. You have :
                                <li><i>xs</i></li>
                                <li><i>sm</i></li>
                                <li><i>md</i></li>
                                <li><i>lg</i></li>
                                <li><i>xl</i></li>
                                <li><i>full: the template will occupy the entire viewport (just like this website).</i></li>
                            </Doc>
                            <H4>Component code</H4>
                            <Markdown code="<Template size='lg'><AsideLeft></AsideLeft><ContentRight></ContentRight></Template>
                                            "/>
                        </ContentRight>
                    </Template>

                    <H4 anchor="5">Template with header</H4>
    
                        <Header title="Lorem"/>
                        <Template size="sm">
                            <AsideLeft>
                                <ItemNav href="">Sub menu 1</ItemNav>
                                <ItemNav href="">Sub menu 2</ItemNav>
                                <ItemNav href="">Sub menu 3</ItemNav>
                            </AsideLeft>
                            <ContentRight>
                                <H4>Description</H4>
                                Create a section with a header and a template.
                                The only thing to note is that you can't have a fixed header with a full screen template. You have to let your header be normal.

                                <H4>Component code</H4>

                                <Markdown code="<Header title='Lorem'/><Template size='sm'><AsideLeft>Your menu</AsideLeft><ContentRight>Your content</ContentRight></Template></Header>
                                            "/>
                            </ContentRight>
                    </Template>
         

                    <H1>Buttons</H1>
                    <H4 anchor="6">Main buttons</H4>
                    <Card>
                        <div className="p-4">
                            <H4>Description</H4>
                            
                            These components allow to create buttons. These ones are the main button which means that their color is the brandColor.
                            

                            <H4>Attributs</H4>
                            There are two attributes :
                            <Doc keyword="actionOnClick" type="React function">
                                Set the callback function to be called. It will give the destination to the parent.
                            </Doc>
                            <Doc keyword="destination" type="text">
                                Set the destination of the button. It will update the parent's state destination.
                            </Doc>

                            <H4>Examples</H4>

                            <BtnMainFilled actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnMainFilled>
                            <Markdown code="<BtnMainFilled actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>

                            <BtnMainStroked actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnMainStroked>
                            <Markdown code="<BtnMainStroked actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>

                            <BtnMainPillFilled actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnMainPillFilled>
                            <Markdown code="<BtnMainPillFilled actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>

                            <BtnMainPillStroked actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnMainPillStroked>
                            <Markdown code="<BtnMainPillStroked actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>
                        </div>
                    </Card>
                    
                    <H4 anchor="7">Alternative buttons</H4>
                    <Card>
                        <div className="p-4">
                            <H4>Description</H4>
                            
                            Same than above but with a gray color scheme.
        
                            <H4>Examples</H4>
                            <BtnAltFilled actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnAltFilled>
                            <Markdown code="<BtnAltFilled actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>
                            <BtnAltStroked actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnAltStroked>
                            <Markdown code="<BtnAltStroked actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>
                            <BtnAltPillFilled actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnAltPillFilled>
                            <Markdown code="<BtnAltPillFilled actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>
                            <BtnAltPillStroked actionOnClick={this.changePageOnClick} destination="Page 1">Go page1</BtnAltPillStroked>
                            <Markdown code="<BtnAltPillStroked actionOnClick={this.changePageOnClick} destination='Page 1' text='Go page1'/>"/><br/>
                        </div>

                    </Card>
                
                    <H1 anchor="8">Headings</H1>

                    <Card>
                        <div className="p-4">
                            <H4>Description</H4>
                                
                            Simple heading component that can accept an anchor attribut.
                            

                            <H4>Attribut</H4>

                            <Doc keyword="anchor" type="text">
                                Set an anchor to the dom element to be able to jump to this component from a <Markdown code="<a></a>"/>
                            </Doc>

                            <H4>Examples</H4>
                                <div className="m-4">
                                    <H1 anchor="8_2">H1 title</H1> 
                                    <Markdown code="<H1 anchor='8_2'>H1 title</H1>"/>
                                    <H2>H2 title</H2> 
                                    <Markdown code="<H2>H2 title</H2>"/>
                                    <H3>H3 title</H3> 
                                    <H4>H4 title</H4> 
                                    <H5>H5 title</H5> 
                                    <H6>H6 title</H6> 
                                    <Hr></Hr><br></br>
                                    <a href="#8_2" className="p-2 bg-gray-300 rounded text-blue-500 hover:bg-gray-400 cursor-pointer">Go to H1 title</a>
                                </div>
                            </div>
                        
                    </Card>

                    <H1 anchor="9">Inputs</H1>
                    <Card>

                        <div className="m-4">
                            <H4>Description</H4>
                                
                            Three different ways to write inputs:
                            <li>Fixed label, no placeholder</li>
                            <li>Fixed label, moving placeholder</li>
                            <li>No label, moving placeholder</li>

                            <H4>Attribut</H4>

                            <Doc keyword="label" type="text">
                                Set the label.
                            </Doc>
                            <Doc keyword="placeholder" type="text">
                                Set the placeholder.
                            </Doc>

                            <H4>Examples</H4>

                            <InputText label="test input"/>
                            <Markdown code="<InputText label='test input'/>"/>
                            <br/>
                            <hr/>
                            <br/>
                            <InputTextMovingPlaceholder label="Test input 2" placeholder="ex: john@smith.com"/>
                            <Markdown code="<InputTextMovingPlaceholder label='test input 2' placeholder='ex: john@smith.com'/>"/>
                            <br/>
                            <hr/>
                            <br/>
                            <InputTextMovingLabel label="test input 3"/>
                            <Markdown code="<InputTextMovingLabel label='test input 3'/>"/>

                        </div>
                    </Card>



                    <H1>Cards</H1>
                    <H4 anchor="10">Card with an image on the left</H4>


                    <CardImageLeft image="simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg">
                        <H2>Card left image</H2>
                        <Hr/>
                        <H4>Description</H4>
                                
                        Create a two part card layout with an image using this component.
                        <br/><br/>You can put everything you want in this tags (see next).
                        <H4>Attribut</H4>

                        <Doc keyword="image" type="filename">
                            Write the image you want to display.
                        </Doc>

                        <H4>Component code</H4>
                        <Markdown code="<CardImageLeft image='simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg'><H2>Card left image</H2><Hr/>Your content</CardImageLeft>"/>

                    </CardImageLeft>
                        
                    <H4 anchor="11">Card with an image on the right</H4>


                    <CardImageRight image="simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg">
                        <H2>Card right image</H2>
                        <Hr/>
                        <H4>Paragraph</H4>
                        <p className="text-gray-700">Sunt cupidatat non nostrud non ex et consequat anim non enim proident ut tempor. Non anim eiusmod ea proident esse tempor ullamco fugiat dolore quis. Ullamco officia fugiat ut et proident commodo aute quis velit cupidatat reprehenderit commodo cupidatat.</p>
       
                        <H4>Form</H4>
                        <InputTextMovingPlaceholder label="Name" placeholder="ex: John Smith"/>
                        <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                        <div className="flex">
                            <BtnMainFilled>Submit</BtnMainFilled>
                            <BtnAltStroked>Other</BtnAltStroked>
                        </div>

                    </CardImageRight>
                    
                    <H4 anchor="12">Small card </H4>
                    <Card>
                        <div className="m-4">
                            <CardImageFull title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="alexander-tsang-k5kaWuxelPU-unsplash_resultat.jpg"/>

                            <H4>Description</H4>
                            Create a little thumbnail card.
                            <H4>Attribut</H4>

                            <Doc keyword="title" type="text">
                                Set the title of your card.
                            </Doc>
                            <Doc keyword="description" type="text">
                                Set the description of your card. Don't worry for the string's lenght, it will be cut to fit in the element.
                            </Doc>
                            <Doc keyword="image" type="filename">
                                Set the image of your card.
                            </Doc>

                            <H4>Component code</H4>
                            <Markdown code="<CardImageFull title='Card title' description='Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation.' image='simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg'/>"/>
                        </div>
                        


                    </Card>
                    

                    <H4>card with image on top</H4>

                    <Card>
                        <div className="m-4">
                            <CardImageTop title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="alexander-tsang-k5kaWuxelPU-unsplash_resultat.jpg"/>

                            <H4>Description</H4>
                            Create a little card with an image at the top.
                            <H4>Attribut</H4>

                            <Doc keyword="title" type="text">
                                Set the title of your card.
                            </Doc>
                            <Doc keyword="description" type="text">
                                Set the description of your card. Don't worry for the string's lenght, it will be cut to fit in the element.
                            </Doc>
                            <Doc keyword="image" type="filename">
                                Set the image of your card.
                            </Doc>

                            <H4>Component code</H4>
                            <Markdown code="<CardImageTop title='Card title' description='Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation.' image='simone-hutsch-ZQprWtq4ZJw-unsplash_resultat.jpg'/>"/>
                        </div>
                        


                    </Card>

            

                    <H1>Sliders</H1>
                    <H4 anchor="13">Simple slider</H4>

                    <Slider visible="true">

                        <CardImageFull title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="alexander-tsang-k5kaWuxelPU-unsplash_resultat.jpg"/>
                        
                        <CardImageFull title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="clark-van-der-beken-95hdzhGENbA-unsplash_resultat.jpg"/>

                        <CardImageFull title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="danist-DxpsujC-l5M-unsplash_resultat.jpg"/>

                        <CardImageFull title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="mads-schmidt-rasmussen-xfngap_DToE-unsplash_resultat.jpg"/>

                    </Slider>

                    <Slider visible="true">

                        <CardImageTop title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="alexander-tsang-k5kaWuxelPU-unsplash_resultat.jpg"/>
                        
                        <CardImageTop title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="clark-van-der-beken-95hdzhGENbA-unsplash_resultat.jpg"/>

                        <CardImageTop title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="danist-DxpsujC-l5M-unsplash_resultat.jpg"/>

                        <CardImageTop title="Card title" description="Labore laboris eiusmod cillum elit sunt enim commodo dolor id anim commodo exercitation." image="mads-schmidt-rasmussen-xfngap_DToE-unsplash_resultat.jpg"/>

                    </Slider>

                    <Card>
                        <div className="m-4">
                            <H4>Description</H4>
                            Create a slider of any element

                            <H4>Component code</H4>

                            <Markdown code="<Slider>Your elements here</Slider>"/>
                        </div>
                    </Card>

                    <H4 anchor="14">Slider with complex html</H4>

                    <Slider visible="true">

                        <CardImageLeft size="md" image="mark-boss-18jr5cDfqAw-unsplash_resultat.jpg">
                            <H2>Card exemple</H2>
                            <Hr/>
                            <H4>Paragraph</H4>
                            <p className="text-gray-700">Sunt cupidatat non nostrud non ex et consequat anim non enim proident ut tempor. Non anim eiusmod ea proident esse tempor ullamco fugiat dolore quis. Ullamco officia fugiat ut et proident commodo aute quis velit cupidatat reprehenderit commodo cupidatat.</p>
                            <p className="text-gray-900">Sunt cupidatat non nostrud non ex et consequat anim non enim proident ut tempor. Non anim eiusmod ea proident esse tempor ullamco fugiat dolore quis. Ullamco officia fugiat ut et proident commodo aute quis velit cupidatat reprehenderit commodo cupidatat.</p>
                            <br />
                            <H4>Form</H4>
                            <InputTextMovingPlaceholder label="Name" placeholder="ex: John Smith"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <div className="flex">
                                <BtnMainFilled>Submit</BtnMainFilled>
                                <BtnAltStroked>Other</BtnAltStroked>
                            </div>

                        </CardImageLeft>

                        <CardImageLeft size="md" image="mitchell-luo-bFebN-p_go8-unsplash_resultat.jpg">
                            <H2>Card exemple</H2>
                            <Hr/>
                            <H4>Paragraph</H4>
                            <p className="text-gray-700">Sunt cupidatat non nostrud non ex et consequat anim non enim proident ut tempor. Non anim eiusmod ea proident esse tempor ullamco fugiat dolore quis. Ullamco officia fugiat ut et proident commodo aute quis velit cupidatat reprehenderit commodo cupidatat.</p>
                            <br />
                            <H4>Form</H4>
                            <InputTextMovingPlaceholder label="Name" placeholder="ex: John Smith"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <div className="flex">
                                <BtnMainFilled>Submit</BtnMainFilled>
                                <BtnAltStroked>Other</BtnAltStroked>
                            </div>

                        </CardImageLeft>

                        <CardImageLeft size="md" image="victor-qm9pHqVt7KA-unsplash_resultat.jpg">
                            <H2>Card exemple</H2>
                            <Hr/>
                            <H4>Paragraph</H4>
                            <p className="text-gray-700">Sunt cupidatat non nostrud non ex et consequat anim non enim proident ut tempor. Non anim eiusmod ea proident esse tempor ullamco fugiat dolore quis. Ullamco officia fugiat ut et proident commodo aute quis velit cupidatat reprehenderit commodo cupidatat.</p>
                            <br />
                            <H4>Form</H4>
                            <InputTextMovingPlaceholder label="Name" placeholder="ex: John Smith"/>
                            <InputTextMovingPlaceholder label="Email" placeholder="ex: john@smith.com"/>
                            <div className="flex">
                                <BtnMainFilled>Submit</BtnMainFilled>
                                <BtnAltStroked>Other</BtnAltStroked>
                            </div>

                        </CardImageLeft>

                    </Slider>

                </section>
                

            </ContentRight>
        </Template>
         
            


        
        
      </section>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
