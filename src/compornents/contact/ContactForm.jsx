import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

//useLocation(現在のページURL)
//useNavigate（ページ遷移制御）
//useParams（ルートパラメータを取得）

//Name,Namekana,emailフィールドにデフォルト値を指定。
let formStateInitData = {
  Name: '',
  Namekana: '',
  email: '',
  textarea: '',
}

//関数コンポーネント（stateやlifecycleは使えないがreacthookで同じような機能を返すことができる）

//usestate=状態を扱う
//const[状態,更新関数] = useState(初期状態)
const ContactForm = () => {
  // ページ開いたときの状態
  const [isRender, setIsRender] = useState(true)
  const location = useLocation()
  // const formStateData = location.state.formData ? location.state.formData : formStateInitData
  const formStateData = location.state?.formData || formStateInitData

  const navigate = useNavigate()
  //入力フォームに値が空ならばテキストを表示する

  const [formData, setFormData] = useState(formStateData)

  useEffect(() => {
    // 最初のレンダーをとばす
    if (isRender) {
      setIsRender(false)
      return
    }
    // 入力フォームの文字数が０ならtureを返すそうでなければfalseを返す
    ;(formData.Name.length &&
      formData.Namekana.length &&
      formData.email.length &&
      formData.textarea.length) === 0
      ? setValidName(true)
      : setValidName(false)
  }, [formData])
  // validNameにfalse
  const [validName, setValidName] = useState(false)

  //フォームのフィールが更新される度に、formDataのstateを更新する
  const handleInputChange = (event) => {
    //event.targetからnameとvalueをとる
    const { name, value } = event.target
    //name,valueの値を更新
    //[name]=配列に対するvalue
    setFormData({ ...formData, [name]: value })
  }

  //navigateを使用してページ先へformDataを渡す
  const handleSubmit = (event) => {
    event.preventDefault()

    if (validName) return
    navigate('/confirm', { state: { formData: formData } })
  }

  return (
    <main className="contactform">
      <h2>ContactForm</h2>
      <p className="sm-font formNote">
        ※サンプルのコンタクトフォームのため、入力した内容は実際には送信されません。
      </p>
      <form onSubmit={handleSubmit}className="contactform">
        <div className="inputForm">
          <p className="resm-font">お名前</p>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder="むぎまる"
          />
          {/* テキストを表示 */}
          {validName && (
            <p className="formNoteText sm-font" style={{ opacity: '1' }}>
              {' '}
              ※お名前を入力してください
            </p>
          )}
        </div>

        <div className="inputForm">
          <p className="resm-font">フリガナ</p>
          <input
            type="text"
            name="Namekana"
            value={formData.Namekana}
            onChange={handleInputChange}
            placeholder="ムギマル"
          />
          {validName && (
            <p className="formNoteText sm-font" style={{ opacity: '1' }}>
              {' '}
              ※フリガナを入力してください
            </p>
          )}
        </div>

        <div className="inputForm">
          <p className="resm-font">メールアドレス</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="mugimaru@email.com"
          />
          {/* テキストを表示 */}
          {validName && (
            <p className="formNoteText sm-font" style={{ opacity: '1' }}>
              {' '}
              ※メールアドレスを入力してください
            </p>
          )}
        </div>

        <div className="inputForm">
          <label>
            <p className="resm-font">お問い合わせ内容</p>
            <textarea
              name="textarea"
              value={formData.textarea}
              onChange={handleInputChange}
              cols={30}
              rows={10}
              placeholder="お問い合わせ内容を入力してください"
            ></textarea>
            {/* テキストを表示 */}
            {validName && (
              <p className="formNoteText sm-font" style={{ opacity: '1' }}>
                {' '}
                ※お問い合わせ内容を入力してください
              </p>
            )}
          </label>
        </div>

        <button className="isSubmit" type="submit">
          確認する
        </button>
      </form>
    </main>
  )
}

export default ContactForm
