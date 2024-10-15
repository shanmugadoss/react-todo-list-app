import React from 'react'

const Item = ({todoItem, handleCheckboxEvent, handleRemoveBtn}) => {
    return (
        <li key={todoItem.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <input type="checkbox" className="me-2" checked={todoItem.checked} onChange={() => handleCheckboxEvent(todoItem.id)} />
                <span className={todoItem.checked ? "text-decoration-line-through" : null}>{todoItem.todoDesc}</span>
            </div>
            <button type="button" className="btn btn-sm btn-danger" title='Remove Item' onClick={() => handleRemoveBtn(todoItem.id)}>Remove</button>
        </li>
    )
}

export default Item