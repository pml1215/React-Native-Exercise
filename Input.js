import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({ info, handleChange }) {

    const keyboard = (name) => {
        if (name.toLowerCase() === "phone") {
            return "numeric";
        } else {
            return "default";
        }
    };

    return (
        <View>
            {info.map(i => (
                <View key={i.id}>
                    <Text style={styles.textInput}>{i.name}:</Text>
                    <TextInput style={styles.inputBox} onChangeText={(word) => { handleChange(i, word) }} value={i.value} keyboardType={keyboard(i.name)} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        paddingTop: 10
    },
    inputBox: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    }
});