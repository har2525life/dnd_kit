import React from 'react';
import { CSS } from "@dnd-kit/utilities"
import './App.css';
import { useSortable } from '@dnd-kit/sortable';
import "./Card.css"


const Card: React.FC<CardType> = ({id, title}) => {
  // useSortableよりここにユニークのIDが必要
  const { attributes, listeners, setNodeRef, transform} = useSortable({id})
  const style = { transform: CSS.Transform.toString(transform)}
  return (
    // attributes, listenersはDOMイベントを検知するため
    // 
    <div className='card' ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div id={id}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;

// ドラッグできるitemのコンポーネント