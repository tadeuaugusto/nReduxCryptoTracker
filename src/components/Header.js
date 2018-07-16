import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={headerContainer}>
            <Text style={header}>{ props.headerText }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        // display: 'flex',
        // marginTop: 55,
        // alignItems: 'center'
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

const { headerContainer, header } = styles;

export default Header;