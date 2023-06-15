// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Counter from './components/Counter';
import axios from 'axios';

function App() {

  const[details , setDetails] = useState({})
  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/")
    console.log(data);
    const details = data.results[0];
    setDetails(details)
    console.log(details);
  }

  // componentdidmount didupdate willunmount
  useEffect(() => {
   
  fetchDetails()
    
  }, [])
  

  return (
    <div className="App">
      <Counter />
      <Cards details={details} />
      <Cards details={details} />
      <Cards details={details} />
      {/* <Cards name="sara" btnurl="https://stock.adobe.com/in/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=rajasthan+travel&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=rajasthan+travel&get_facets=0" btn="GO! Rajasthan" myimg="https://images.unsplash.com/photo-1684703125974-1140431aad4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"/>
      <Cards name="ujjwal" btnurl="https://stock.adobe.com/in/search?k=japan%20travel" btn="GO! Japan" myimg="https://images.unsplash.com/photo-1684695414465-e300452cba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/> */}
    </div>
  );
}

export default App;
