import React, { useState, useEffect } from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'

const SingleRegisterScreen = () => {
    const { Group, Label, Control } = Form
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")


    const submit = () => {
        axios.post("http://localhost:2000/api/registrar", { name, email, cpf, phone })
            .then(() => {
                alert("Success")
            })
    }

    return (
        <Form>
            <Row className="mb-3">
                <Group as={Col} controlId="formGridName">
                    <Label>Nome</Label>
                    <Control type="text" placeholder="Coloque seu nome" required
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </Group>

                <Group as={Col} controlId="formGridEmail">
                    <Label>Email</Label>
                    <Control type="email"
                        placeholder="Coloque seu email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </Group>
            </Row>

            <Row className="mb-3">
                <Group as={Col} controlId="formGridCPF">
                    <Label>CPF</Label>
                    <Control type="text"
                        placeholder="Coloque seu CPF"
                        required
                        onChange={(e) => { setCpf(e.target.value) }} />
                </Group>

                <Group as={Col} controlId="formGridPhone">
                    <Label>Telefone</Label>
                    <Control type="number"
                        placeholder="Coloque seu número"
                        onChange={(e) => { setPhone(e.target.value) }} />
                </Group>
            </Row>

            <Button onClick={submit} variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default SingleRegisterScreen
