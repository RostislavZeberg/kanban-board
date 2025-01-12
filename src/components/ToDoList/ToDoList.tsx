import { useEffect, useState } from "react"
import { Done } from "../Done"
import { InProgress } from "../InProgress"
import { Review } from "../Review"
import { ToDo } from "../ToDo"
import { ButtonDeleteTodo } from "../ButtonDeleteTodo"

export const ToDoList = () => {

  return (
    <div className="main__list list">      
        <ToDo />
        <InProgress />
        <Review />
        <Done />
        <ButtonDeleteTodo/>      
    </div>
  )
}