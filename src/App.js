// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontsize: 24,
    padding: '1rem'
  }
  return (
    // <>
    //   <Hello name="react" color="blue"/>
    //   <Hello />
    //   <div style={style}>{name}</div>
    //   <div className='gray-box'></div>
    // </>
    <Wrapper>
      <Hello name="React" color="red"></Hello>
      <Hello color = "pink"></Hello>
    </Wrapper>
  );
}

export default App;
