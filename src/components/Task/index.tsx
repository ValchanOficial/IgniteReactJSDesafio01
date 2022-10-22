import { Trash } from 'phosphor-react';
import { LiHTMLAttributes } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import styles from './Task.module.css';

export interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;

}

interface TaskCompProps extends LiHTMLAttributes<HTMLLIElement> {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

const handleDeleteTask = (
    id: string,
    tasks: TaskProps[],
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
}

const handleCheckTask = (
    id: string,
    tasks: TaskProps[],
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
) => {
    const updatedTasks = tasks.map(task => task.id === id ? {
        ...task,
        isComplete: !task.isComplete
    } : task);

    setTasks(updatedTasks);
}

export function Task({ id, title, isComplete, tasks, setTasks }: TaskCompProps & TaskProps) {
    return (
        <li className={styles.task}>
            <div>
                <Checkbox checked={isComplete} onChange={() => handleCheckTask(id, tasks, setTasks)} />
                <span className={`${styles.title} ${isComplete ? styles.checked : ''}`}>{title}</span>
            </div>
            <Button onClick={() => handleDeleteTask(id, tasks, setTasks)} transparent Icon={Trash} />
        </li>
    );
}
