interface ITodo {
  text: string;
  _id: string;
  status: boolean;
}

interface TodoProps {
  todo: ITodo;
}

interface ApiDataType {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
}
