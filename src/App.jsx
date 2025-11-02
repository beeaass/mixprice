import React, { useEffect, useState } from "react";
import { modSections } from "./data";
import Header from "./components/Header/Header";
import ModTabs from "./components/ModTabs/ModTabs";
import ModSection from "./components/ModSection/ModSection";
import SearchBar from "./components/SearchBar/SearchBar";
import { Particles } from "./utils/particles";
import "./App.scss";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [activeMod, setActiveMod] = useState(modSections[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredModSections, setFilteredModSections] = useState(modSections);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      new Particles("particles-canvas");
    }
  }, [showContent]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredModSections(modSections);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = modSections.map((mod) => ({
      ...mod,
      items: mod.items.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerSearchTerm) ||
          item.id.toString().includes(searchTerm)
      ),
    }));

    setFilteredModSections(filtered);

    const firstModWithResults = filtered.find((mod) => mod.items.length > 0);
    if (firstModWithResults) {
      setActiveMod(firstModWithResults.id);
    }
  }, [searchTerm]);

  if (!showContent) {
    return (
      <div className={`loader ${loaderVisible ? "show" : ""}`}>
        <div className="logo">
          <img src="/logo.png" alt="MixPrice Logo" />
        </div>
        <p>Welcome to MixPrice</p>
      </div>
    );
  }

  return (
    <>
      <canvas id="particles-canvas" className="particles-background" />
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
    </>
  );
}

export default App;
