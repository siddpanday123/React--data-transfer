import './App.css';
import Practice from './Components/Practice';

function App(props) {

  const getData = (state)=>{
    console.log("data from prnt", state)
  }
  return (
    <div className="App">
        <Practice onck={getData}/>
    </div>
  );
}

export default App;
