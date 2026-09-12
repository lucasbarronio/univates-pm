import { Stack } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Weather() {
  const DATA = [
    {
      id: '1',
      day: 'Qua',
      temp: '22º'
    },
    {
      id: '2',
      day: 'Qui',
      temp: '19º'
    },
    {
      id: '3',
      day: 'Sex',
      temp: '17º'
    },
    {
      id: '4',
      day: 'Sáb',
      temp: '21º'
    },
    {
      id: '5',
      day: 'Dom',
      temp: '25º'
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: '6%', gap: 20, backgroundColor: '#f5f5f3'}}>
      <Stack.Screen options={{ title: "Weather App" }} />

      <View style={styles['header-section']}>
        <Text style={[styles['h1-txt'], styles['txt-dark']]}>Lajeado, RS</Text>
        <Text style={styles['txt-gray']}>Ter 28/08</Text>
      </View>

      <View style={styles['today-section']}>
        <Text style={[styles['temperature-txt'], styles['txt-blue']]}>18º</Text>
        <Text style={styles['txt-blue']}>Parcialmente Nublado</Text>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Text style={styles['txt-blue']}>Máx 24º</Text>
          <Text style={styles['txt-blue']}>Mín 13º</Text>
        </View>
      </View>

      <Text style={styles['txt-dark']}>Próximos dias</Text>

      <View style={styles['followup-section']}>
        <FlatList
          contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}
          horizontal
          data={DATA}
          renderItem={({item}) => (
            <View style={styles['followup-card']}>
              <Text>{item.day}</Text>
              <View style={styles['icon']}></View>
              <Text>{item.temp}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles['warning-section']}>
        <Text style={[styles['warning-title-txt'], styles['txt-warning']]}>Alerta</Text>
        <Text style={[styles['bold-txt'], styles['txt-warning']]}>Possibilidade de chuva forte após as 18h.</Text>
      </View>

      <View style={styles['cta-section']}>
        <TouchableOpacity style={styles['cta-button']}>
          <Text style={[styles['cta-txt'], styles['txt-white']]}>VER SEMANA COMPLETA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'h1-txt': {
    fontSize: 22,
    fontWeight: 600
  },
  'temperature-txt': {
    fontSize: 92,
    fontWeight: 800
  },
  'warning-title-txt': {
    fontSize: 16,
    fontWeight: 700
  },
  'bold-txt': {
    fontWeight: 700
  },
  'cta-txt': {
    fontWeight: 600
  },
  'txt-dark': {
    color: '#1f1f1f'
  },
  'txt-gray': {
    color: '#68756b'
  },
  'txt-blue': {
    color: '#314a3a'
  },
  'txt-warning': {
    color: '#3d4738'
  },
  'txt-white': {
    color: '#ffffff'
  },  
  'header-section': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  'today-section': {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f3ef',
    borderColor: '#dfe6d8',
    borderRadius: 10,
    borderWidth: 1,
    gap: 10
  },
  'followup-section': {
    justifyContent: 'space-between',
  },
  'followup-card': {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    rowGap: 4,
    borderWidth: 1,
    borderColor: '#e1e4df',
  },
  'warning-section': {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f3efe5',
    borderColor: '#d9d0bd',
    borderRadius: 10,
    borderWidth: 1,
  },
  'cta-section': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  'cta-button': {
    backgroundColor: '#6b8e4e',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center'
  },
  'icon': {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#dfe7d5',
  }
});