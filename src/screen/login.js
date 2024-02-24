import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const login = props => {
  return (
    <View style={{flex: 1, padding: 32}}>
      <View style={{height: 100}} />
      {/* logo */}
      <View style={{height: 100}}>
        <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
          LOGO IPBLC
        </Text>
      </View>
      <View style={{height: 53}} />
      <View>
        {/* Email */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            Email
          </Text>
          <View
            style={{
              height: 40,
              marginTop: 8,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 8,
            }}>
            <TextInput placeholder="Email" keyboardType="email" />
          </View>
        </View>
        <View style={{height: 23}} />
        {/* Password */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            Password
          </Text>
          <View
            style={{
              height: 40,
              marginTop: 8,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 8,
            }}>
            <TextInput
              placeholder="Password"
              keyboardType="email"
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View style={{height: 80}} />
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
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{height: 80}} />
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontWeight: '400',
            }}>
            does't have account ?
          </Text>
          <View style={{width: 8}} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('register');
            }}>
            <Text
              style={{
                color: 'green',
                fontWeight: '500',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
