import React from 'react';
import LazyLoadBackground from './LazyLoadBackground';

const HeaderPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#keyboard-shortcuts">Shortcuts</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="header-wrapper" id="home">
        <LazyLoadBackground
          className="header-background-wrapper"
          source="bg.png"
        />
        <div className="header-container">
          <h1>Making Transcription More Bearable</h1>
          <a href="#transcribe">Start Transcribing Now</a>
        </div>
      </section>
    </>
  );
};

export default HeaderPage;
