import { View, Text, Button } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Schedule: undefined;
  ReportQueue: undefined;
  RateRide: undefined;
  AdminDashboard: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>University Bus App</Text>
      <Button title="View Schedule" onPress={() => navigation.navigate('Schedule')} />
      <Button title="Report Queue" onPress={() => navigation.navigate('ReportQueue')} />
      <Button title="Rate Ride" onPress={() => navigation.navigate('RateRide')} />
      <Button title="Admin Dashboard" onPress={() => navigation.navigate('AdminDashboard')} />
    </View>
  );
}