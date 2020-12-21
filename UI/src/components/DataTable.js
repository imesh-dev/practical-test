import React from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/Api'
import { async } from 'q'

function DataTable({ edata, refresh }) {

    async function deleteData(){
        await API.delete('deletedata.php?id='+ edata.id)

        return refresh()
    }

    function deleteConf(){
        deleteData()
    }
    return (
        <tr>
            <td>{edata.id}</td>
            <td>{edata.name}</td>
            <td>{edata.username}</td>
            <td>{edata.email}</td>
        </tr>
    )
}

export default DataTable