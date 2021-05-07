import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

const Navbar = () => {
    return (
      <View style={styles.navbar}>
        <Text style={styles.headline}>Todos</Text>
      </View>
    );
}

const styles = StyleSheet.create({
   navbar: {
       width: '100%',
       backgroundColor: '#5c7da0',
       alignItems: 'center',
       justifyContent: 'center',
       height: '10%',
   },
   headline: {
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 20,
   }
});

export default Navbar;