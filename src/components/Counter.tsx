import styles from './Counter.module.css';

interface CounterProps {
    listTasks: any[];
}

export function Counter({listTasks}: CounterProps) {
    const activeTasks = listTasks.filter(task => task.active)

    return(
        <aside className={styles.counter}>
            <p>Tarefas criadas <span className={styles.numberCounter}>{listTasks.length}</span></p>
            <p>Concluídas <span className={styles.numberCounter}>{activeTasks.length}  de {listTasks.length}</span></p>
        </aside>
    )
}