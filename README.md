# Schoolbag-component-library BETA
A set of React.js components using Tailwind.css that make prototyping small apps even faster.

## Install

Run ``git clone https://github.com/robin4a4/Schoolbag-component-library.git`` in your folder.
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

Some features, such as animations, are not supported by Tailwind yet, so you can write your own classes in the *src/styles/index.css* stylecheet. If you do so, **you will have to restart your server**  to see the modifications.

You can also add some specifications to the tailwind library in the extend property of the array in *tailwind.config.js*. 

### Components
Here is the list of the components, more will be added soon.

#### Headers
- Header
- HeaderTitleFull

#### Navs
- Nav
- ItemNav

#### Templates
- Template
- AsideLeft
- ContentRight
- AsideRight
- ContentLeft

#### Cards
- Card
- CardImageLeft
- CardImageRight
- CardImageFull
- CardImageTop

#### Slider
- Slider

#### Separator
- Hr
#### Buttons
- BtnMainFilled
- BtnMainStroked
- BtnMainPillFilled
- BtnMainPillStroked
- BtnAltFilled
- BtnAltStroked
- BtnAltPillFilled
- BtnAltPillStroked

#### Titles
- H1
- H2
- H3
- H4
- H5
- H6

#### Inputs
- InputText
- InputTextMovingLabel
- InputTextMovingPlaceholder

#### Doc
- Markdown
- Doc


