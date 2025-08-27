import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
}