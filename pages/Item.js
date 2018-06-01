import {Component} from 'react'
import Link from 'next/link'
import Layout from './Layout';
import axios from 'axios';
import ViewCategory from '../components/viewcategory/ViewCategory';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      databases:[]
    };   

    axios.get('/_data/item')
    .then((data)=>{
      this.setState({databases:data.data})
    })
  
  }

  render () {
    return (
      <div className='item'>
        <Layout></Layout>
        <ViewCategory item={this.state.databases}></ViewCategory>
      </div>
      )
  }
}
