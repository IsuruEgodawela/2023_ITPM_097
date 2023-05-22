import React , {Component} from 'react';
import axios from 'axios';


export default class Home extends Component {
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
    axios.get("http://localhost:8070/animal").then(res => {
      if(res.data.success){
        this.setState({
          Animals:res.data.existingAnimal
        });

        console.log(this.state.Animals)
      }
    });

  }

   onDelete= (id)=>{
    axios.delete(`http://localhost:8070/staf/animal/${id}`).then((res) =>{
       alert("Delete Successfully");
       this.retrieveAnimals();
    })
  }
   
  filterData(Animals,searchKey){
    const result = Animals.filter((post)=>
    
       post.Name.toLowerCase().includes(searchKey)||
       post.Address.toLowerCase().includes(searchKey)||
       post.Gender.toLowerCase().includes(searchKey)||
       post.Position.toLowerCase().includes(searchKey)
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


<body>
    <div class="content">
    <div class="overlay"></div>

    <h2>Animal Care</h2>
   <br>
   </br>
   
    <a href="/add"><button>Add New Animals Details</button></a> &nbsp;
    <a href="/view"><button>VIEW</button></a> &nbsp;

    <br></br>

    <img
         src="https://thumbs.dreamstime.com/b/young-veterinarian-woman-stethoscope-holding-examining-goat-ranch-background-young-goat-vet-hands-check-up-187894813.jpg"
        class="img-fluid"
        alt="Phone image"
                    />

  </div>
   

   </body>

    );
  }

}












