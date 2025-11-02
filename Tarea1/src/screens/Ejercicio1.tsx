import { useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function CustomInput(){
    const [ usuario, setUsuario ] = useState({Nombre: '', edad: 0});
return(
<View style={styles.general}>
    <Text style={styles.text} >Ingresa tu Nombre:</Text>    
    <TextInput style={styles.input}
        placeholder="Escribe tu nombre aqui"  
        value={usuario.Nombre}
        onChangeText={
            (text)=>setUsuario({...usuario, Nombre: text})}
        
    />
        <Text>Ingresa tu edad:</Text>    
    <TextInput style={styles.input}
        placeholder="Escribe tu edad aqui"  
        value={usuario.edad.toString()}
        onChangeText={
            (text)=>{
            if(text==='') return;
            const num = parseInt(text) || 0;    
                setUsuario({...usuario, edad: num})
            }}
        
    />
    
    <Text>
        Tu nombre es {usuario.Nombre} y tienes {usuario.edad} años!
    </Text>
    </View>

)
    
}

const styles = StyleSheet.create(
    {
        general:{
        margin: 30,
        backgroundColor: "#eaeaeaff"
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