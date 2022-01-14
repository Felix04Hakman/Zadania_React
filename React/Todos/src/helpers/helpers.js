import axios from "axios";

export const getAllTasks = async (setItems) => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3001/todos'
    })

    setItems(response.data)
}


export const deleteTask = async (id) => {
    const response = await axios({
        method: 'DELETE',
        url: `http://localhost:3001/todos/${id}`
    })

    console.log(response.status);
}