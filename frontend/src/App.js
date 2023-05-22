import React , {Component} from 'react';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import Addanimals from './components/Addanimals';
import Editanimals from './components/Editanimals';
import Home from './components/Home';
import AnimalsDetails from './components/AnimalsDetails';
import Header from './components/Header';
import Specificanimaldetails from './components/Specificanimaldetails';

import './App.css';





export default class App extends Component{
    render(){

        const isBackgroundRed = true;

        return(
    

            <BrowserRouter>
            <div className="App">  
            <div className={isBackgroundRed ? 'background-red' : 'background-blue'} />
 
                      <Header></Header>
                
                    <Routes>

                     <Route path ="/"  exact element = {<Home/>}></Route>
                     <Route path ="/add"  exact element = {<Addanimals/>}></Route>
                     <Route path ="/view"  exact element = {<AnimalsDetails/>}></Route>
                     <Route path ="/edit"  exact element = {<Editanimals/>}></Route>
                     <Route path ="/animal/:id"  exact element = {<Specificanimaldetails/>}></Route>

                    </Routes>


        
                </div>
            </BrowserRouter>

            
        )

    }
}