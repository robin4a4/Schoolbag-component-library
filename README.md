# Schoolbag-component-library BETA
A set of React.js components using Tailwind.css that makes prototyping small apps even faster.

## Install

Run ``git clone https://github.com/robin4a4/Schoolbag-component-library.git`` in your folder.

If you don't have nodejs, install it on your machine.

Then you can run 

``npm start``

It will open a browser window on url *localhost:3000*.

## Usage
### Structure
For those unfamiliar with React, you have to write your code in *src/index.js*. There is a function that will render your javascript in a index.html file that you can find in */public*.

The components are written in the Components.js file in the *src/* folder.

### Style
You can modify the style of each component in Components.js thanks to the utility-first css framework Tailwind.css. 

It helps you to make reponsive way faster, eliminates the need to find fancy class names such as content-item-title-wrapper and since we generate components once they are created, we don't have to worry about repetability. Finally, since there is a finite numbers of options, it saves us from settings arbitrary withs and colors and helps us keep things cohesive.

Some features, such as animations, are not supported by Tailwind yet, so you can write your own classes in the *src/styles/index.css* stylesheet. If you do so, **you will have to restart your server**  to see the modifications.

You can also add some specifications to the tailwind library in the extend property of the array in *tailwind.config.js*. 

### Actions

#### Hide/show
You can interact with some components with Actions. There are two parts : the actionner and the content. In order to create an Action, you have to set a visibility state for your content, true for visible and false for hidden.

Ex with a nav: 
```
yournav: {'page1' : true, 'page2' : false}
```

Then you have to set an attribut ***visible*** to each of the items of your content.

Ex with a nav:
```
visible={this.state.yournav['page1']}
```

Finally you have to set an attribut ***actionOnClick*** to each of the items of your content. The function take 2 arguments:
- your actionner name
- the item of the content you want to show on click

Ex with a nav:
```
actionOnClick={()=>this.changeContent('yournav', 'page2')}
```



### Components
Here is the list of the components, more will be added soon.


#### List of components
##### Headers
- Header
- HeaderTitleFull

##### Navs
- Nav
- ItemNav
- SubNav
- ItemSubNav

##### Templates
- Template
- AsideLeft
- ContentRight
- AsideRight
- ContentLeft

##### Cards
- Card
- CardImageLeft
- CardImageRight
- CardImageFull
- CardImageTop

##### Popups
- Popup

##### Slider
- Slider

##### Separator
- Hr
##### Buttons
- BtnMainFilled
- BtnMainStroked
- BtnMainPillFilled
- BtnMainPillStroked
- BtnAltFilled
- BtnAltStroked
- BtnAltPillFilled
- BtnAltPillStroked
- BtnSucess
- BtnError

##### Titles
- H1
- H2
- H3
- H4
- H5
- H6

##### Inputs
- InputText
- InputTextMovingLabel
- InputTextMovingPlaceholder

##### Doc
- Markdown
- Doc
- InlineCode

##### Alerts
- Error
- Success
- Info
- Alert

