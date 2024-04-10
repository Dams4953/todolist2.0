import React from 'react';
import { View } from 'react-native';
import TaskItem from '../components/TaskItem';
import onColorSelect from '../screens/MainScreen';

const TaskListByDate = ({ date, tasks, onUpdateTask, onDeleteTask, selectedColor }) => {
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
                        selectedColor={selectedColor}
                        onColorSelect={onColorSelect}
                    />

                </View>
            ))}
        </View>
    );
};

export default TaskListByDate;
