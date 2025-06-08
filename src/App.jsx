import React, { useState, useEffect } from "react";
import { modSections } from "./data";
import Header from "./components/Header/Header";
import ModTabs from "./components/ModTabs/ModTabs";
import ModSection from "./components/ModSection/ModSection";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.scss";

function App() {
  const [activeMod, setActiveMod] = useState(modSections[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredModSections, setFilteredModSections] = useState(modSections);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredModSections(modSections);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = modSections.map(mod => ({
      ...mod,
      items: mod.items.filter(item => 
        item.name.toLowerCase().includes(lowerSearchTerm) ||
        item.id.toString().includes(searchTerm))
    }));

    setFilteredModSections(filtered);

    const firstModWithResults = filtered.find(mod => mod.items.length > 0);
    if (firstModWithResults) {
      setActiveMod(firstModWithResults.id);
    }
  }, [searchTerm]);

  return (
    <div className="app">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <ModTabs 
        modSections={modSections} 
        activeMod={activeMod} 
        setActiveMod={setActiveMod} 
      />
      
      {filteredModSections.map((mod) => (
        <ModSection 
          key={mod.id} 
          mod={mod} 
          isActive={activeMod === mod.id} 
          showEmpty={!!searchTerm.trim()}
        />
      ))}
    </div>
  );
}

export default App;