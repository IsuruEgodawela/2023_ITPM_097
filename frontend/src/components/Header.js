import React , {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
        
         <nav>
            <div class="logo">
              <img src='.src/imgs/logo.png'></img>
            </div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn">
              <i class="fas fa-bars"></i>
            </label>
            <ul>
              <li><a class="active" href="/">Home</a></li>
              <li><a href="/add">NEW SPECIES</a></li>
              <li><a href="/view"> VIEW </a></li>
              <li><a href="">CONTACT US</a></li>

            </ul>
          </nav>
       
            
      )
        
    
    }
}

