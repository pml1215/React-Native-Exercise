import { StyleSheet, Text, View } from 'react-native';

export default function Output({info}) {

    return (
        <View>
            {info.map(i => (
                <View key={i.id}>
                    <Text style={styles.textInput} >{i.name}: {i.value}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        paddingTop: 10
    }
});