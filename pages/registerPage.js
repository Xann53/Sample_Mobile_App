import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight, ScrollView } from "react-native";

export default function Registration() {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={regisStyles.container}>
                <View style={regisStyles.formContainer}>
                    <TextInput
                        style={regisStyles.input}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={regisStyles.input}
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={regisStyles.input}
                        placeholder="Username"
                    />
                    <TextInput
                        style={regisStyles.input}
                        placeholder="Email Address"
                    />
                    <TextInput
                        style={regisStyles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={regisStyles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={regisStyles.buttonContainer}>
                    <TouchableHighlight>
                        <Button title="Confirm"/>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    );
}

const regisStyles = StyleSheet.create({
    container: {
        height: 550,
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
        height: 40,
        width: 250,
        borderWidth: 1,
        paddingVertical: 0,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 5
    },
    buttonContainer: {
        top: 105,
        flexDirection: 'row'
    }
});