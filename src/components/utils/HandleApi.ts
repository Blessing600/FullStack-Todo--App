import axios from 'axios';

const baseUrl = 'https://fullstack-todo-app-backend-8ogn.onrender.com';

const getAllToDo = () => {
  return axios.get(baseUrl).then(({ data }) => {
    return data;
  });
};

const addToDo = async (text: string) => {
  return axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId: string, text: string) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id: string) => {
  console.log('deleteToDo function called with id:', _id);
  return axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo();
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
