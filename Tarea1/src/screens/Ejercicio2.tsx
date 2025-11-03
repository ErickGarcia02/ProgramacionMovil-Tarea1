import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function CustomInput(){
    const [ contador, setContador ] = useState(0);
    const [triggerMod, setTriggerMod] = useState(false);
    const conteo=contador.valueOf();
    const onPress = () => {setContador(contador+1)
    }
    useEffect(()=>{
      if(conteo%5==0 && conteo>0){
        setTriggerMod(true);
      }else{
        console.log("vas por el numero: ", conteo);
        setTriggerMod(false);
      }
    },[contador]);
    
return(
<View style={styles.general}>
    <Text>contador: {contador}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text>Presioname para aumentar el contador! :D</Text> 
    </TouchableOpacity>
    {triggerMod && <Text>Ha alcanzado un múltiplo de 5</Text>}
    </View>

)
    
}

const styles = StyleSheet.create(
    {
        general:{
        margin: 30,
        justifyContent: 'center',
        textAlign:"center",
        backgroundColor: "#eaeaeaff",
        flex: 1
        }, 
        text:{
        color: "red"    
        }, 
        input:{
            borderColor: "#000000ff", 
            borderRadius: 50,
            borderWidth: 1,
            textAlign: 'center',
            margin: 10
        }
    }
)