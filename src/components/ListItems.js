import React from 'react'
import Item from './Item'

const ListItems = ({ todoItems, handleCheckboxEvent, handleRemoveBtn }) => {
    return (
        <ul className="list-group">
            {
                (todoItems.length) ?
                    todoItems.map(todoItem => (
                        <Item
                            todoItem={todoItem}
                            key={todoItem.id}
                            handleCheckboxEvent={handleCheckboxEvent}
                            handleRemoveBtn={handleRemoveBtn}
                        />
                    )) : 'No Records Found'
            }
        </ul>
    )
}

export default ListItems