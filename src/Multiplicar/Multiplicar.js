import React from 'react';

class Multiplicar extends React.Component{
  render(){
    let resultado = null;
    let botones = null;
    if (this.props.pulsado!=1) {
      resultado = (
        <div>
          <h4>{this.props.numero} x {this.props.pulsado} =</h4>
          <h1>{this.props.result}</h1>
        </div>
      )
      if (this.props.pulsado==37){
        botones = (
          <div>
            <button onClick={() => this.props.tecla1(37)} disabled>37</button>
            <button onClick={() => this.props.tecla1(43)}>43</button>
          </div>
        )
      } else if (this.props.pulsado==43){
        botones = (
          <div>
            <button onClick={() => this.props.tecla1(37)}>37</button>
            <button onClick={() => this.props.tecla1(43)}disabled>43</button>
          </div>
        )
      }
    } else {
      resultado = (
        <h3> Pulsa una tecla</h3>
      )
      botones = (
        <div>
          <button onClick={() => this.props.tecla1(37)}>37</button>
          <button onClick={() => this.props.tecla1(43)}>43</button>
        </div>
      )
    }


    return(
      <div>
          <p>Introduce un número:</p>
          <input type="number" onChange={this.props.cambiando}></input>
          {botones}
          {resultado}
      </div>


    )

  }
}

export default Multiplicar;
