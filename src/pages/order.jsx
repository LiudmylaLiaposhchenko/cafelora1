import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Order } from '../components/Order';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const data = await response.json();
const items = data.result;
console.log(items);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu="true" />
      <main className="order">
        <div className="order__content container">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order empty-order--hide">
            Zatím nemáte nic objednáno
          </p>
          <Order items={items} />
        </div>
      </main>
      <Footer />
    </div>
  </div>,
);
