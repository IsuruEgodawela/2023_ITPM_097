import React , {Component} from 'react';
import axios from 'axios';

export default class Addanimals extends Component{
    constructor(props){
        super(props);

        this.state={
            AnimalSpecies:"",
            Breed:"",
            Gender:"",
            Weight:"",
            Injected:""
           
        }
    }

    handleInputChange = (event)=>{
        const {name,value}= event.currentTarget;
        this.setState({
            ...this.state,
            [name]:value

        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const {AnimalSpecies,Breed,Age,Weight,Injected} = this.state;  
        
        const data = {
            AnimalSpecies:AnimalSpecies,
            Breed:Breed,
            Age:Age,
            Weight:Weight,
            Injected:Injected
        }

        console.log(data)
        
        axios.post('http://localhost:8070/animal/save',data).then((res)=>{
            if(res.data.success){
                this.setState(

                   {
                    AnimalSpecies:"",
                    Breed:"",
                    Age:"",
                    Weight:"",
                    Injected:""
                   }

                )
            }
        })

    
    } 

    render(){
        return(


            
         <div className='Add-container'>
   

         <h1 className='header-name'>Add New Animal</h1>
      

         <form>

<div className='input-container'>
      <label for="exampleInputName"> Animal Species :-</label>
      <input type="text" class="form-control" name='AnimalSpecies' placeholder="" value={this.state.AnimalSpecies} onChange={this.handleInputChange}/>
     
</div> &nbsp;

<div className='input-container'>
     <label for="exampleInputAddress">Breed :-</label>
     <input type="text" class="form-control" name='Breed' placeholder="" value={this.state.Breed} onChange={this.handleInputChange}/>
</div>&nbsp;

<div className='input-container'>
     <label for="exampleInputGender">Age :-</label>
     <input type="text" class="form-control" name='Age'  placeholder="" value={this.state.Age} onChange={this.handleInputChange}/>
</div> &nbsp;

<div className='input-container'>
     <label for="exampleInputPosition">Weight:-</label>
     <input type="text" class="form-control" name='Weight' placeholder="" value={this.state.Weight} onChange={this.handleInputChange}/>
</div>&nbsp;

<div className='input-container'>
     <label for="exampleInputPosition">Injected(Yes/No) :- </label>
     <input type="text" class="form-control" name='Injected' placeholder="" value={this.state.Injected} onChange={this.handleInputChange}/>
</div>&nbsp;


</form>

&nbsp;
           <button type="submit" class="btn-save" style={{marginTop:'15px'}} onClick={this.onSubmit} > SAVE </button>
          

    </div>

    



        )

    }
}