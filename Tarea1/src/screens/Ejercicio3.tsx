import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function Ejercicio3(){

    const [horaActual, setHoraActual] = useState(new Date());
    useEffect(()=>{
     const timer = setInterval(() => {
      setHoraActual(new Date())
     }, 1000);
     return ()=> clearInterval(timer);
    },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.hora}>{horaActual.getHours().toString().padStart(2,"0")}:{horaActual.getMinutes().toString().padStart(2,"0")}:{horaActual.getSeconds().toString().padStart(2,"0")}</Text>
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
    hora:{
      fontSize:50,
      color:'#031b2fff'
    }
    }
)