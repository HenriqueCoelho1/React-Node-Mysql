import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </Switch>
    </>
  )
}

export default App
