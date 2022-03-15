import axios from "axios";
import type { NextPage } from "next";
import * as React from "react";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Home: NextPage = () => {
  const [pokemon, setPokemon] = React.useState<{ name: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    await delay(2000);
    setLoading(false);
    setPokemon(data.data.results);
  };

  return (
    <div style={{ ...mainStyle, flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: 100, fontSize: 32 }}>
        Client Side
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {pokemon.slice(0, 3).map((poke, index) => (
            <div
              key={index}
              style={{
                padding: 8,
                margin: 2,
                borderRadius: 8,
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 1,
              }}
            >
              {poke.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mainStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
