import ReactDOM from 'react-dom';
import React from 'react'; 
import IntroductionComponent from './IntroductionComponent';
import HeaderCompnent from './HeaderComponent';
import IntroductionWriteComponent from './IntroWriteComponent';
import CertifcateComponent from './CertificateComponent';

ReactDOM.render((
  <div>
    <HeaderCompnent></HeaderCompnent>
   <IntroductionComponent></IntroductionComponent> 
   <div style={{ backgroundColor:"blue",textAlign:"center"}} ><h2>Introduction</h2><br/></div>
    <IntroductionWriteComponent></IntroductionWriteComponent>
    <div style={{ backgroundColor:"yellow",textAlign:"center"}} ><h2>Certification</h2><br/></div>
    <CertifcateComponent></CertifcateComponent><br/><br/><br/><br/><br/><br/><br/>
    <div style={{ backgroundColor:"green",textAlign:"center"}} ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  </div>
),document.getElementById("root")) 