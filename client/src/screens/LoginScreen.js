import React, { useState, useEffect } from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios'

const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { Group, Label, Control } = Form

    const submit = () => {
        axios.post("http://localhost:2000/api/login", { email, password })
            .then(() => {
                alert("Success")
            })
    }
    return (
        <Form>
            <Row className="mb-3">
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
                <Group as={Col} controlId="formGridPassword">
                    <Label>Senha</Label>
                    <Control type="password"
                        placeholder="Coloque seu número"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </Group>
            </Row>

            <Button onClick={submit} variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default LoginScreen
