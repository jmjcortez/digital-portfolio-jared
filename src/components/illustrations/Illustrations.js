import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './Illustrations.styles.css';

import doneCrying from '../../assets/images/done_crying.png';
import threeAm from '../../assets/images/3am_vibes.png';
import kamn from '../../assets/images/kamn.png';
import colours from '../../assets/images/colours.png';
import mentalTorture from '../../assets/images/mental_torture.png';
import handsDown from '../../assets/images/hands_down.png';
import iHope from '../../assets/images/i_hope_to_be_around.png';
import griselda from '../../assets/images/griselda.png';

const Illustrations = () => {

  const fetchArtworks = async () => {
    try {
      const findArtworks = await axios.get('http://localhost:8000/api/artworks');
      console.log(findArtworks);
      console.log('sasakalin kita ng burat');
    } catch (error) {
      console.log(error);
    }
  }

  const [artworks, setArtworks] = useState([]);

  useEffect(() =>  {
    fetchArtworks();
  }, [])

  return (
    <div className="gallery" data-testid='gallery'>
      <div className="piece-container">
        <img className="piece" src={doneCrying} alt="done_crying" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={threeAm} alt="3am_vibes" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={kamn} alt="kamn" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={colours} alt="colours" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={mentalTorture} alt="mental_torture" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={handsDown} alt="hands_down" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={iHope} alt="i_hope" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
      <div className="piece-container">
        <img className="piece" src={griselda} alt="griselda" />
        <div className="caption">
          <h1>(done) crying</h1>
          <p>reflection of anxiety in someone</p>
        </div>
      </div>
    </div>
  )
}

export default Illustrations