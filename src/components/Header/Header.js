import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../../assets/Logo";
import { LogOut } from "../../../assets/LogOut";

export function Header() {
    // const { name } = useSelector((state) => state.dataSlice)
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleLogout = () => {
        // if (name && name.length) {
        //     localStorage.removeItem('name')
        //     getName('')(dispatch)
        //     navigate('/login');
        // }
    }

    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.header__wrapper}>
                <Text style={styles.header__wrapper_span}>
                    {/* {name} */}
                    Nurbek
                </Text>
                <LogOut click={handleLogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#E4B062',
        flexDirection: 'initial',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 0,
        paddingHorizontal: 30,
    },
    header__wrapper: {
        flexDirection: 'initial',
        alignItems: 'center',
    },
    header__wrapper_span: {
        fontWeight: 600,
        marginVertical: 0,
        marginHorizontal: 20,
        fontSize: 18,
        // fontFamily: 'Montserrat',
    },
});