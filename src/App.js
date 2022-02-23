import './App.css';
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBallance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader type='h1' title="Budget"/>
      <DisplayBallance title="Your Balance" value="2,550.53" size="small"/>

      
      <DisplayBalances />
      <MainHeader type="h3" title="History" />

      <EntryLine description="Something" value="$10.00" />
      <EntryLine description="Something else" value="$100.00" isExpense/>

      <MainHeader type='h3' title="Add new transaction" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
