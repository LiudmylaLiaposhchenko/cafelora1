import './index.css';
import { OrderItem } from '../OrderItem';

export const Order = ({ items }) => {
  return (
    <div className="order__items">
      {items.length === 0 ? (
        <p>Neni objednavka</p>
      ) : (
        items.map((i) => <OrderItem key={i.id} name={i.name} image={i.image} />)
      )}
    </div>
  );
};
