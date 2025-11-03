import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios tarea 1
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ejercicio1')}
      >
        <Text style={styles.buttonText}>Ejercicio 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ejercicio2')}
      >
        <Text style={styles.buttonText}>Ejercicio 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ejercicio3')}
      >
        <Text style={styles.buttonText}>Ejercicio 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ejercicio4')}
      >
        <Text style={styles.buttonText}>Ejercicio 4</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#e6f1fc"
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#031b2fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },  
});
