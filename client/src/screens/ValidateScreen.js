import React, { useEffect, useState } from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'

const ValidateScreen = () => {
    const { Group, Label, Control } = Form



    useEffect(() => {
        axios.get("http://localhost:2000/api/validar").then((response) => {
            setRegisters(response.data)
            console.log(response.data)
        })
    }, [])

    const [registers, setRegisters] = useState({})

    // const [name, setName] = useState(registers.name)
    // const [email, setEmail] = useState(registers.email)
    // const [cpf, setCpf] = useState(registers.cpf)
    // const [phone, setPhone] = useState(registers.phone)

    console.log(registers.name)

    return (
        <Form>
            <Row className="mb-3">
                <Group as={Col} controlId="formGridName">
                    <Label>Nome</Label>
                    <Control
                        type="text"
                        placeholder="Coloque seu nome"
                        required
                        value={registers.name}
                    />
                </Group>

                <Group as={Col} controlId="formGridEmail">
                    <Label>Email</Label>
                    <Control type="email"
                        placeholder="Coloque seu email"
                        required
                        value={registers.email}
                    />
                </Group>
            </Row>

            <Row className="mb-3">
                <Group as={Col} controlId="formGridCPF">
                    <Label>CPF</Label>
                    <Control type="text"
                        placeholder="Coloque seu CPF"
                        required
                        value={registers.cpf}
                    />
                </Group>

                <Group as={Col} controlId="formGridPhone">
                    <Label>Telefone</Label>
                    <Control type="number"
                        placeholder="Coloque seu número"
                        value={registers.phone}
                    />
                </Group>
            </Row>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default ValidateScreen
