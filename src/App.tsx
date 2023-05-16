import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from './components/utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [toDoId, setToDoId] = useState<string>('');

  const fetchAndSetTodos = async () => {
    const arrayOfTodos = await getAllToDo();
    console.log(arrayOfTodos, 'array');
    setToDo(arrayOfTodos);
  };

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  const updateMode = (_id: string, text: string) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo...."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text)
                : async () => {
                    const item = await addToDo(text);
                    const updatedToDoList = [...toDo, item];
                    setToDo(updatedToDoList as any);
                  }
            }>
            {isUpdating ? 'Update' : 'Add'}
          </div>
        </div>

        <div className="list">
          {toDo.map((item: ITodo) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={async () => {
                await deleteToDo(item._id);
                const filteredToDoItems = toDo.filter(
                  (d: any) => d._id !== item._id
                );
                setToDo(filteredToDoItems);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
