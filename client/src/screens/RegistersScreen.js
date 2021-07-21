import React from 'react'
import { Table } from 'react-bootstrap'

const RegistersScreen = () => {
    const data = [
        { name: 'Jeremias', email: 'jeremias@gmail.com', cpf: '0141414114', isValidated: 0 },
        { name: 'Carlos', email: 'carlos@gmail.com', cpf: '1212121212', isValidated: 0 },
        { name: 'Pedro', email: 'pedro@gmail.com', cpf: '3232323232', isValidated: 0 },
        { name: 'Diogenes', email: 'dio@gmail.com', cpf: '87878787878', isValidated: 0 },
    ]


    const renderData = (data, index) => {
        return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.cpf}</td>
                <td>{data.isValidated}</td>
            </tr>
        )
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Is Validate?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderData)}
                </tbody>
            </Table>

        </div>
    )
}

export default RegistersScreen
