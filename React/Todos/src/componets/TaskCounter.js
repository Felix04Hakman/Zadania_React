const TaskCounter = ({items}) => <p>{items.filter((item) => !item.status ).length} items left</p>
export default TaskCounter