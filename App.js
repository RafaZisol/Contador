import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={decrementCount}>
          <Text style={styles.textBoton}>-</Text>
        </TouchableOpacity>
        <View style={styles.count}>
          <Text style={styles.textBoton}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={incrementCount}>
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textBoton: {
    fontSize: 24,
  },
  count: {
    width: 50,
    height: 50,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
