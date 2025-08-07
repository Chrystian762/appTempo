import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../componentes/Tempo';
import Api from '../componentes/Api';

export default function Itanhaem(){

    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('weather?array_limit=8&fields=only_results,temp,city_name,forecast,condition,max,min,description,date,moon_phase&key=96199229&city_name=Itanhaem,SP');
        setDados(response.data.forecast);
    }

    useEffect(
        ()=>{
            buscaTempo()
        },[]);

    return(
            <View  style={styles.bloco}>
                <Text  style={styles.Texto}>Previsão do Tempo para Itanhaém</Text>
                <FlatList 
                    data={dados}
                    keyExtractor={(item)=>item.date}
                    renderItem={({item})=><Tempo date={item.date} max={item.max} min={item.min} description={item.description} condition={item.condition} lua={item.moon_phase} />}
                   
                />
            </View>
    );
}


const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        marginTop:30,
        marginLeft:30
    },
    Texto:{
    fontSize:20,
     fontWeight:'bold',
     paddingBottom:10

    },
  

});