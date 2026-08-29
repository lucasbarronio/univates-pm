import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
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
    <View style={{ flex: 1, paddingVertical: '12%', paddingHorizontal: '6%', gap: 20}}>
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
     

    </View>
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
    color: '#0b0c1b'
  },
  'txt-gray': {
    color: '#90959f'
  },
  'txt-blue': {
    color: '#1e3a8a'
  },
  'txt-warning': {
    color: '#9b2e24'
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
    backgroundColor: '#dceafb',
    borderColor: '#93c5fd',
    borderRadius: 10,
    borderWidth: 1,
    gap: 10
  },
  'followup-section': {
    justifyContent: 'space-between',
  },
  'followup-card': {
    backgroundColor: '#f1f3f6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    rowGap: 4,
  },
  'warning-section': {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fdeab7',
    borderColor: '#fed11c',
    borderRadius: 10,
    borderWidth: 1,
  },
  'cta-section': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  'cta-button': {
    backgroundColor: '#2354d6',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center'
  },
  'icon': {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#93c5fd',
  }
});