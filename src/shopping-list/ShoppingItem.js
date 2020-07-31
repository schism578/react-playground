import React from 'react'

export default function ShoppingItem(props) {
  const {
    item = {}, 
    onCheckItem = () => {}, 
    onDeleteItem = () => {}
  } = props

  return (
    <li>
      <h2 style={{
        textDecoration: item.checked ? 'line-through' : null,
      }}>
        {item.name}
      </h2>
      <button type='button' 
        onClick={() => onCheckItem(item)}
      >check</button>
      <button type='button' 
        onClick={() => onDeleteItem(item)}
      >delete</button>
    </li>
  )
}