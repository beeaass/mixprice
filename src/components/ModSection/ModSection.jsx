import { memo } from "react";

import ItemCard from "../ItemCard/ItemCard";
import "./ModSection.scss";

const ModSection = memo(({ mod, isActive, showEmpty }) => {
  if (!isActive) return null;

  return (
    <div className={`mod-section ${isActive ? "active" : ""}`}>
      <h2>{mod.title}</h2>
      {mod.items.length > 0 ? (
        <div className="items-grid">
          {mod.items.map((item, index) => (
            <ItemCard key={`${mod.id}_${item.id}_${index}`} item={item} />
          ))}
        </div>
      ) : (
        showEmpty && <div className="no-results">Ничего не найдено</div>
      )}
    </div>
  );
});

export default ModSection;
