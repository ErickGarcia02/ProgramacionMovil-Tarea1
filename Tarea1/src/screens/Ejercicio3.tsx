import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { View, Text } from "react-native";

export default function Ejercicio3(){

    const [horaActual, setHoraActual] = useState(new Date());
    useEffect(()=>{
     const timer = setInterval(() => {
      setHoraActual(new Date())
     }, 1000);
     return ()=> clearInterval(timer);
    },[]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{horaActual.getHours().toString().padStart(2,"0")}:{horaActual.getMinutes().toString().padStart(2,"0")}:{horaActual.getSeconds().toString().padStart(2,"0")}</Text>
    </View>
  );
}