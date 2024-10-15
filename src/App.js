import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListItems from './components/ListItems';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([]);

  const handleCheckboxEvent = (id) => {
    const liItems = items.map(item => item.id === id ? {...item, checked:!item.checked } : item)
    setItems(liItems);
  }

  const handleRemoveBtn = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const [newItem, setNewItem] = useState('');

  const handleSubmit = () => {
    if(!newItem) return;
    addNewItem()
    setNewItem('')
  }

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0
    const addNewItem = { id: id, checked: false, todoDesc: newItem }
    const listItems = [...items, addNewItem]
    setItems(listItems)
  }
  
  return (
    <div role="main" className="container mt-5">
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <div className="App">
        <div className="card  mt-5">
          <h5 className="card-header">Todo Lists</h5>
          <div className="card-body">
              <ListItems 
                todoItems={items} 
                handleCheckboxEvent={handleCheckboxEvent} 
                handleRemoveBtn={handleRemoveBtn}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
