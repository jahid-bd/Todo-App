import { useState } from 'react';
import shortid from 'shortid';
import './App.css';
import './assets/Icons/icofont/icofont.min.css';
import CreateTask from './components/CreateTask';
import ShowTasks from './components/ShowTasks';
import Tablinks from './components/Tablinks';


function App() {
    const [tasks, setTasks] = useState([]);
    const [isActive, setActive] = useState(0);
    const [text, setText] = useState('');
    const [isUpdate, setisUpdate] = useState(false)
    const [storeText, setStoreText] = useState('')

    const AddNewTask = () =>{
        if(isUpdate){
            const update = {...storeText}
            update.text = text
           const targetItem =  tasks.findIndex(task => task.id === update.id)
           const newArr = [...tasks]
           newArr.splice(targetItem, 1, update)
            setTasks(newArr)
            console.log(update)
            setisUpdate(false)
        }
        if(!isUpdate){
            const task = {
                text: text,
                isCompleted:  false,
                createdAt: new Date(),
                id: shortid.generate()
            }
            setTasks([task, ...tasks])
        }
        
    };

    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id)
        setTasks(deleteTask)
    }
   
    const completeTask = (e) => {
        const taskIndex = tasks.findIndex(task => task.id === e.target.id)
       let newArray = [...tasks]
       newArray[taskIndex].isCompleted = !newArray[taskIndex].isCompleted
       setTasks([...newArray])
       console.log(newArray[taskIndex].isCompleted)
    }

    const activeTabLinks = (e) => {
        const clicked = e.target.value
        setActive(Number(clicked))
    }

    const TabActive = () => {
        const newTask = [...tasks]      
      if(isActive == '1'){
            const completedTask = newTask.filter((task) => task.isCompleted)
            return completedTask
       }else if(isActive == '2'){
            const incompletedTask = newTask.filter((task) => !task.isCompleted)
            return incompletedTask
        }else{
           return tasks
        }
    }

    const editTask = (id) => {
       const [updateTask] =  tasks.filter((task) => task.id === id)
        setText(updateTask.text)
        setStoreText(updateTask)
        setisUpdate(true)
    }

return (
<div className="container">
    <div className="app-container">

        <div className="app-header">
             <h1>To Do App</h1>
        </div>

         <CreateTask addNewTask={AddNewTask} text={text} setText={setText}/>

        <Tablinks isActive={isActive} activeTabLinks={activeTabLinks}/>
        
         <ShowTasks tasks={TabActive()} deleteTask={deleteTask} CompleteTask={completeTask} editTask={editTask} />

         </div>
    </div>
);

}

export default App;
