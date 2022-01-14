import {deleteTask} from "../helpers/helpers";

const Task = ({item, handleStatus, setItems, items}) => {
    return (
        <li className="todo">
            <i className={item.status ? "complete" : "active"}
               onClick={() => {
                   handleStatus(item.id)
               }}
            />
            {item.name}
            <button onClick={() => {
                deleteTask(item.id).catch(() => {
                });
                setItems(items.filter((todo) => item !== todo))
            }}>X
            </button>

        </li>
    )
}
export default Task