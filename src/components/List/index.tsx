import style from './List.module.scss';
import Item from "./Item";
import { ITasks } from '../../types/tasks';


function List({tasks}: {tasks: ITasks[]}){
    return (
        <aside className={style.taskList}>
            <h2>Estudo do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;