import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FirstClass() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Introdução" }} />

      <Text>Aula 1!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
