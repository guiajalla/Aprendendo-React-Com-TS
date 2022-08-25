import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITasks } from '../types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks}/>
        <List tasks={tasks}/>
        <Timer />
    </div>
  );
}

export default App;
