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
<View style={styles.container}>
    <Text style={styles.contador}>contador: {contador}</Text>
    <TouchableOpacity onPress={onPress} style={styles.botoncito}> 
      <Text style={styles.textfinal}>Presioname para aumentar el contador! :D</Text> 
    </TouchableOpacity>
    {triggerMod && <Text style={styles.multiplo}>Ha alcanzado un múltiplo de 5</Text>}
    </View>

)
    
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
    contador:{
    color: "#031b2fff",
    fontSize:30,
    justifyContent: 'center'
    }, 
    textfinal:{
    color: '#f5f9fbff',
    fontSize:17,
    justifyContent: 'center',
    paddingTop:5
    },
    botoncito:{
    backgroundColor: '#031b2fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    height: 60,
    },
    multiplo:{
    color: '#031b2fff',
    fontSize:22,
    justifyContent: 'center',
    paddingTop:5,
    fontWeight:'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed'
    }
    }
)