import React from "react";
import Layout from "../components/layout";
import { Board } from "../components/board";

const Home = () => (
  <Layout>
    <div style={{ height: "100vh" }}>
      <Board />
    </div>
  </Layout>
);

export default Home;
