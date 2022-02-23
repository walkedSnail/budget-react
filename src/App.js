import './App.css';
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBallance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries)

  // const deleteEntry = () => {}
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id)
    console.log('entries:', entries)
    console.log('result:', result)
    setEntries(result)
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    })
    console.log('result: ', result)
    console.log('entries: ', entries)
    setEntries(result)
  }

  return (
    <Container>
      <MainHeader type='h1' title="Budget"/>
      <DisplayBallance title="Your Balance" value="2,550.53" size="small"/>

      
      <DisplayBalances />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader type='h3' title="Add new transaction" />
      <NewEntryForm addEntry={addEntry}/>

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$1000.00',
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20.00',
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300.00',
    isExpense: true
  },
  {
    id: 4,
    description: 'Power bill',
    value: '$50.00',
    isExpense: true
  },
]
