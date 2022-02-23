import './App.css';
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBallance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  let [isExpense, setIsExpense] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState()
  let [incomeTotal, setIncomeTotal] = useState(0);
  let [expenseTotal, setExpenseTotal] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      }
      return totalIncomes += Number(entry.value)
    })
    setTotal(totalIncomes - totalExpenses)
    setIncomeTotal(totalIncomes)
    setExpenseTotal(totalExpenses)
    console.log(`total incomes is: ${totalIncomes} and total expenses are ${totalExpenses}`)
  }, [entries])

  // const deleteEntry = () => {}
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id)
    console.log('entries:', entries)
    console.log('result:', result)
    setEntries(result)
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`)
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
      setEntryId(id)
    }
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    })
    console.log('result: ', result)
    console.log('entries: ', entries)
    setEntries(result)
    resetEntry()
  }

  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader type='h1' title="Budget"/>
      <DisplayBallance title="Your Balance" value={total} size="small"/>

      
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} setEntryId={setEntryId}/>

      <MainHeader type='h3' title="Add new transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}  
        value={value} 
        isExpense={isExpense} 
        setDescription={setDescription} 
        setValue={setValue} 
        setIsExpense={setIsExpense}
      />

      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        description={description}  
        value={value} 
        isExpense={isExpense} 
        setDescription={setDescription} 
        setValue={setValue} 
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50.00,
    isExpense: true
  },
]
