import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="me-auto">Navbar</Navbar.Brand>
                <Nav>
                    <Link to="registros">Registros</Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header
