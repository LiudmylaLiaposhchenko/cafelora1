import { Layer } from '../Layer';
import './index.css';

export const Drink = ({ name, imageUrl, layers, ordered, id }) => {
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
      <form className="drink__controls">
        <input type="hidden" className="order-id" value={id} />
        <button
          className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
