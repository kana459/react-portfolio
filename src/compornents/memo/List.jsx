import React from 'react'

const list = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id)
  }

  return (
    <>
      <ul className="memoOrder">
        {todos.map((memo) => {
          return (
            <li key={memo.id} className="memolist">
              <span>{memo.content}</span>
              <button className="memoRemoveBtn" onClick={() => complete(memo.id)}>
                削除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default list
