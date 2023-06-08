import { useDroppable } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import Card from './Card'
import "./Column.css"

const Column: React.FC<ColumnType> = ({id, title, cards}) => {
    // それぞれにユニークなidを持たせる必要があるため
    const { setNodeRef} = useDroppable({id})

  return (
    // sortを行うためのContext
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
        <div ref={setNodeRef} className='column'>
            <p className='column_title'>{title}</p>
            {
                cards.map((card) => (
                    <Card key={card.id} id={card.id} title={card.title} />
                ))
            }
        </div>
    </SortableContext>
  )
}

export default Column

// Cardを置くことのできるコンポーネント