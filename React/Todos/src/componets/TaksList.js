import Task from "./Task";

const TaksList = ({items, handleStatus, setItems,status}) =>{
    const filteredItems = items.filter((item) => status === 'all' ? true : item.status === status );


    return (
        <>
        {filteredItems.length === 0 && <p>Dodaj task</p>}
        <ul>
            { filteredItems.map(item => <Task key={ item.id } items={items} item={ item } status={status} handleStatus={ handleStatus }
                                      setItems={ setItems }/>) }

        </ul>
        </>
    );
}

export default TaksList