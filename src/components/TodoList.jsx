import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vegs',
        'Pick up the kids from school'
    ]

  return (

    <ul className="main">
        {todos.map((todo, todoIndex) => {
            return (
                <li className='todoItem' 
                key={todoIndex}
                >
                <i className="fa-solid fa-pen-to-square"></i>
                
                {todo}</li>
            )
        })}
    </ul>
)
}
