import React, {Component} from 'react';
import DeleteCategory from '../components/deletecategory/DeleteCategory';
import Layout from './Layout';
import axios from 'axios';
export default class extends Component{
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
        return (<div>
             <Layout></Layout> 
             <div className="container">  
            <DeleteCategory item= {this.state.databases}></DeleteCategory>
            </div>
        </div>
        );
    }
}