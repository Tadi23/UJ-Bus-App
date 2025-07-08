import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function ReportQueue() {
  const [queueLevel, setQueueLevel] = useState<string | null>(null);

  const submitReport = () => {
    axios.post('http://your-api-url/api/queueReports', {
      scheduleID: 1, // Replace with actual selected schedule
      queueLevel,
    }).then(() => alert('Queue reported!'));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Report Queue Length</Text>
      {['Short', 'Medium', 'Long'].map((level) => (
        <Button key={level} title={level} onPress={() => setQueueLevel(level)} />
      ))}
      <Button title="Submit" onPress={submitReport} disabled={!queueLevel} />
    </View>
  );
}