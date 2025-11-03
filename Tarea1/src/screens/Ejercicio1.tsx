import { useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function CustomInput(){
    const [ usuario, setUsuario ] = useState({Nombre: '', edad: 0});
return(
<View style={styles.container}>
    <Text style={styles.text} >Ingresa tu Nombre:</Text>    
    <TextInput style={styles.inputnombre}
        placeholder="Escribe tu nombre aqui"  
        value={usuario.Nombre}
        onChangeText={
            (text)=>setUsuario({...usuario, Nombre: text})}
        
    />
        <Text style={styles.text}>Ingresa tu edad:</Text>    
    <TextInput style={styles.inputedad}
        placeholder="Escribe tu edad aqui"  
        value={usuario.edad.toString()}
        onChangeText={
            (text)=>{
            if(text==='') return;
            const num = parseInt(text) || 0;    
                setUsuario({...usuario, edad: num})
            }}
        
    />
    
    <Text style={styles.textfinal}>
        Tu nombre es {usuario.Nombre} y tienes {usuario.edad} años!
    </Text>
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
    text:{
    color: "#031b2fff",
    fontSize:30,
    justifyContent: 'center'
    }, 
    textfinal:{
    color: "#031b2fff",
    fontSize:25,
    fontWeight: 'bold',
    textDecorationLine:'underline',
    flexWrap: 'nowrap',
    marginTop:20
    },    
    inputnombre:{
    borderColor: "#000000ff", 
    borderRadius: 50,
    borderWidth: 2,
    textAlign: 'center',
    margin: 10,
    width:250,
    fontSize: 20,
    backgroundColor: '#f5f9fbff'
    },
    inputedad:{
    borderColor: "#000000ff", 
    borderRadius: 50,
    borderWidth: 2,
    textAlign: 'center',
    margin: 10,
    width:100,
    fontSize: 20,
    backgroundColor: '#f5f9fbff'        
    }
    }
)