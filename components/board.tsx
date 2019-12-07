import React from "react";
import GridLayout from "react-grid-layout";
import { PersonCard } from "../components/personCard";

export const Board = () => {
  const employees = [
    {
      avatarUrl: "https://avatars3.githubusercontent.com/u/11068840",
      fullName: "Olga Isakova",
      jobTitle: "Software Engineer",
      currentSkill: "Angular"
    },
    {
      avatarUrl: "https://bit.ly/36hsYSF",
      fullName: "Andrey Krasnov",
      jobTitle: "Software Engineer",
      currentSkill: "Clojure"
    },
    {
      avatarUrl: "https://avatars1.githubusercontent.com/u/34045",
      fullName: "Rich Hickey",
      jobTitle: "Chief Technical Officer",
      currentSkill: "Datomic"
    }
  ];

  const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 3 },
    { i: "b", x: 1, y: 0, w: 4, h: 3 },
    { i: "c", x: 4, y: 0, w: 4, h: 3 }
  ];

  return (
    <GridLayout
      draggableHandle=".drag-handle"
      useCSSTransforms={true}
      isResizable={false}
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={35}
      width={1200}
    >
      {layout.map(({ i }, index) => (
        <PersonCard
          key={i}
          avatarUrl={employees[index].avatarUrl}
          fullName={employees[index].fullName}
          jobTitle={employees[index].jobTitle}
          currentSkill={employees[index].currentSkill}
        />
      ))}
    </GridLayout>
  );
};
