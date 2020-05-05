import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import Pdf from './pdf'
import './App.scss';



class App extends React.Component {


  render(){
    return(
      <IonApp className='rootApp'>
        <Pdf/>
  
    </IonApp>
      
    )
  }
}

export default App;
