import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

export default function Landing({ navigation }) {
    const toRegister = () => {
        navigation.navigate('Registration')
    }
    const toLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <>
            <View style={landingStyles.container}>
                <View style={landingStyles.buttonContainer}>
                    <TouchableOpacity style={{
                        right: 10,
                    }} onPress={toRegister}>
                        <Text style={{color: 'white'}}>REGISTRATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toLogin}>
                        <Text style={{color: 'white'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <Image
                        style={{
                                width: '100%',
                                height: '50%',
                            }}
                        source={require('../assets/landing.jpeg')}
                    />
                </View>
            </View>
        </>
    );
}

const landingStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(208, 196, 185, 0.22)',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        height: 50,
        backgroundColor: 'rgba(131, 158, 195, 1)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },
});