import { PlusCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Header } from 'src/components/Header';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Task, TaskProps } from './components/Task';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState(tasks.length);
  const [task, setTask] = useState('');

  useEffect(() => {
    setCompletedTasks(tasks.filter(task => task.isComplete).length);
  }, [tasks]);

  const handleCreateNewTask = () => {
    if (task === '') return;
    const newTask = { id: uuidv4(), title: String(task), isComplete: false };
    setTasks([...tasks, newTask]);;
  }

  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.section}>
        <div className={styles.newTask}>
          <Input type="text" placeholder="Adicionar uma nova tarefa" onChange={e => setTask(e.target.value)} />
          <Button onClick={handleCreateNewTask} Icon={PlusCircle} disabled={task.length === 0}>
            Criar
          </Button>
        </div>
        <div className={styles.tasksList}>
          <div className={styles.info}>
            <Counter counter={tasks.length}>Tarefas criadas:</Counter>
            <Counter
              counter={tasks.length === 0 ? '0' : `${completedTasks} de ${tasks.length}`}
              color="secondary">
              Concluídas:
            </Counter>
          </div>
          <ul className={styles.list}>
            {tasks.map(task => (
              <Task
                key={task.id}
                {...task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </ul>
        </div>
      </section>

    </div>
  )
}

export default App
