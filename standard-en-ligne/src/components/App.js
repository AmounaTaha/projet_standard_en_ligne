import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import Footer from './Footer';
import Style from '../css/App.css';
import CenterBloc from './CenterBloc';

class App extends React.Component{
    render(){
      return (
        <>
          <section id="sections">
            <NavBar/>
            <TopBar/>
            <CenterBloc/>
            <Footer/>
          </section>
        </>
        
      )
    }
  }

  export default App;