import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Card ({ item }) {

    return (
        <View style={styles.card} >
            <View style={styles.card__wrapper}>
                <View style={styles.card__wrapper_blockFirst}>
                    {/* <img style={styles.card_img} src={item.url} alt="img" /> */}
                    <View style={styles.card__wrapper_data}>
                        <View style={styles.card__wrapper_author}>
                            <Text style={styles.card_h5}>Author:</Text>
                            <Text style={styles.card_h5}>{item.name}</Text>
                        </View>
                        <View style={styles.card__wrapper_company}>
                            <Text style={styles.card_h5}>company:</Text>
                            <Text style={styles.card_h5}>{item.company.name}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card__wrapper_blockSecond}>
                    <Text style={styles.card__wrapper_title}>{item.title}</Text>
                    <Text style={styles.card__wrapper_desc}>{item.body}</Text>
                </View>
            </View>
        </View>
    )
}
export default Card

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 300,
        border: '3px solid #27569C',
        borderRadius: 2,
        padding: 15,
        margin: 15,
    },
    card_img: {
        width: 120,
        height: 120,
    },
    card__wrapper_blockFirst: {
        flexDirection: 'initial'
    },
    card_h5: {
        marginHorizontal: 3,
        marginVertical: 10,
    },
    card__wrapper_data: {
        marginHorizontal: 10,
        marginVertical: 0,
    },
    card__wrapper_author: {
        flexDirection: 'initial'
    },
    card__wrapper_company: {
        flexDirection: 'initial'
    },
    card__wrapper_title: {
        marginVertical: 10,
        marginHorizontal: 0
    },
    card__wrapper_desc: {},
    card__wrapper_blockSecond: {},
    
    // @media screen and (max-width: 375px) {
    //     .card img {
    //         display: none;
    //     }
    //     .card__wrapper_desc {
    //         font-size: 14px;
    //     }
    // }
})