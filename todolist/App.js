import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import { TaskProvider } from './src/utils/TaskContext';
import AddTask from './src/components/AddTask';

const Tab = createBottomTabNavigator();

const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddTask = () => {
        setIsModalVisible(true);
    };

    return (
        <TaskProvider>
            <NavigationContainer>
                <View style={styles.container}>
                    <CustomButton onPress={handleAddTask} />
                    {isModalVisible && (
                        <AddTask onClose={() => setIsModalVisible(false)} />
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
                        component={MainScreen}
                        options={({ route }) => ({
                            tabBarLabel: ({ color, focused }) => (
                                <Text style={{ color, fontWeight: focused ? 'bold' : 'normal', fontSize: 22 }}>
                                    Accueil
                                </Text>
                            ),
                        })}
                    />
                    <Tab.Screen
                        name="Agenda"
                        component={AgendaScreen}
                        options={({ route }) => ({
                            tabBarLabel: ({ color, focused }) => (
                                <Text style={{ color, fontWeight: focused ? 'bold' : 'normal', fontSize: 22 }}>
                                    Agenda
                                </Text>
                            ),
                        })}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </TaskProvider>
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
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
});

export default App;
