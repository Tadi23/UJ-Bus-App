import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function RateRide() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitRating = () => {
    axios.post('http://your-api-url/api/ratings', {
      scheduleID: 1,
      rating,
      comment
    }).then(() => alert('Thanks for your rating!'));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Rate Your Ride</Text>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            title={rating >= star ? '★' : '☆'}
            onPress={() => setRating(star)}
          />
        ))}
      </View>
      <TextInput
        placeholder="Add a comment..."
        value={comment}
        onChangeText={setComment}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={submitRating} />
    </View>
  );
}