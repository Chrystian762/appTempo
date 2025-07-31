import {useNavigation,} from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


export default function Home(){


  const navigation = useNavigation();



    return(


            <View style={styles.bloco}>
                <Text style={styles.Texto}>Previsão do Tempo </Text>

                <TouchableOpacity onPress={()=>navigation.navigate('Itanhaem' as never)}     style={styles.btn}>

                    <Text style={styles.textoBtn}>Itanhaém</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>navigation.navigate('' as never)}     style={styles.btn}>

                    <Text style={styles.textoBtn}>Mongaguá</Text>
                </TouchableOpacity>




                <TouchableOpacity onPress={()=>navigation.navigate('' as never)}     style={styles.btn}>

                    <Text style={styles.textoBtn}>Peruíbe</Text>
                </TouchableOpacity>
            </View>
    );
}




const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Texto:{
        fontSize:30
    },
    textoBtn:{
        color:'white',
        textAlign:'center',
        fontSize:20
    },
    btn:{
    backgroundColor: '#0B84E0',
    width:'80%',
    padding: 10,
    marginBottom:20,
    marginTop:20,
    borderRadius: 30

}

});