import "./ModTabs.scss";

const ModTabs = ({ modSections, activeMod, setActiveMod }) => {
  return (
    <div className="mod-tabs-container">
      <div className="mod-tabs">
        {modSections.map((mod) => (
          <div
            key={mod.id}
            className={`mod-tab ${activeMod === mod.id ? "active" : ""}`}
            onClick={() => setActiveMod(mod.id)}
          >
            <img src={mod.icon} className="tab-icon" alt={mod.title} />
            <span className="tab-title">{mod.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModTabs;
