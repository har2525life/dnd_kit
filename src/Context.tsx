import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import React from 'react'
import {test} from "./test"
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Column from './Column'
import "./Context.css"

const Context = () => {
    const columns: ColumnType[] = test
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }))
  return (
    <DndContext>
        <div className='context'>
            {
                columns.map((column) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        cards={column.cards}
                    />
                ))
            }
        </div>
    </DndContext>
  )
}

export default Context