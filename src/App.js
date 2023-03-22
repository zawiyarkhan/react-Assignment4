import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import HelloCard from './components/card';
import ButtonC from './components/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="mt-5">
      <HelloCard />
      <br />
      <ButtonC />
    </Container>
  );
}

export default App;
