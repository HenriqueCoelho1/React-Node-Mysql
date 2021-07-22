import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const RegistersScreen = () => {

    const [registers, setRegisters] = useState([])

    useEffect(() => {
        axios.get("http://localhost:2000/api/registros").then((response) => {
            setRegisters(response.data)
        })
    }, [])


    const renderData = (registers) => {
        return (
            <tr key={registers.id}>
                <td>{registers.id}</td>
                <td>{registers.name}</td>
                <td>{registers.email}</td>
                <td>{registers.cpf}</td>
                <td>{registers.phone}</td>
                <td>{registers.isValidated}</td>
            </tr>
        )
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Phone</th>
                        <th>Is Validate?</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {registers.map(renderData)}
                </tbody>
            </Table>

        </div>
    )
}

export default RegistersScreen
