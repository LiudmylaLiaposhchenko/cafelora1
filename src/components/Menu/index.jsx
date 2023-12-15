import { Drink } from '../Drink';
import './index.css';

export const Menu = ({ drinks }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((d) => (
            <Drink
              key={d.id}
              name={d.name}
              imageUrl={d.image}
              layers={d.layers}
              ordered={d.ordered}
              id={d.id}
            />
          ))}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
