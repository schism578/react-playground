import React from 'react'
import ShoppingItem from './ShoppingItem'

export default function ShoppingList(props) {
  const {
    items = {}, 
    onCheckItem = () => {}, 
    onDeleteItem = () => {}
  } = props

  return (
    <ul>
      {items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={onDeleteItem}
          onCheckItem={onCheckItem}
        />
      )}
    </ul>
  )
}