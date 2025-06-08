import React from "react";
import "./ItemCard.scss";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="item-meta">
        <span className="item-id">ID: {item.id}</span>
        {typeof item.modules !== "undefined" && (
          <span
            className={`module-tag ${
              item.modules ? "has-module" : "no-module"
            }`}
          >
            {item.modules ? "С модулями" : "Без модулей"}
          </span>
        )}
      </div>

      <div className="item-header">
        <div className="item-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="item-name">{item.name}</div>
      </div>

      <div className="item-details">
        <span className="quantity">Кол-во: {item.quantity}</span>
        <span className="price">
          {item.costImage && (
            <img src={item.costImage} className="currency-icon" alt="Валюта" />
          )}
          {item.cost}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;