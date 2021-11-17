import React from "react";
import CardsList from "../../components/CardsList";
import { defaultData } from "../../components/CardsList/stories/dataMock";

function HomePage() {
  return (
    <>
      <CardsList data={defaultData} />
    </>
  );
}

export default HomePage;
