import * as React from 'react';
import BottomTabNavigator from './tabNavigator';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import  {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {BottomTabNavigator} />
            <Drawer.Screen name = "Profile" component = {Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;