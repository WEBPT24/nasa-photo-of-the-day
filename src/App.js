import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/api';
import ImageContainer from './Components/ImageContainer';






function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=Wpqdrp75WwDUcXLBvxgubMw758fAJD9iYPIIsUEm')
    .then(res => {setData(res.data);
    console.log(res.data);})

    .catch(err => console.log('Oops, something went wrong!', err));
  },[]);



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <ImageContainer data={data} />
    </div>
  );
}

export default App;
