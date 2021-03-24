import React from 'react'
import "./Header.css"

export default function Header() {

  const handleLeave = () => {
    document.getElementById("menu__active").checked = false;
    console.log("leaved");
  }
  return (
    <div className="header" onMouseLeave={handleLeave}>
      <section className="menu menu--circle">
        <input type="checkbox" id="menu__active" />
        <label htmlFor="menu__active" className="menu__active">
          <div className="menu__toggle">
            <div className="icon">
              <div className="burger"></div>
            </div>
          </div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/" className="button"><i className="fas fa-home"></i></a>
                  </div>
                </div>
              </li>
              ###
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="/popular" className="button"><i className="fas fa-fire"></i></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                <label htmlFor="degree--up-0"><div className="arrow"></div></label>
                <label htmlFor="degree--up-1"><div className="arrow"></div></label>
                <label htmlFor="degree--up-2"><div className="arrow"></div></label>
              </li>
            </ul>
          </div>
        </label>
      </section>

    </div>
  )
}
