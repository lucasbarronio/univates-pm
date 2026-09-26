import { Stack } from "expo-router";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("bordel.db");

// db.execSync(`DROP TABLE bordel`);

db.execSync(`
  CREATE TABLE IF NOT EXISTS bordel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    cor VARCHAR(100) NOT NULL
  );
`);

function selectFromDB() {
  return db.getAllSync("SELECT * FROM bordel ORDER BY id DESC");
}

function insertIntoDB(name, color) {
  db.runSync("INSERT INTO bordel (nome, cor) VALUES (?, ?)", [name, color]);
}

function deleteFromDB(id) {
  db.runSync("DELETE FROM bordel WHERE id = (?)", [id]);
}

export default function DBList() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  function refreshList() {
    setList(selectFromDB());
  }

  function saveItemToList() {
    insertIntoDB(name, color);
    setName("");
    setColor("");
    refreshList();
  }

  function removeItemFromList(id) {
    deleteFromDB(id);
    refreshList();
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Lista com SQLite" }} />

      <View style={styles.header}>
        <Text style={styles.title}>Bordéis</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.field}
          value={name}
          onChangeText={setName}
          placeholder="Nome..."
          placeholderTextColor="#7b827a"
        />

        <TextInput
          style={styles.field}
          value={color}
          onChangeText={setColor}
          placeholder="Cor..."
          placeholderTextColor="#7b827a"
        />

        <View style={styles["button-wrapper"]}>
          <Button title="Adicionar" onPress={saveItemToList} color="#538532" />
        </View>
      </View>

      <FlatList style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <View style={styles['item']}>
            <Text style={styles["item-text"]}>{item.nome}</Text>
            <Text style={styles["item-subtext"]}>{item.cor}</Text>
            <View style={styles.circle}>
              <Button title="x" onPress={() => { removeItemFromList(item.id) }} color="#853A32" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'debug': {
    borderColor: '#fe0000',
    borderWidth: 2,
  },
  'container': {
    backgroundColor: "#f5f4f1",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  'header': {
    marginBottom: 20,
  },
  'title': {
    color: "#1f1f1f",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 4,
  },
  'subtitle': {
    color: "#68756b",
    fontSize: 14,
  },
  'form': {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  'field': {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe3dc",
    borderRadius: 10,
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#1f1f1f",
  },
  'button-wrapper': {
    backgroundColor: "#6b8e4e",
    borderRadius: 10,
    overflow: "hidden",
  },
  'list': {
    flex: 1,
    marginTop: 24,
  },
  'item': {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#e1e4df",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 10,
    minHeight: 64,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  'item-text': {
    color: "#1f1f1f",
    fontSize: 15,
    paddingHorizontal: 20
  },
  'item-subtext': {
    color: "#68756b",
    fontSize: 12,
    flex: 1
  },
  'circle': {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: "hidden",
  },
});