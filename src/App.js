import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './styles/style.css'
import Header from './compornents/Header'
import HomePage from './compornents/HomePage'
import Works from './compornents/works/Works'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' //BrowserRouter=routerを導入するためのコンポーネント
import Footer from './compornents/Footer'

//Appというコンポーネントを定義
const App = () => {
  //ページ遷移でページトップへ
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }


  //return=>HTML要素を返す
  return (
    <Router>
      <div className="App container">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:contentId" element={<Works />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

//定義したAPPをデフォルトエクスポート
export default App
