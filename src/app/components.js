import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Components() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Componentes" }} />

      <Text style={styles.text}>Aula 2 - Componentes!</Text>
      <StatusBar style="auto" />

      <Image
        style={styles.logo}
        source={require('../../assets/favicon.png')}
      />

      <TextInput
        style={styles.input}
        value=''
        placeholder="placeholder"
      />

      <Switch
        trackColor={{ false: '#d5d5d2', true: '#9bb58b' }}
        thumbColor={isEnabled ? '#ffffff' : '#f7f7f5'}
        ios_backgroundColor="#c9d6c3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '100',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#d5d5d2',
    backgroundColor: '#ffffff',
    padding: 10,
    color: '#1f1f1f',
  },
  logo: {
    width: 64,
    height: 64,
  },
  button: {
    backgroundColor: '#6b8e4e',
    paddingHorizontal: '22',
    paddingVertical: '14',
  }
});
