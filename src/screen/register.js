import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const register = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 32,
        }}>
        {/* Logo */}
        <View style={{alignItems: 'center', paddingTop: 112}}>
          <Text style={{color: '#000000', fontSize: 32, fontWeight: 'bold'}}>
            Hello, Welcome to IPBLC
          </Text>
        </View>

        {/* FORM lOGIN */}
        <View style={{paddingTop: 63}}>
          <View style={{justifyContent: 'flex-start'}}>
            <Text
              style={{
                paddingBottom: 12,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
              }}>
              User name
            </Text>
            <View
              style={{
                borderColor: '#000000',
                borderWidth: 2,
                borderRadius: 8,
                height: 42,
              }}>
              <TextInput />
            </View>
          </View>
          <View style={{height: 12}} />
          <View style={{justifyContent: 'flex-start'}}>
            <Text
              style={{
                paddingBottom: 12,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
              }}>
              Email
            </Text>
            <View
              style={{
                borderColor: '#000000',
                borderWidth: 2,
                borderRadius: 8,
                height: 42,
              }}>
              <TextInput />
            </View>
          </View>
          <View style={{height: 12}} />
          <View style={{justifyContent: 'flex-start'}}>
            <Text
              style={{
                paddingBottom: 12,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
              }}>
              Password
            </Text>
            <View
              style={{
                borderColor: '#000000',
                borderWidth: 2,
                borderRadius: 8,
                height: 42,
              }}>
              <TextInput secureTextEntry />
            </View>
          </View>
        </View>

        <View style={{height: 100}} />

        {/* bUTTON lOGIN */}
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
            <View
              style={{
                height: 50,
                backgroundColor: '#00AA13',
                alignItems: 'center',
                borderRadius: 12,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Register
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{height: 42}} />

        {/* BUTTON Go to register */}
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontWeight: '400',
                color: '#000000',
              }}>
              Already have account ?
            </Text>
            <View style={{width: 8}} />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('login');
              }}>
              <Text
                style={{
                  color: 'green',
                  fontWeight: '500',
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
