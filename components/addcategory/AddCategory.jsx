import React, {Component} from 'react';
import axios from 'axios';

class AddCategory extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSendData = this.handleSendData.bind(this);
    }

    handleInput(e){ 
        if(e.target.value){
            this.setState({category:e.target.value});
        }
    }

    handleSendData(e){
        e.preventDefault();
        alert('send');
        if(this.state.category !==''){
            let category = this.state.category;
            axios({method:'post',
            url:'/addItemx/addI',
             data:{
                category: this.state.category
             }
            }
        ).then(function(dta){
                alert('Categoria agregada a la bd');
        })
        }else{
            alert('no hay datos');
        }
    }

    render(){
        return (
            <div className="row">
                    <div className="col-md-12">
                        <label for="inputCategory">Agregar Categoria</label>
                        <input type="text" id="inputCategory" className="form-control" placeholder="Ingresa una categoria" onChange={this.handleInput}/>
                    </div>
                    <div className="col-md-12 mt-4">
                    <button className="btn btn-primary" onClick={this.handleSendData}>Agregar Categoria</button>
                    </div>
                    
            </div>
        )
    }
}

export default AddCategory;
