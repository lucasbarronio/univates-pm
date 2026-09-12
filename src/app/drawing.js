import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Drawing() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Desenhando" }} />

      <StatusBar style="light" />

      <View style={styles.topo}>
        <View style={styles.foto} />
        <View style={styles.botao}>
          <Text style={styles.texto}>Tudo</Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.texto}>Música</Text>
        </View>
        <View style={styles.botao}>
          <Text style={styles.texto}>Podcasts</Text>
        </View>
      </View>

      <View style={styles.playlists}>
        <View style={styles.linha}>
          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 1</Text>
          </View>

          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 2</Text>
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 3</Text>
          </View>

          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 4</Text>
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 5</Text>
          </View>

          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 6</Text>
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 7</Text>
          </View>

          <View style={styles.playlist}>
            <View style={styles.fotoPequena} />
            <Text style={styles.texto}>Playlist 8</Text>
          </View>
        </View>
      </View>

      <View style={styles.secao}>
        <View style={styles.entre}>
          <View>
            <Text style={styles.titulo}>Talvez você goste</Text>
            <Text style={styles.texto}>Recomendação patrocinada</Text>
          </View>

          <View style={styles.icone} />
        </View>

        <View style={styles.card}>
          <View style={styles.fotoGrande} />

          <View style={styles.info}>
            <View>
              <Text style={styles.titulo}>Nome da música</Text>
              <Text style={styles.texto}>Single - Artista</Text>
              <Text style={styles.texto}>Álbum</Text>
            </View>

            <View style={styles.entre}>
              <View style={styles.icone} />
              <View style={styles.icone} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.titulo}>Estações recomendadas</Text>

        <View style={styles.linha}>
          <View style={styles.estacao}>
            <View style={styles.fotoEstacao} />
            <Text style={styles.texto}>Estação 1</Text>
          </View>

          <View style={styles.estacao}>
            <View style={styles.fotoEstacao} />
            <Text style={styles.texto}>Estação 2</Text>
          </View>
        </View>
      </View>

      <View style={styles.player}>
        <View style={styles.fotoPequena} />

        <View style={styles.info}>
          <Text style={styles.texto}>Nome da música</Text>
          <Text style={styles.texto}>Artista</Text>
        </View>

        <View style={styles.icone} />
        <View style={styles.icone} />
        <View style={styles.icone} />
      </View>

      <View style={styles.menu}>
        <View style={styles.icone} />
        <View style={styles.icone} />
        <View style={styles.icone} />
        <View style={styles.icone} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ee',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  entre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  playlists: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
  },

  playlist: {
    width: '46%',
    height: 45,
    backgroundColor: '#f8f8f6',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#e1e4df',
  },

  secao: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
    gap: 8,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
    borderWidth: 1,
    borderColor: '#e1e4df',
  },

  player: {
    height: 55,
    backgroundColor: '#eef3ea',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    borderTopWidth: 1,
    borderTopColor: '#dfe7d5',
  },

  menu: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f6',
  },

  info: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 8,
  },

  estacao: {
    width: '46%',
    alignItems: 'stretch',
  },

  foto: {
    width: 40,
    height: 40,
    backgroundColor: '#dfe7d5',
  },

  fotoPequena: {
    width: 40,
    height: 40,
    backgroundColor: '#dfe7d5',
  },

  fotoGrande: {
    width: 110,
    height: 120,
    backgroundColor: '#dfe7d5',
  },

  fotoEstacao: {
    height: 100,
    backgroundColor: '#dfe7d5',
  },

  icone: {
    width: 25,
    height: 25,
    backgroundColor: '#dfe7d5',
  },

  botao: {
    backgroundColor: '#6b8e4e',
    padding: 8,
  },

  titulo: {
    color: '#1f1f1f',
    fontWeight: 'bold',
    fontSize: 16,
  },

  texto: {
    color: '#1f1f1f',
    fontSize: 11,
  },
});