import React , {Component} from 'react';
import axios from 'axios';



export default class AnimalsDetails extends Component{
   
    constructor(props){
        super(props);
    
        this.state={
          Animals:[]
        };
    
      }
    
      componentDidMount(){
        this.retrieveAnimals();
      }
    
      retrieveAnimals(){
        axios.get('http://localhost:8070/animal').then(res => {
          if(res.data.success){
            this.setState({
              Animals:res.data.existingAnimals
            });
    
            console.log(this.state.Animals)
          }
        });
    
      }
    
       onDelete= (id)=>{
        axios.delete(`http://localhost:8070/animal/delete/${id}`).then((res) =>{
           alert("Delete Successfully");
           this.retrieveAnimals();
        })
      }
       
      filterData(Animals,searchKey){
        const result = Animals.filter((post)=>
        
           post.AnimalSpecies.toLowerCase().includes(searchKey)||
           post.Breed.toLowerCase().includes(searchKey)||
           post.Age.toLowerCase().includes(searchKey)||
           post.Weight.toLowerCase().includes(searchKey)
        )
    
        this.setState({Animals:result})
      }
    
      handleSearchArea = (e) =>{
        const searchKey =e.currentTarget.value;
    
        axios.get('http://localhost:8070/animal').then(res => {
          if(res.data.success){
             this.filterData(res.data.existingAnimals,searchKey) 
          }
        });
    
      }
      render(){
        return (
   
        
    <div className='container'>
      
            <div className='row'>
              <div className='col-lg-9 mt-2 mb-2'>
    
                <h1 className='header-name' style={{textAlign:'center' , color:'white' , fontSize:'5'}} >Animal Care</h1>
                 <h1 className='h-name'>All Animals  List</h1>
              </div>
    
              <div className='searchbar'>
                  < input  className='form-control' type='search' placeholder='Search Here' name='searchQuery' 
                  onChange={this.handleSearchArea}>
                  </input>
              </div>
            </div>
            
              <table className = "table">
                <thead>
                  <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>AnimalSpecies</th>
                  <th scope='col'>Breed</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Weight</th>
                  <th scope='col'>Injected</th>
                  <th scope='col'>Action</th>      
                  </tr>  
                </thead>  
              <tbody>
                {this.state.Animals.map((Animals,index)=>(
                    <tr >
                        <th scope='row'>{index + 1 }</th>
    
                            
                            <td >{Animals.AnimalSpecies}</td>
                            <td >{Animals.Breed}</td>
                            <td>{Animals.Age}</td>
                            <td>{Animals.Weight}</td>
                            <td>{Animals.Injected}</td>

                            
                           
                            <td>
                            <a className='btn btn-warning' href={`/animal/:id/${Animals._id}`}>
                              <i className='fa fa-eye'></i>&nbsp;View
                            </a>
                                  &nbsp;
                            <a className='btn btn-info' href={`/edit/${Animals._id}`}>
                              <i className='fas fa-edit'></i>&nbsp;Update
                            </a>
                              
                               &nbsp;
                            <a className='btn btn-danger' href='#' onClick={() =>this.onDelete(Animals._id)}>
                              <i className='fa fa-trash'></i>&nbsp;Delete
                            </a>
                          
                           
    
    
    
                            <i className=""></i>
                        </td>
                         
                    </tr>
                ))}
              </tbody>
    
              </table>
    
    
          </div>
      
        );
      }
          
}
