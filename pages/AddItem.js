import React , {Component} from 'react';
import Link  from 'next/link';
import axios from 'axios';
import AddCategory from '../components/addcategory/AddCategory';
import Layout from './Layout';
export default class extends Component{
    constructor(){
        super();
       
    }
    render(){
        return(
        <div className="addItemContent">
             <Layout></Layout>
             
             <div className="container">
                <AddCategory></AddCategory>
             </div>
        </div>)
    }
}
