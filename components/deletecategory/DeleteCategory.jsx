import React, {Component} from 'react';
import axios from 'axios';
class DeleteCategory extends Component {

    constructor(props){
        super(props);
        
    }

    static async getInitialProps({query}){
        return {query}
    } 

    handleDelete(id){
        if(confirm("Deseas eliminar este campo?")){
            axios({method:'post',
            url:'/deleteItemx/deleteI',
             data:{
                id:id
             }
            }
        ).then(function(dta){
                alert('Categoria eliminada de la BD');
        })
        }else{
            return;
        }

    }

    render(props){
        return(

         <div className="row">
            <div className=" d-flex justify-content-center col-12">
                <div className="card">
                    <div className="card-header">
                        Lista de Categorias
                    </div>
                    <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr> 
                                <th>Nombre Categoria </th>
                            
                                
                            </tr>
                        </thead>
                        <tbody>
                        { this.props.item.map(e=>{
                            return <tr key={e.idprodc}  id={e.idprodc} onClick={this.handleDelete.bind(this, e.idprodc)} >
                                <td>{e.nombre}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>)}
}

export default DeleteCategory;
