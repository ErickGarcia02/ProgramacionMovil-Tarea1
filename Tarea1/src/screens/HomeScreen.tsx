import React from 'react';
import { View, Text, Button } from 'react-native';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenido al HomeScreen</Text>

      <Button
        title="Ir a Ejercicio 1"
        onPress={() => navigation.navigate('Ejercicio1')}
      />
      <Button
        title="Ir a Ejercicio 2"
        onPress={() => navigation.navigate('Ejercicio2')}
      />
      <Button
        title="Ir a Ejercicio 3"
        onPress={() => navigation.navigate('Ejercicio3')}
      />
      <Button
        title="Ir a Ejercicio 4"
        onPress={() => navigation.navigate('Ejercicio4')}
      />
    </View>
  );
}
