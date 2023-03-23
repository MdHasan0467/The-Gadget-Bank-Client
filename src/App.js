import { Toaster } from 'react-hot-toast';
import './App.css';
import Route from './components/Codes/Routes/Route/Route';

function App() {
  return (
    <div className="App">
      <Route />
      <Toaster />
    </div>
  );
}

export default App;
