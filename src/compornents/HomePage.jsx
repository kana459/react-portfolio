import React, { useEffect, useState } from 'react'
import TopAbout from './TopAbout.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

const HomePage = () => {
  const [contents, setcontents] = useState([])

  useEffect(() => {
    axios
      .get('https://mugireact.microcms.io/api/v1/blogs', {
        headers: {
          'X-API-KEY': process.env.REACT_APP_POSIPAN_API_KEY,
        },
      })
      .then((response) => {
        setcontents(response.data.contents)
      }) //then=正常で作動
      .catch((error) => console.error('Error:', error))
  }, []) //[]で最初のrender時に実行 指定無し＝render毎に実行されるので✖️

  return (
    <main>
      <section id="worksSec">
        <h2>実績</h2>
        <div className="worksList">
          {contents.map((content) => (
            <article key={content.id}>
              <div className="thumbnail" dangerouslySetInnerHTML={{ __html: content.siteURL }}></div>
            </article>
          ))}
        </div>
      </section>
      <TopAbout />
    </main>
  )
}

export default HomePage
