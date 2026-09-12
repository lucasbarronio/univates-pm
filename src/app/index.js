import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles["app"]}>
      <Stack.Screen options={{ title: "Painel" }} />

      <ScrollView>
        <View style={styles["header"]}>
          <View style={styles["avatar"]} />
          <View>
            <Text style={styles["greetings"]}>Olá, Estudante</Text>
            <Text style={styles["subtitle"]}>Bem-vindo de volta</Text>
          </View>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Primeira aula</Text>
            <Text style={styles["card-description"]}>31/07</Text>
          </View>
          <Link href="/first-class" style={styles["card-link"]}>
            Aula 1 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Componentes</Text>
            <Text style={styles["card-description"]}>07/08</Text>
          </View>
          <Link href="/components" style={styles["card-link"]}>
            Aula 2 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Estilização</Text>
            <Text style={styles["card-description"]}>14/08</Text>
          </View>
          <Link href="/styling" style={styles["card-link"]}>
            Aula 3 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Desenhando</Text>
            <Text style={styles["card-description"]}>21/08</Text>
          </View>
          <Link href="/drawing" style={styles["card-link"]}>
            Aula 4 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Player de música</Text>
            <Text style={styles["card-description"]}>28/08</Text>
          </View>
          <Link href="/music-player" style={styles["card-link"]}>
            Aula 5.1 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Clima</Text>
            <Text style={styles["card-description"]}>28/08</Text>
          </View>
          <Link href="/weather" style={styles["card-link"]}>
            Aula 5.2 →
          </Link>
        </View>
        <View style={styles["card"]}>
          <View style={styles["card-header"]}>
            <Text style={styles["card-title"]}>Primeira avaliação</Text>
            <Text style={styles["card-description"]}>04/09</Text>
          </View>
          <Link href="/first-exam" style={styles["card-link"]}>
            Aula 6 →
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f3f2ee",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#dfe7d5",
  },

  greetings: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f1f1f",
  },

  subtitle: {
    fontSize: 14,
    color: "#5e665a",
    marginTop: 2,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
    borderWidth: 1,
    borderColor: "#e6e3dd",
  },

  'card-header': {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  'card-title': {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f1f1f",
    flexShrink: 1,
  },

  'card-description': {
    fontSize: 14,
    color: "#5f6d5d",
    textAlign: "right",
  },

  'card-link': {
    fontSize: 15,
    fontWeight: "600",
    color: "#538532",
    marginTop: 4,
  },
});