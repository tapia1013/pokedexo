import React from 'react';
import Pokegame from './Pokegame';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Pokegame />
    </div>
  );
}

export default App;






































// import React from 'react';
// import Pokecard from './Pokecard';

// import './App.css';

// function App() {
//   const pokes = [
//     { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
//     { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
//     { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
//     { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
//     { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
//     { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
//     { id: 4, name: 'Gengar', type: 'poison', base_experience: 225 },
//     { id: 4, name: 'Eevee', type: 'normal', base_experience: 65 }
//   ];
//   return (
//     <div className="App">
//       <h1 className="poke-title">POKECARDS</h1>
//       <div className="cards">
//         {
//           pokes.map(poke =>
//             <Pokecard
//               id={poke.id}
//               name={poke.name}
//               type={poke.type}
//               exp={poke.base_experience}
//             />)
//         }
//       </div>
//     </div >
//   );
// }

// export default App;


// <Pokecard
//   id={4}
//   name="Charmander"
//   type="Fire"
//   exp={62}
// />
//   <Pokecard
//     id={7}
//     name="Squirtle"
//     type="water"
//     exp={73}
//   />
//   <Pokecard
//     id={11}
//     name="Metapod"
//     type="bug"
//     exp={72}
//   />









// pokemons = [
//   { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
//   { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
//   { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
//   { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
//   { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
//   { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
//   { id: 4, name: 'Gengar', type: 'poison', base_experience: 225 },
//   { id: 4, name: 'Eevee', type: 'normal', base_experience: 65 }
// ];