import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from './components/navbar';
import Header from './components/Header/Header';
import MyCard from './components/MyCard';
import { getMatches } from "./api/Api"
import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {

  const [matches, setMatches] = useState([]); 
  
  useEffect(() => {
    getMatches()
      .then((data) => {
        // console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      {/* <Header/> */}
      <Navbar/>
      {/* <MyCard /> */}
      <Container>
        <Grid container>
          <Grid sm="1"></Grid>
          {/* item xs={12} */}
          <Grid sm="10">
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
