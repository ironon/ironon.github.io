
import English from "./English";
import SecretLanguage from "./SecretLanguage";
import {useState} from 'react'

function App() {
  let [text, setText] = useState("")
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> SECRET LANGUAGE TRANSLATER </h1>
        <h3> By Iron#3098</h3>
        <h4> (the one and only)</h4>
        <div id="translater">
        <English text={[text, setText]}/>
        <SecretLanguage text={[text, setText]}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
