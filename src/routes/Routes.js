import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';


const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: "#FF0000",
            tabBarInactiveTintColor: "#000000",
        }}
     >

      <TabBottom.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return (<Ionicons name='home' size=
            {size} color={color}/>);
          }
            return( <Ionicons name='home-outline' size=
            {size} color={color}/>) ;
        },
      }}
      />

      <TabBottom.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarLabel: "Exercise Plan",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return <Ionicons name='barbell-outline' size=
            {size} color={color}/>;
          }
            return <Ionicons name='barbell-outline' size=
            {size} color={color}/>;
        },
      }}
      />


      <TabBottom.Screen
      name="About"
      component={About}
      options={{
        tabBarLabel: "Profile",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return <Ionicons name='person-outline' size=
            {size} color={color}/>;
          }
            return <Ionicons name='person-outline' size=
            {size} color={color}/>;
        },
      }}
      />
    </TabBottom.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen
      name='Inicio'
      component={TabBottomRoutes}
      options={{
        drawerLabel: 'Inicio',
        drawerIcon: ({size, color}) => (
          <Ionicons 
          size={size} 
          color={color}
           name='home' />
        )
      }}/>
      <Drawer.Screen
      name='Blog'
      component={StackRoutes}
      options={{
        drawerLabel: 'Blog',
        drawerIcon: ({size, color}) => (
          <Ionicons 
          size={size} 
          color={color}
           name='archive' />
        )
      }}/>
    </Drawer.Navigator>

  );
}

const Stack =createNativeStackNavigator();

function StackRoutes(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false }}>
      <Stack.Screen
      name='Blog'
      component={Blog}/>
      <Stack.Screen
      name='Info1'
      component={Info1}/>
      <Stack.Screen
      name='Info2'
      component={Info2}/>

    </Stack.Navigator>
  );
}