import Ejercicio1 from "../screens/Ejercicio1";
import Ejercicio2 from "../screens/Ejercicio2";
import Ejercicio3 from "../screens/Ejercicio3";
import Ejercicio4 from "../screens/Ejercicio4";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type RootStackParamList = {
    HomeScreen: undefined;  
    Ejercicio1: undefined;
    Ejercicio2: undefined; 
    Ejercicio3: undefined;  
    Ejercicio4: undefined;            
};

const stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigator(){

    return(

<stack.Navigator initialRouteName = 'HomeScreen' screenOptions={{headerShown: false}}>
        <stack.Screen name="HomeScreen" component={HomeScreen}/>  
        <stack.Screen name="Ejercicio1" component={Ejercicio1}/>    
        <stack.Screen name="Ejercicio2" component={Ejercicio2}/>    
        <stack.Screen name="Ejercicio3" component={Ejercicio3}/>    
        <stack.Screen name="Ejercicio4" component={Ejercicio4}/>                            
</stack.Navigator>
    );
}