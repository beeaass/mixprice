import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ModSection.scss";

const ModSection = ({ mod, isActive, showEmpty }) => {
  if (!isActive) return null;

  return (
    <div className="mod-section">
      <h2>{mod.title}</h2>
      {mod.items.length > 0 ? (
        <div className="items-grid">
          {mod.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        showEmpty && <div className="no-results">Ничего не найдено</div>
      )}
    </div>
  );
};

export default ModSection;