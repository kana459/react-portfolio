import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom' //URLのパスの中で動的に変化する部分の値を取得できる
import axios from 'axios'

const Content = () => {
  const { contentId } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://mugireact.microcms.io/api/v1/blogs/${contentId} `, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_POSIPAN_API_KEY,
        },
      })
      setContent(result.data)
    }
    fetchData()
  }, [contentId])
  //contentId＝副作用の発生源

  if (!content) return <div className="loading">Loading...</div>

  return (
    <main className="worksContent">
      <div className="contMainImg">
        <img src={content.mainImage.url} alt="" />
      </div>

      <div className="siteUrlFlex">
        <div className="siteURL" dangerouslySetInnerHTML={{ __html: content.siteURL }}>
        </div>

        <svg className="newTabSvg" viewBox="0 0 512 512">
          <g>
            <path d="M96 0V416H512V0H96ZM472 376H136V40H472V376Z" />
            <path d="M40 472V296V136V96H0V512H416V472H376H40Z" />
            <path d="M232.812 312.829L350.671 194.969V279.766H390.671V126.688H237.594V166.688H322.39L204.531 284.547L232.812 312.829Z" />
          </g>
        </svg>
      </div>

      <div className="contText" dangerouslySetInnerHTML={{ __html: content.contents }}></div>

      <div className="backHome">
        <Link to="/">
          <svg className="backHomeSvg" viewBox="0 0 430 512">
            <path d="M410.679 161.238H410.664L255.946 16.2C244.488 5.434 229.647 -0.0230001 214.992 -7.80419e-08C200.338 -0.0230001 185.496 5.434 174.023 16.2L19.321 161.238C7.243 172.555 0.397001 188.382 0.397001 204.932V452.106C0.381001 468.569 7.134 483.69 17.939 494.457C28.697 505.262 43.819 512.007 60.29 511.999H369.71C386.166 512.007 401.286 505.262 412.061 494.457C422.85 483.699 429.619 468.569 429.603 452.106V204.932C429.603 188.368 422.741 172.556 410.679 161.238ZM381.912 452.107C381.897 455.553 380.577 458.448 378.326 460.73C376.044 462.981 373.141 464.301 369.711 464.308H267.993V358.338H162.007V464.308H60.29C56.844 464.293 53.941 462.981 51.659 460.738C49.408 458.456 48.088 455.552 48.088 452.107V204.932C48.088 201.548 49.47 198.342 51.938 196.036L206.655 50.991C209.046 48.755 211.933 47.707 214.991 47.692C218.05 47.708 220.938 48.756 223.328 50.983L378.046 196.021V196.029C380.514 198.342 381.911 201.563 381.911 204.932L381.912 452.107Z" />
          </svg>
          <h5 className="backHomeTitle">ホームに戻る</h5>
          <svg className="backHomeSvg" viewBox="0 0 430 512">
            <path d="M410.679 161.238H410.664L255.946 16.2C244.488 5.434 229.647 -0.0230001 214.992 -7.80419e-08C200.338 -0.0230001 185.496 5.434 174.023 16.2L19.321 161.238C7.243 172.555 0.397001 188.382 0.397001 204.932V452.106C0.381001 468.569 7.134 483.69 17.939 494.457C28.697 505.262 43.819 512.007 60.29 511.999H369.71C386.166 512.007 401.286 505.262 412.061 494.457C422.85 483.699 429.619 468.569 429.603 452.106V204.932C429.603 188.368 422.741 172.556 410.679 161.238ZM381.912 452.107C381.897 455.553 380.577 458.448 378.326 460.73C376.044 462.981 373.141 464.301 369.711 464.308H267.993V358.338H162.007V464.308H60.29C56.844 464.293 53.941 462.981 51.659 460.738C49.408 458.456 48.088 455.552 48.088 452.107V204.932C48.088 201.548 49.47 198.342 51.938 196.036L206.655 50.991C209.046 48.755 211.933 47.707 214.991 47.692C218.05 47.708 220.938 48.756 223.328 50.983L378.046 196.021V196.029C380.514 198.342 381.911 201.563 381.911 204.932L381.912 452.107Z" />
          </svg>
        </Link>
      </div>
    </main>
  )
}

export default Content
