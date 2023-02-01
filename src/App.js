import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CustomRoutes from './CustomRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  const[data,setData]=useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
          .then(response => {
            console.log(response);
            setData(response.data.products);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);


  return (
    <div className="App">
      <Navbar />
      <CustomRoutes data={data} />
    </div>
  );
}

export default App;
