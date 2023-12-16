import { useCallback } from 'react';
import { Layer } from '../Layer';
import './index.css';

export const Drink = ({ name, imageUrl, layers, ordered, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !ordered },
      ]),
    });
  };

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${imageUrl}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((l) => (
            <Layer color={l.color} label={l.label} key={l.label} />
          ))}
        </div>
      </div>
      <form className="drink__controls" onSubmit={handleSubmit}>
        <button
          className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
