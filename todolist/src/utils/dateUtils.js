import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from '../components/TaskItem';

const TaskListByDate = ({ date, tasks, onUpdateTask, onDeleteTask }) => {
    const tasksToShow = tasks.filter(task => task.date.toDateString() === date.toDateString());

    return (
        <View>
            {tasksToShow.map((task, index) => (
                <View key={index}>
                    <TaskItem
                        item={task}
                        index={index}
                        onUpdateTask={onUpdateTask} 
                        onDeleteTask={onDeleteTask}
                        isEditingDate={false} 
                        onShowDatePicker={() => { }} 
                    />
                </View>
            ))}
        </View>
    );
};

export default TaskListByDate;
