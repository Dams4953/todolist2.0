import React from 'react';
import { View } from 'react-native';
import TaskItem from '../components/TaskItem';

const TaskListByDate = ({ date, tasks, onUpdateTask, onDeleteTask }) => {
    const tasksToShow = tasks.filter(task => task.date.toDateString() === date.toDateString());

    return (
        <View>
            {tasksToShow.map((task, index) => (
                <TaskItem
                    key={index}
                    item={task}
                    index={index}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </View>
    );
};

export default TaskListByDate;
