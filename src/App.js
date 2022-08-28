import Layout from "./Layout";
import './app.css'
const body=document.querySelector('body')


function App() {
  return (
    <>
  <div>
<Layout body={body}></Layout>
  </div>
  <div className="cards-holder">


  </div>
</>
  );
}

export default App;
