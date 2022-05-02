import Players from "./Players"
import {useState, useEffect} from "react";

const url = "https://www.balldontlie.io/api/v1/players";

function App() {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
 try {
   const response = await fetch(`${url}/?page=${Math.floor(Math.random()*100)}`);
   const playersRaw = await response.json();
   const players = playersRaw.data;
   console.log(players)
   setPlayers(players);
 } catch (error) {
console.log(error);
 }
  }

 useEffect(() => {
    fetchPlayers();  
  },[])

  const refresh = async () => {
      try {
        const response = await fetch(`${url}/?page=${Math.floor(Math.random()*100)}`);
        const playersRaw = await response.json();
        const players = playersRaw.data;
        setPlayers(players);
      } catch (error) {
        console.log(error);
      }
    }
  
  return (
    <div className="App">
     <main>
       <header className="header">
        <h1>NBA players</h1> 
        <button onClick={refresh}>Other 25 random players</button>
        </header>
        <Players players={players}/>
     </main>
    </div>
  );
}

export default App;
