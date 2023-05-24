import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight, ScrollView } from "react-native";

export default function Login() {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={loginStyle.container}>
                <View style={loginStyle.formContainer}>
                    <TextInput
                        style={loginStyle.input}
                        placeholder="Username / Email Address"
                    />
                    <TextInput
                        style={loginStyle.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={loginStyle.buttonContainer}>
                    <TouchableHighlight>
                        <Button title="Confirm"/>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    );
}

const loginStyle = StyleSheet.create({
    container: {
        height: 600,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(208, 196, 185, 0.22)',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    formContainer: {
        height: 350,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 90,
        backgroundColor: 'rgba(211, 200, 185, 1)',
        borderRadius: 15
    },
    input: {
        height: 50,
        width: 250,
        borderWidth: 1,
        paddingVertical: 0,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 13
    },
    buttonContainer: {
        top: 105,
        flexDirection: 'row'
    }
});