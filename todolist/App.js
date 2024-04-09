import React from 'react';import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import { TaskProvider } from './src/utils/TaskContext';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <TaskProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: '#e73623',
                        tabBarStyle: {
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            backgroundColor: '#171c1a',
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
                                <Text style={{ color, fontWeight: focused ? 'bold' : 'normal', fontSize: 22  }}>
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

export default App;
