import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Schedule = {
  scheduleID: number;
  routeName: string;
  departureTime: string;
  busNumber: string;
};

export default function Schedule() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    axios.get('http://your-api-url/api/schedules')
      .then(res => setSchedules(res.data));
  }, []);

  return (
    <FlatList
      data={schedules}
      keyExtractor={(item) => item.scheduleID.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, margin: 10, borderWidth: 1 }}>
          <Text>{item.routeName}</Text>
          <Text>{new Date(item.departureTime).toLocaleTimeString()}</Text>
          <Text>Bus #{item.busNumber}</Text>
        </View>
      )}
    />
  );
}