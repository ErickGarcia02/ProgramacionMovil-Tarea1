import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Ejercicio4(){

    const [cargando,setCargando] = useState(true);

    useEffect(()=>{
      setTimeout(()=>setCargando(false),3000)
    },[]
    );

  return (

    <View style={styles.container}>
        {cargando ? (
          <View>
            <ActivityIndicator size={'large'}/>
            <Text style={styles.texto}>Cargando...</Text>
          </View>
        ) : (
          <Text style={styles.texto}>Bienvenido a la aplicación</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create(
    {
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#e6f1fc"
    },
    texto:{
      fontSize:30,
      color:'#031b2fff'
    }
    }
)