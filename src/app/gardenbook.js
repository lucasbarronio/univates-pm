import { Stack } from "expo-router";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("garden.db");

// db.execSync(`DROP TABLE flor`);

db.execSync(`
  CREATE TABLE IF NOT EXISTS flor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    cor VARCHAR(100) NOT NULL,
    especie VARCHAR(255) NOT NULL
  );
`);

function selectFromDB() {
  return db.getAllSync("SELECT * FROM flor ORDER BY id DESC");
}

function insertIntoDB(name, color, species) {
  db.runSync("INSERT INTO flor (nome, cor, especie) VALUES (?, ?, ?)", [name, color, species]);
}

function updateFromDB(name, color, species, id) {
  db.runSync("UPDATE flor SET nome = ?, cor = ?, especie = ? WHERE id = ?", [name, color, species, id]);
}

function deleteFromDB(id) {
  db.runSync("DELETE FROM flor WHERE id = (?)", [id]);
}

export default function GardenBook() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [species, setSpecies] = useState("");
  const [currentId, setCurrentId] = useState(0); 
  const [list, setList] = useState([]);

  function refreshList() {
    setList(selectFromDB());
  }

  function cleanInputs() {
    setName("");
    setColor("");
    setSpecies("");
  }

  function saveItemToList() {
    if (currentId === 0) {
      insertIntoDB(name, color, species);
    } else {
      updateFromDB(name, color, species, currentId);
      setCurrentId(0);
    }
    cleanInputs();
    refreshList();
  }

  function loadItemToEdit(item) {
    setCurrentId(item.id);
    setName(item.nome);
    setColor(item.cor);
    setSpecies(item.especie);
  }

  function removeItemFromList(id) {
    deleteFromDB(id);
    cleanInputs();
    refreshList();
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "GardenBook" }} />

      <View style={styles.header}>
        <Text style={styles.title}>Flores</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.field}
          value={name}
          onChangeText={setName}
          placeholder="Nome..."
          placeholderTextColor="#7b827a"
          autoFocus={true}
        />

        <TextInput
          style={styles.field}
          value={color}
          onChangeText={setColor}
          placeholder="Cor..."
          placeholderTextColor="#7b827a"
        />

        <TextInput
          style={styles.field}
          value={species}
          onChangeText={setSpecies}
          placeholder="Espécie..."
          placeholderTextColor="#7b827a"
        />
      </View>

      <View style={styles["button-wrapper"]}>
        <Button title="Publicar" onPress={saveItemToList} color="#538532" />
      </View>

      <FlatList style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <View style={styles['item']}>
            <View style={styles['item-content']}>
              <Text style={styles["item-text"]}>{item.nome}</Text>
              <Text style={styles["item-subtext"]}>{item.cor}</Text>
              <Text style={styles["item-subtext"]}>{item.especie}</Text>
            </View>
            <View style={styles.circle}>
              <Button title="E" onPress={() => { loadItemToEdit(item) }} color="#5f6d5d" />
            </View>
            <View style={styles.circle}>
              <Button title="X" onPress={() => { removeItemFromList(item.id) }} color="#853A32" />
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
    marginTop: 10,
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
    gap: 10
  },
  'item-content': {
    alignItems: 'center',
    flexDirection: "row",
    flex: 1,
    gap: 20,
  },
  'item-text': {
    color: "#1f1f1f",
    fontSize: 16,
  },
  'item-subtext': {
    color: "#68756b",
    fontSize: 12,
  },
  'circle': {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: "hidden",
  },
});