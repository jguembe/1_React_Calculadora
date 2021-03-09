import React from 'react';
import './App.css';
import Header from './Header/Header';
import Multiplicar from './Multiplicar/Multiplicar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      tecla: 1,
      resultado: 0,
    }
  }

  recalcular = (event, id) =>{
    let teclaaux = this.state.tecla;
    this.setState({
      number: event.target.value,
      tecla: teclaaux,
      resultado: teclaaux*event.target.value,
    });
  }

  tecla = (multiplicador) => {
    let teclaaux = this.state.tecla;
    let numberaux = this.state.number;
    this.setState({
      number: numberaux,
      tecla: multiplicador,
      resultado: multiplicador*numberaux,
    });
  }

  render() {

    return (
      <div className="App">
        <Header titulo="MULTIPLICATOR 3000" />
        <Multiplicar cambiando={this.recalcular}
          result={this.state.resultado}
          tecla1={this.tecla}
          pulsado={this.state.tecla}
          numero={this.state.number}
           />
      </div>
    )
  }

}

export default App;
