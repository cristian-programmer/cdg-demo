import React, {Component} from 'react';
import axios from 'axios';
class EditCategory extends Component {
    constructor(props){
        super(props);  
        
        this.handleEdit     =  this.handleEdit.bind(this);
        this.handleInput    = this.handleInput.bind(this);
        
        this.state={
            newcategory:''  ,
            id: ''  
        }
    }
    
    
    static async getInitialProps({query}){
        return {query}
    }

    handleInput(e, id){
        if(e.target.value){
            this.setState({newcategory: e.target.value});
        }
    }

    handleGetId(id){
       this.setState({id: id});
    }

    handleEdit(){
       
        axios({method:'post',
        url:'/updateItemx/updateI',
         data:{
            nombre: this.state.newcategory,
            id: this.state.id
         }
        }
    ).then(function(dta){
            alert('Categoria editada de la BD');
    })
    }

    

    render(props){
        return( <div className="row">
          <div className="col">
            <div className=" d-flex justify-content-center col-12">
                <div className="card">
                    <div className="card-header">
                        Lista de Categorias
                    </div>
                    <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr> 
                                <th>Nombre Categoria</th>  
                            </tr>
                        </thead>
                        <tbody>
                        { this.props.item.map(e=>{
                            return <tr data-toggle="modal" data-target="#exampleModal" key={e.idprodc}  id={e.idprodc} onClick={this.handleGetId.bind(this, e.idprodc)} >
                                <td>{e.nombre}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>      
        </div>
 

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal Editar Categoria</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="col-md-12">
                        <label for="inputCategory">Editar Categoria</label>
                        <input type="text" id="inputCategory" className="form-control" placeholder="Ingresa una categoria" onChange={this.handleInput}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleEdit}>Editar Categoria</button>
                </div>
            </div>
        </div>
        </div>
</div>)
    }
}

export default EditCategory;