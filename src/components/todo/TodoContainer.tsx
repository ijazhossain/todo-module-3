// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // console.log(priority);
  //* data retrive from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // * From server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  // console.log(todos);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="w-full bg-primary-gradient h-full rounded-xl p-[5px]  ">
        {/* <div className=" w-full h-full rounded-xl p-5 space-y-3 bg-white font-semibold text-center">
          <p>There is no task pending</p> 
        </div>*/}
        <div className="bg-white p-5 w-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
