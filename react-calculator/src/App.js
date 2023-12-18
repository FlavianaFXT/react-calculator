import React, { useState } from 'react'
import { Container, Content, Row } from './styles'
import Button from './components/Button'
import Input from './components/Input'

const[currentNumber, setCurrentNumber] = useState('0');
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState(' ');

const handleOnClear = () => {
  setCurrentNumber('0');
  setFirstNumber('0');
  setOperation('');
}
const handleAddNumber = (num) => {
  setCurrentNumber(prev => `${{prev === '0' ? '' : prev}&{num}}`)
}

const handleSumNumbers = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+');
  }else{
    setCurrentNumber(String(sum));
    setFirstNumber('0');
    setOperation('');
  }
}

const handleEquals = () => {
  if(firstNumber != '0' && operation != '0' && currentNumber != '0'){
    switch(operation){
      case '+':
        handleSumNumbers();
        break;
        default:break;
    }
  }
}

const [firstNumber, setFirstNumber] = useState('0')

const App = () => {
  return (
    <Container>
      <Content>
          <h1>Hello!!!</h1>
          
          <Input value={currentNumber}/>
          
          <Row>
            <Button label='X' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='/' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='C' onClick={handleOnClear}/>
            <Button label='0' onClick={()=>{setCurrentNumber('0')}}/>
          </Row>
          <Row>
            <Button label='7' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='8' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='9' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='-' onClick={()=>{setCurrentNumber('0')}}/>
          </Row>
          <Row>
            <Button label='4' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='5' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='6' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='+' onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label='1' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='2' onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='3'  onClick={()=>{setCurrentNumber('0')}}/>
            <Button label='='  onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  )
}

export default App