import React from 'react';
import { View } from 'react-native';
import TaskItem from '../components/TaskItem';

export const TaskListByDate = ({ date, tasks, onUpdateTask, onDeleteTask }) => {
    const tasksToShow = tasks.filter(task => {
        if (task.date instanceof Date) {
            return task.date.toDateString() === date.toDateString();
        } else {
            task.date = new Date(task.date);
            return task.date.toDateString() === date.toDateString();
        }
    });

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



export const getDateLabel = (date) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return 'Aujourd\'hui';
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Demain';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Hier';
    } else {
        const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const month = months[date.getMonth()];
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();

        return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    }
};