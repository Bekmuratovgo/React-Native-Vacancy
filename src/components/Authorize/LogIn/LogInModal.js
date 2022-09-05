import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getName } from "../../../store/DataAction";

const LogInModal = () => {
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    // const dispatch = useDispatch();
    // const navigate = useNavigate()

    const handleClick = () => {
        // if (login && password) {
        //     localStorage.setItem('name', JSON.stringify(login));
        //     getName(navigate)(dispatch);
        // }
    }

    return (
        <View style={styles.login}>
            <View style={styles.login__wrapper}>
                <Text style={styles.login_h3}>Authorize</Text>
                <View style={styles.login__wrapper_login}>
                    <Text style={styles.login__wrapper_login_h5}>login</Text>
                    <TextInput
                        style={styles.login__wrapper_login_input} 
                        onChange={(e) => setLogin(e.target.value)} 
                        type="text" 
                    />
                </View>
                <View style={styles.login__wrapper_pass}>
                    <Text style={styles.login__wrapper_pass_h5}>password</Text>
                    <TextInput 
                        style={styles.login}
                        onChange={(e) => setPassword(e.target.value)} 
                        type="text" 
                    />
                </View>
                <Button
                    style={styles.btnSubmit}
                    // className={`btnSubmit ${(!password.split(' ').join('') ?? !login.split(' ').join('')) 
                    //     ? 'disabled' : null}`}
                    // disabled={(!password.split(' ').join('') ?? !login.split(' ').join(''))
                    //     ? true : false
                    // }
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </View>
        </View>
    )
}
export default LogInModal

const styles = StyleSheet.create({ 
    login: {
        height: '100vh',
        width: '100%',
        flexDirection: 'initial',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    login__wrapper: {
        width: 250,
        height: 250,
        padding: 50,
        border: '2px solid #27569C',
        textAlign: 'center',
        borderRadius: 3,
    },
    login_h3: {
        color: '#27569C',
    },
    
    login__wrapper_login: {
        flexDirection: 'initial',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    login__wrapper_login_h5: {
        fontWeight: 600,
        marginTop: 10,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 0,
    },
    
    login__wrapper_pass: {
        flexDirection: 'initial',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    login__wrapper_pass_h5: {
        fontWeight: 600,
        marginTop: 10,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 0,
    },
    
    btnSubmit: {
        backgroundColor: '#e4b062',
        paddingVertical: 10,
        paddingHorizontal: 30,
        border: 'none',
        borderRadius: 3,
        fontWeight: 600,
        marginTop: 20,
    },
    disabled: {
        opacity: 0.5,
    },
})