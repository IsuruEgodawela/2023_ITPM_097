import React , {Component} from 'react';
import axios from 'axios';


export default class Updateanimal extends Component{

    constructor(props){
        super(props);

        this.state={
                    AnimalSpecies:"",
                    Breed:"",
                    Age:"",
                    Weight:""
           
        }
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {AnimalSpecies,Breed,Age,Weight} = this.state;  
        
        const data = {
            AnimalSpecies:AnimalSpecies,
            Breed:Breed,
            Age:Age,
            Weight:Weight
        }

        console.log(data)
        
        axios.put(`http://localhost:8070/animal/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Animal Details Updated")
                this.setState(

                   {
                    AnimalSpecies:"",
                    Breed:"",
                    Age:"",
                    Weight:""
                   }

                )
            }
        })
    
    } 

    componentDidMount(){
        
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/animal/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    AnimalSpecies:res.data.Animals.AnimalSpecies,
                    Breed:res.data.Animals.Breed,
                    Age:res.data.Animals.Age,
                    Weight:res.data.Animals.Weight
                         
                });

                console.log(this.state.Animals);
            
            }
        });
     }


    render(){
        return(

    <div className='row'>
    <div className='col-lg-9 mt-2 mb-2'>

      <h1 className='container'></h1>
       <h1 className='container'>Update Animal Details</h1>
       
       <form>

<div className='container'>
      <label for="exampleInputId"> Animal Species</label>
      <input type="text" class="form-control" name='AnimalSpecies' placeholder="" value={this.state.AnimalSpecies} onChange={this.handleInputChange}/>
     
</div> &nbsp;

<div className='container'>
     <label for="exampleInputName">Student Name</label>
     <input type="text" class="form-control" name='StudentName' placeholder="type Full Name" value={this.state.StudentName} onChange={this.handleInputChange}/>
</div>

&nbsp;

<div className='container'>
     <label for="exampleInputAddress">Address</label>
     <input type="text" class="form-control" name='Address'  placeholder="address type" value={this.state.Address} onChange={this.handleInputChange}/>
</div>

&nbsp;

<div className='container'>
     <label for="exampleInputContact">Contact Number</label>
     <input type="text" class="form-control" name='Contact' placeholder="contact nu" value={this.state.Contact} onChange={this.handleInputChange}/>
</div>

&nbsp;

</form>

&nbsp;
           <button type="submit" class="btn btn-dark" style={{marginTop:'15px'}} onClick={this.onSubmit} > Update </button>



    </div>

</div>
       

        )
    }

}