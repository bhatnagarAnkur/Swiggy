import React from 'react'
import ReactDOM from 'react-dom/client'
import {HaderComponent} from './HeaderComponent'
import {FooterComponent} from './FooterComponent'


var root=ReactDOM.createRoot(document.getElementById("divRoot"));

var AppComponent=()=>
(
<div> 
  <HaderComponent/> 
  
  <FooterComponent/>
  
  </div>

)


root.render(<AppComponent/>);