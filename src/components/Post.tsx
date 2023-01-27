import styles from './Post.module.css';
import agenda from '../assets/agenda.svg';

export function Post() {
    

    return (
        <div className={styles.post}>
            <img src={agenda} alt="imagem da agenda" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )

   
}