import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ContactConfirm = (props) => {
  const location = useLocation()
  const formData = location.state.formData


  const navigate = useNavigate()
  const backPrev = (event) => {
    event.preventDefault()
    navigate('/contact', { state: { formData: formData } })
  }

  return (
    <main className="contactfirm">
      <div className="confirm">
        <h2>ご確認ページ</h2>
        {/* フォームデータを表示 */}
        <div className="confirm-text">
          <p className="sm-font confirmName">お名前</p>
          <p>{formData.Name}</p>
        </div>

        <div className="confirm-text">
          <p className="sm-font confirmName">フリガナ</p>
          <p>{formData.Namekana}</p>
        </div>

        <div className="confirm-text">
          <p className="sm-font confirmName">Email</p>
          <p>{formData.email}</p>
        </div>

        <div className="confirm-text">
          <p className="sm-font confirmName">お問い合わせ内容</p>
          <p>{formData.textarea}</p>
        </div>

        <div className="confirmbtn">
          <button onClick={backPrev} className="isSubmit">
            戻る
          </button>
          <button className="isSubmit finSubmit" type="submit">
            送信
          </button>
        </div>
      </div>
    </main>
  )
}

export default ContactConfirm
