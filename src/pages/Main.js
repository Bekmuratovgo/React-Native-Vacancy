import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import { StyleSheet, View } from "react-native";
// import {useDispatch, useSelector} from "react-redux";
// import { getName, getPosts } from "../store/DataAction";
// import { useNavigate } from "react-router-dom";

const Main = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { data } = useSelector((state) => state.dataSlice);

    useEffect(() => {
        // getName(navigate)(dispatch)
        // getPosts()(dispatch)
    }, []);

    const data = [
        {
            name: 'Name-1',
            body: 'Body-2',
            title: 'Title-3',
            company: {
                name: 'Discovery'
            }
        },
        {
            name: 'Name-1',
            body: 'Body-2',
            title: 'Title-3',
            company: {
                name: 'Discovery'
            }
        },
        {
            name: 'Name-1',
            body: 'Body-2',
            title: 'Title-3',
            company: {
                name: 'Discovery'
            }
        },
    ]

    return (
        <View style={styles.main}>
            <View style={styles.main__wrapper}>
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </View>
        </View>
    )
}
export default Main

const styles = StyleSheet.create({
    main__wrapper: {
        flexDirection: 'initial',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingVertical: 20,
        paddingHorizontal: 50,
    }
})