// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Nn() {
  return (
    <View style={styles.container}>
      {/* Header decorativo */}
      <View style={styles.topWave}>
        <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
          <Path
            fill="url(#grad)"
            d={`
              M0,0 
              C${width * 0.25},100 ${width * 0.75},-50 ${width},100 
              L${width},0 
              Z
            `}
          />
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#ff5f6d" stopOpacity="1" />
            <Stop offset="1" stopColor="#ffc371" stopOpacity="1" />
          </LinearGradient>
        </Svg>
      </View>

      {/* Formulario */}
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Text style={styles.forgot}>Forgot your password?</Text>

      <TouchableOpacity style={styles.signInBtn}>
        <LinearGradient
          colors={['#ff5f6d', '#ffc371']}
          style={styles.gradientBtn}
        >
          <Text style={styles.signInText}>Sign In ➔</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.createAccount}>Don’t have an account? <Text style={styles.createLink}>Create</Text></Text>

      {/* Footer decorativo */}
      <View style={styles.bottomWave}>
        <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
          <Path
            fill="#a18cd1"
            d={`
              M0,160 
              C${width * 0.25},60 ${width * 0.75},220 ${width},60 
              L${width},160 
              Z
            `}
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  topWave: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 100,
  },
  subtitle: {
    color: '#888',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f1f1f1',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#999',
    marginBottom: 30,
  },
  signInBtn: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientBtn: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccount: {
    marginTop: 30,
    color: '#999',
  },
  createLink: {
    color: '#000',
    fontWeight: 'bold',
  }
});
