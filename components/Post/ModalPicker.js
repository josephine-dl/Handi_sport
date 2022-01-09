import React from 'react'
import{StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'

const OPTIONS = ['Lundi', 'Mardi','Mercredi', 'Jeudi', 'Vendredi','Samedi','Dimanche'];

const WIDTH =Dimensions.get('window').widht;
const HEIGHT = Dimensions.get('window').height
const ModalPicker = (props) =>{

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setDate(option);

    }
    
    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity style={styles.option} key={index} onPress={()=> onPressItem(item)}>
                <Text style={styles.text}>
                 {item}
                </Text>
            </TouchableOpacity>
                
        )
    })
    return(
        <TouchableOpacity style={styles.container} onPress={()=> props.changeModalVisibility(false)}>
            <View style={[styles.modal,{widht:WIDTH-20, height: HEIGHT/2}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        backgroundColor :'white',
        borderRadius:10,
    },
    option:{
        alignItems: 'flex-start'
    },
    text:{
        margin:20,
        fontSize:15,
        fontWeight :'bold',

    }

})


export {ModalPicker}