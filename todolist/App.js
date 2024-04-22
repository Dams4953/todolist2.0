import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import AddTask from './src/components/AddTask';

const Tab = createBottomTabNavigator();

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setIsModalVisible(false);
    };

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <CustomButton onPress={() => setIsModalVisible(true)} />
                {isModalVisible && (
                    <AddTask onAddTask={handleAddTask} onClose={() => setIsModalVisible(false)} />
                )}
            </View>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#5396ac',
                    tabBarStyle: {
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        height: 125,
                        paddingBottom: 40,
                    },
                }}
            >
                <Tab.Screen
                    name="Accueil"
                    options={{
                        tabBarLabel: ({ color, focused }) => (
                            <Text style={{ color, fontWeight: focused ? 'bold' : 'normal', fontSize: 22 }}>
                                Accueil
                            </Text>
                        ),
                    }}
                >
                    {({ route }) => <MainScreen tasks={tasks} setTasks={setTasks} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Agenda"
                    options={({ route }) => ({
                        tabBarLabel: ({ color, focused }) => (
                            <Text style={{ color, fontWeight: focused ? 'bold' : 'normal', fontSize: 22 }}>
                                Agenda
                            </Text>
                        ),
                    })}
                >
                    {({ route }) => <AgendaScreen tasks={tasks} setTasks={setTasks} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 18,
        top: 100,
        zIndex: 999,
    },
    buttonContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#5396ac',
        justifyContent: 'center',
        alignItems: 'center',
        top: 600,
        left: 150,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
});

export default App;
