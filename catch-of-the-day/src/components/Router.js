import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'


const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* This is saying when the path is / use the component StorePicker*/}
      <Route exact path="/" component={StorePicker} />
      {/* This is saying when the path is /store/xxx use the component App! This storeId is passed into params*/}
      <Route path="/store/:storeId" component={App}></Route>
      {/* This is saying for any path not specified use the component App*/}
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router
