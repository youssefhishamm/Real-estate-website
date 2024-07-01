import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Register from "../Register/Register"
import Login from "../Login/Login"
import ResetPassword from "../ResetPassword/ResetPassword"
import ManageSchools from "../ManageSchools/ManageSchools"
import Detailspage from "../DetailsPage/DetailsPage"
import ContactAdmin from "../ContactAdmin/ContactAdmin"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Route exact path="/ManageSchools" component={ManageSchools} />
          <Route path="/DetailsPage/:ID" component={Detailspage} />
          <Route path="/ContactAdmin" component={ContactAdmin} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
