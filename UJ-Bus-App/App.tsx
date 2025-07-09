import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import Home from './screens/Home';
import Schedule from './screens/Schedule';
import Rating from './screens/Rating';
import ReportQue from './screens/ReportQue';
import AdminDashboard from './screens/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="RateRide" component={Rating} />
        <Stack.Screen name="ReportQueue" component={ReportQue} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
