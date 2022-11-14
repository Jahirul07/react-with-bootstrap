import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GirdCard/GridCard';

function App() {
  return (
    <div className="App">
      <Button className='btn btn-warning'>Submit</Button>
      <Button variant='danger' className='mx-4 my-5'>My button</Button>
      <Spinner animation="grow" variant="warning" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
