import React from 'react'
import image01 from '../images/backImg01.jpg'
import image02 from '../images/backImg02.jpg'

const TopAbout = () => {
  return (
    <section id="topAbout">
      <h2>私事</h2>
      <div className="cont">
        <ul className="topAbout-list">
          <li className="jobHis">
            <h3>経歴</h3>
            <p className="re-font">
              メーカー、マニュアル制作、事務職等の仕事・引っ越しを経て、2022年に場所や環境にとらわれず、仕事を続けられるようにWebデザイナーにジョブチェンジしました。
              Webだけでなく、様々な媒体でもデザインができるように日々、勉強中です。
              <br /> <br />
              趣味：犬と遊ぶこと。辛いものを食べること。
            </p>
          </li>
          <li className="skill">
            <h3>スキル</h3>
            <div className="skillList dev">
              <span>開発：</span>
              <p className="re-font">
                HTML5 / SCSS / JavaScript / jQuery / PHP / React / Gulp / FTP
              </p>
            </div>
            <div className="skillList">
              <span>ツール：</span>
              <p className="re-font">
                Adobe XD / Figma /Illustrator /Lightroom / Photoshop / WordPress
              </p>
            </div>
          </li>
        </ul>
        <div className="backImg01">
          <img
            src={image01}
            alt="経歴：メーカー、マニュアル制作、事務職等の仕事・引っ越しを経て、2022年に場所や環境にとらわれず、仕事を続けられるようにWebデザイナーにジョブチェンジしました。Webだけでなく、様々な媒体でもデザインができるように日々、勉強中です。趣味：犬と遊ぶこと。辛いものを食べること。"
          />
        </div>
        <div className="backImg02">
          <img
            src={image02}
            alt="開発：HTML5 / SCSS / JavaScript / jQuery / PHP / React / Gulp / FTP ツール：Adobe XD / Figma /Illustrator /Lightroom / Photoshop / WordPress"
          />
        </div>
      </div>
    </section>
  )
}

export default TopAbout
