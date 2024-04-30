import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
// import headerImg from '../images/headerImg.jpg'
// import headerImgsp from '../images/headerImgsp.jpg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (open) {
      // メニューが開いている時はbodyにactiveクラスを追加
      document.body.classList.add('active')
    } else {
      // メニューが閉じている時はactiveクラスを削除
      document.body.classList.remove('active')
    }

    // コンポーネントのアンマウント時にクリーンアップする
    return () => {
      document.body.classList.remove('active')
    }
  }, [open]) // 依存配列にisOpenを設定

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
        <div className="headerImg"> </div>
        <div className="headerImgsp"></div>
        <button className={`hamOpenBtn ${open ? 'close' : ''}`} onClick={toggleFunction}>
          <div className={`MenuBtn ${open ? 'closeBtn' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`hamMenu ${open ? 'open' : ''}`}>
          <div className="menuCont">
            <ul>
              <li>
                <Scroll
                  to="topAbout"
                  smooth={true}
                  duration={600}
                  offset={-50}
                  onClick={toggleFunction}
                >
                  一、私事
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="worksSec"
                  smooth={true}
                  duration={600}
                  offset={-50}
                  onClick={toggleFunction}
                >
                  一、実績
                </Scroll>
              </li>
            </ul>
          </div>
          <div className="hambackImg"></div>
        </div>
      </header>
    </>
  )
}

export default Header
