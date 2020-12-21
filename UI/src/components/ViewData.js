import React, {Component} from 'react'
import API from '../axios/Api'

import DataTable from './DataTable'

export class ViewData extends Component{
    
    state = {
        edata:[]
    }

    componentDidMount = async () => {
        await API.get("/viewdata.php")
        .then(response => this.setState({
            edata:response.data
        }))
    }
    
    render(){

        const renderData = this.state.edata.map(edata=>{
            return (
                <DataTable edata={edata} key={edata.id} refresh={this.componentDidMount} />
            )
        })
        return(
            <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                    {renderData}
                </tbody>
            </table>                                
            </div>
        )
    }
}

export default ViewData