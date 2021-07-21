import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import RegistersScreen from './screens/RegistersScreen'
import SingleRegisterScreen from './screens/SingleRegisterScreen'
import ValidateScreen from './screens/ValidateScreen'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/registros" component={RegistersScreen} />
        <Route path="/registrar" component={SingleRegisterScreen} />
        <Route path="/validar" component={ValidateScreen} />
      </Switch>
    </>
  )
}

export default App
