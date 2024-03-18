import React from 'react'
import image from '../images/about-img.jpg'

const TopAbout = () => {
  return (
    <section id='topAbout'>
      <h2>About</h2>
      <ul className='topAbout-list'> 
        <li className='aboutImg'>
          <img src={image} alt="サムネイル" />
        </li>
        <li className='abouttext'>
          <p className='re-font'>
            2022年12月よりWebデザイナーにジョブチェンジしました。<br />
            ものづくりが好きで、シンプルなデザインを好んでつくります
            <br />柴犬（男の子）とゆったり生活中。
          </p>
        </li>
      </ul>
    </section>
  )
}

export default TopAbout
