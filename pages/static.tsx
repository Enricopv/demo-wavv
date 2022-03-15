import axios from "axios";
import type { NextPage } from "next";
import * as React from "react";

export async function getStaticProps() {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  await delay(2000);
  return {
    props: {
      pokemon: data.data.results,
    }, // will be passed to the page component as props
  };
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Home: NextPage = (props: {
  pokemon?: { name: string }[];
  children?: React.ReactNode;
}) => {
  return (
    <div style={{ ...mainStyle, flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: 100, fontSize: 32 }}>
        Static Side
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {props?.pokemon?.slice(0, 3).map((poke, index) => (
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
    </div>
  );
};

const mainStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
