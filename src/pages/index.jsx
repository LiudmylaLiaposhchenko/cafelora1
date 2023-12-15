import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinks = data.result;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

document.querySelector('.nav-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});

const forms = document.querySelectorAll('form');
forms.forEach((f) =>
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputElm = e.target.querySelector('input');
    const id = inputElm.value;

    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true }]),
    });
  }),
);
