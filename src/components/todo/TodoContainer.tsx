import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full bg-primary-gradient h-full rounded-xl p-[5px]  ">
        {/* <div className=" w-full h-full rounded-xl p-5 space-y-3 bg-white font-semibold text-center">
          <p>There is no task pending</p> 
        </div>*/}
        <div className="bg-white p-5 w-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
