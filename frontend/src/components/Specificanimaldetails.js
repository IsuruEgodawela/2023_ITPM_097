import React , {Component} from 'react';
import axios from 'axios';



export default class Specificanimaldetails extends Component{
   
    constructor(props){
        super(props);
    
        this.state={
          Animals:[]
        };
    
      }
    
      componentDidMount(){
          const id =this.props.match.params.id;

          axios.get(`http://localhost:8070//animal/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    Animals:res.data.Animals
                });

                console.log(this.state.Animals);
            }
        });

      }
      
      render(){
        return(
            <div>
                Animals Details
            </div>
        )
      }
      
    }