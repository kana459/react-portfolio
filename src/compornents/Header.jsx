import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import headerImg from '../images/headerImg.jpg'
import headerImgsp from '../images/headerImgsp.jpg'

const Header = () => {
  return (
    <>
      <header>
        <div className="headerFv">
          <nav>
            <ul>
              <li>
                <Scroll to="topAbout" smooth={true} duration={400} offset={-50}>
                  一、私事
                </Scroll>
              </li>
              <li>
                <Scroll to="worksSec" smooth={true} duration={400} offset={-50}>
                  一、実績
                </Scroll>
              </li>
            </ul>
          </nav>

          <h1>
            <Link to="/">雲行流水</Link>
          </h1>
        </div>
        <div className="headerImg">
          <img src={headerImg} alt="新福佳奈のポートフォリオサイト" />
        </div>
        <div className="headerImgsp"></div>
      </header>
    </>
  )
}

export default Header
