import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
            <div className="wrapper">
            <SayFullName name="Эзиз" surname="Курбанназаров" link="vk.com/ezizkurbannazarov"/>
            <SayFullName name="Бакы " surname="Курбанназаров" link="vk.com/ezizkurbannazarov"/>
            <SayFullName name="Нур" surname="Курбанназаров" link="vk.com/ezizkurbannazarov"/>
            </div>
    );
  }
}



function SayFullName (props) {
  return (
      <div>
        <h1>{props.name} Это мое имя , а моя фамилия {props.surname}</h1>
        <a href={props.link}> Cсылка на мой вк </a>
      </div>
    )
}



export default App;
