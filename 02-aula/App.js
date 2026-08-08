import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Aula 2 - Componentes!</Text>
      <StatusBar style="auto" />

      <Image
        style={styles.logo}
        source={require('./assets/favicon.png')}
      />

      <TextInput
        style={styles.input}
        value=''
        placeholder="placeholder"
      />

      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '100',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: 64,
    height: 64,
  },
  button: {
    backgroundColor: '#b6a0a0',
    paddingHorizontal: '22',
    paddingVertical: '14',
  }
});
