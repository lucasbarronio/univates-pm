import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, paddingVertical: '12%', paddingHorizontal: '6%', gap: 20}}>
      <View style={styles['header-section']}>
        <Image
          style={styles.favicon}
          source={require('./assets/favicon.png')}
        />

        <View style={styles['header-section__content']}>
          <Text style={[styles['h1-txt'], styles['txt-dark']]}>Olá, Estudante</Text>
          <Text style={[styles['sub-txt'], styles['txt-lgray']]}>Sua trilha do dia</Text>
        </View>

        <View style={styles['circle']}></View>
      </View>

      <Text style={[styles['txt-dark'], styles['section-txt']]}>Menu</Text>

      <View style={styles['menu-section']}>
        <TouchableOpacity style={styles['bg-green']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>PLAYLISTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles['bg-blue']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>ARTISTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles['bg-orange']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>RÁDIO</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles['txt-dark'], styles['section-txt']]}>Tocadas Recentemente</Text>

      <ScrollView style={styles['music-section']}>
        <View style={[styles['music-card'], styles['music-card__important']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Thunderstruck
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              AC/DC - tocando agora
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            4:52
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Chop Suey!
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              System of a Down
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            3:30
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Back in Black
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              AC/DC
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            4:15
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Toxicity
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              System of a Down
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            3:39
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Highway to Hell
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              AC/DC
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            3:28
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Aerials
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              System of a Down
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            3:55
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Hells Bells
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              AC/DC
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            5:12
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              B.Y.O.B.
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              System of a Down
            </Text>
          </View>

          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            4:15
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              You Shook Me All Night Long
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              AC/DC
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            3:30
          </Text>
        </View>
        <View style={[styles['music-card'], styles['music-card__base']]}>
          <View>
            <Text style={[styles['txt-dark'], { fontSize: 16 }]}>
              Lonely Day
            </Text>
            <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
              System of a Down
            </Text>
          </View>
          <Text style={[styles['txt-lgray'], { fontSize: 14 }]}>
            2:47
          </Text>
        </View>
      </ScrollView>

      <View style={styles['cta-section']}>
        <Text style={[styles['txt-dark'], styles['cta-txt']]}>Assine o Premium e ouça sem anúncios!</Text>
        <TouchableOpacity style={[styles['bg-green'], { paddingHorizontal: 20 }]}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>ASSINAR AGORA</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  'h1-txt': {
    fontSize: 26,
    fontWeight: 'bold'
  },
  'cta-txt': {
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign: 'center',
  },
  'sub-txt': {
    fontSize: 14
  },
  'body-txt': {
    fontSize: 16
  },
  'section-txt': {
    fontSize: 20,
    fontWeight: 600
  },
  'txt-white': {
    color: '#FFF'
  },
  'txt-lgray': {
    color: '#A3A3A3'
  },
  'txt-dark': {
    color: '#292929'
  },
  'txt-black': {
    color: '#000'
  },
  'music-card': {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
  },
  'music-card__base': {
    backgroundColor: '#f1f3f6',
    borderColor: '#f1f3f6',
  },
  'music-card__important': {
    backgroundColor: '#d6f4e3',
    borderColor: '#9ce0bc'
  },
  'music-section': {
    flex: 1
  },
  'menu-item': {
    width: 110,
    paddingVertical: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  'menu-section': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  'bg-blue': {
    backgroundColor: '#0255de'
  },
  'bg-green': {
    backgroundColor: '#00a13f'
  },
  'bg-orange': {
    backgroundColor: '#d33200'
  },
  'header-section': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  'header-section__content': {
    flex: 1,
    paddingLeft: '5%'
  },
  'cta-section': {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#ffffff',
    borderColor: '#f0f1f3',
    borderRadius: 10,
    borderWidth: 1
  },
  'cta-button': {
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  'favicon': {
    width: 48,
    height: 48,
  },
  'circle': {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#666d72',
  }
});