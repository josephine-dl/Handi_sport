import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBloc: {
        fontSize: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
    },
    blocSalon:{
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        padding: 3,
        marginBottom: 10,
    },

    titleSalon: {
        padding: 2,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 2,
        color: 'red'
    },
    description: {
        padding: 2,
        fontSize: 16,
        justifyContent: 'space-evenly',
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'
    }
})
export default styles