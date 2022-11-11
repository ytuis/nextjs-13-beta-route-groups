
type PageProps = {
  params: {
    todoId: string
  }
}

const Todo = ({ params: { todoId } }: PageProps) => {
  throw new Error("Not Found")
  return (
    <div>Todo {todoId}</div>
  )
}

export default Todo