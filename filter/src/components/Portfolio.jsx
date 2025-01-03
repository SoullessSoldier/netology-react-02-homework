import { useState } from "react";
import data from "@/data/data";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

const getFiltersSet = (data) => {
  const resultSet = new Set();
  resultSet.add("All")
  data.forEach((dataItem) => {
    resultSet.add(dataItem.category);
  });
  return [...resultSet];
};

const filtersData = getFiltersSet(data);

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(0);

  const setFilter = (activeFilterId) => {
    if (activeFilterId !== activeFilter){
      setActiveFilter(() => activeFilterId)
    }
  }

  return (
    <div className="portfolio-main">
      <Toolbar filters={filtersData} selected={activeFilter} onSelectFilter={setFilter}/>
      <ProjectList projects={activeFilter === 0 ? data : data.filter((item) => item.category === filtersData[activeFilter])} />
    </div>
  )


  

  
}

export default Portfolio;
