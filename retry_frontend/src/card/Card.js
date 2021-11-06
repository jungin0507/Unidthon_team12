import { height } from '@mui/system';
import React from 'react';
import './Card.css';
import Detail from './Detail';

const Card = ({ name, party, title, contents }) => {
  return (
    <div className="card">
      <div className="container">
        <nav className="menu">
          <a href="#">
            <img src="img/share.png" alt="share"></img>
          </a>
          <a href="#">
            <img src="img/bookmark.png" alt="bookmark"></img>
          </a>
        </nav>

        <section>
          <div
            className="promise"
            onClick={() => {
              const modal = document.getElementById('modal');
              modal.style.display = 'flex';
            }}
          >
            <span>{title}</span>
          </div>

          <div className="info">
            <img
              src={`img/${name}.jpg`}
              alt="candidate"
              className="candidate"
            ></img>
            <img src={`img/${party}.jpg`} alt="party" className="logo"></img>
            <span className="partyName">{party}</span>
            <span className="name">{name}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
