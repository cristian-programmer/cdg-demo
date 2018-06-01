import React, {Component} from 'react';
import Layout from './Layout';
import EditCategory from '../components/editcategory/EditCategory';
import axios from 'axios';
export default class extends Component {
    constructor(){
        super();

        this.state = {
            databases:[]
          };
    
          axios.get('/_data/item')
          .then((data)=>{
            this.setState({databases:data.data})
          }) 
    }
    render(){
        return(
          <div>
            <Layout></Layout>
            <div className="container">  
            <EditCategory item ={this.state.databases} ></EditCategory>
            </div>   
          </div>       
        )
    }
}