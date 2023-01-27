import styles from './Item.module.css';
import checklogo from '../assets/check.svg';
import checkNot from '../assets/checkNot.svg';

interface ItemProps {
    name: String;
    active: boolean;
    listTasks: any[];
    setListTasks: any;
}

export function Item({name, active, listTasks, setListTasks}: ItemProps) {
    
 function handleToogleActive (){
    const newArrayTask = listTasks.map(task => 
      task.name === name ? {...task, active : !active }: task 
        )
        setListTasks(newArrayTask)
 }

 function handleDeleteTask(){
    const newArrayTask = listTasks.filter(task => task.name !== name)
    setListTasks(newArrayTask)
 }

    return(
        <aside className={styles.item}>
            <ul>
                <label>
                    <input type="checkbox" defaultChecked={active} 
                    onClick={() => handleToogleActive()}/>
                    {active ?  <img src={checklogo}></img> : <img src={checkNot}></img>}
                    
                </label>
                
                            
                <p className={active ? styles.active : ""}>{name}</p>
                <button onClick={() => handleDeleteTask()}><i className="fa-regular fa-trash-can"></i></button>
            </ul>
        </aside>
    )
}