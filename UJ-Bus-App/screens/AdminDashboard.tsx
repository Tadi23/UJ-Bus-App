import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

type ReportSummary = {
  routeName: string;
  averageRating: number;
  queueStats: { short: number; medium: number; long: number };
};

export default function AdminDashboard() {
  const [data, setData] = useState<ReportSummary[]>([]);

  useEffect(() => {
    axios.get('http://your-api-url/api/admin/summary')
      .then(res => setData(res.data));
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.routeName}
      renderItem={({ item }) => (
        <View style={{ padding: 10, margin: 10, borderWidth: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.routeName}</Text>
          <Text>Average Rating: {item.averageRating}</Text>
          <Text>Queue Reports — Short: {item.queueStats.short}, Medium: {item.queueStats.medium}, Long: {item.queueStats.long}</Text>
        </View>
      )}
    />
  );
}