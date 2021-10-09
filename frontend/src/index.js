/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import "./sadi.css"
import Home from "views/Home/Home";
import TiendView from "views/Tienda/TiendaView";
import FreelancersView from "views/Freelancers/FreelancersView";
import FreelancersPreView from "views/Freelancers/FreelancersPreView";
import "assets/css/material-dashboard-react.css?v=1.10.0";
import LendingView from "views/Lending_Señales/LendingView";
import SeñalesView from "views/Lending_Señales/SeñalesView";
import 'animate.css';
import CursoView from "views/Curso/CursoView";
import Nosotros from "views/Nosotros/Nosotros";
import Login from "views/Login_Registro/LoginNew";
import Register from "views/Login_Registro/RegistroNew";
import {AuthProvider} from "auth/authprovider";
import { HashRouter } from "react-router-dom";
import {FreelancerProvider} from "context/freelancersprovider"
import Servicios from "views/Servicios_Independientes/Servivios";
import { UserView } from "views/Usuarios/UserView";



ReactDOM.render(
  <AuthProvider>
    <FreelancerProvider>
    <HashRouter >
    <Switch>
    <Route path="/inicio" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registro" component={Register} />
    <Route path="/nosotros" component={Nosotros} />
    <Route path="/tienda" component={TiendView} />
    <Route path="/freelancers" component={FreelancersView} />
    <Route path="/lending" component={LendingView} />
    <Route path="/señales" component={SeñalesView} />
    <Route path="/curso" component={CursoView} />
    <Route path="/freelancersview" component={FreelancersPreView} />
    <Route path="/servicios" component={Servicios} />
    <Route path="/user" component={UserView}/>
    <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/inicio"></Redirect>
      
    </Switch>
  </HashRouter>
  </FreelancerProvider>
  </AuthProvider>,
  document.getElementById("root")
);
