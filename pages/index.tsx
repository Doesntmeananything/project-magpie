import React from "react";
import Layout from "../components/layout";
import { PersonCard } from "../components/personCard";

const Home = () => (
  <Layout>
    <PersonCard
      avatarUrl="https://avatars3.githubusercontent.com/u/11068840"
      name="Olga Isakova"
      jobTitle="Software Engineer"
      currentSkill="Angular"
    />
  </Layout>
);

export default Home;
