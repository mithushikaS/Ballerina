import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,  // Import Alert for showing alerts
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [isSignUp, setIsSignUp] = useState(true); 
  const [role, setRole] = useState("Patient"); 

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Missing Information", "Please fill in all the fields.");  // Show alert if any field is empty
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");  // Show alert for password mismatch
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.sendEmailVerification();
      Alert.alert("Signup Successful", "A verification email has been sent to your email address.");

      await firestore().collection('users').doc(user.uid).set({
        email: email,
        role: role,
      });

      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log('Error during sign-up:', error);
      Alert.alert("Error", "An error occurred during signup. Please try again.");
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing Information", "Please fill in both email and password fields.");
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Login Successful", "You have successfully logged in.");
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log('Error during login:', error);
      Alert.alert("Login Error", "An error occurred during login. Please check your credentials.");
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{isSignUp ? "Sign Up" : "Log In"}</Text>

      {isSignUp && (
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>
      )}

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="#666"
          value={email}  
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="#666"
          value={password}  
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {isSignUp && (
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#666"
            value={confirmPassword} 
            onChangeText={(text) => setConfirmPassword(text)} 
          />
        </View>
      )}

      {isSignUp && (
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Role</Text>
          <Picker
            selectedValue={role}
            style={styles.picker}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Picker.Item label="Patient" value="Patient" />
            <Picker.Item label="Doctor" value="Doctor" />
            <Picker.Item label="Admin" value="Admin" />
          </Picker>
        </View>
      )}

      {!isSignUp && (
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      )}

      <Animatable.View animation="fadeInUp" delay={500}>
        <TouchableOpacity
          style={[
            styles.ctaButton,
            isSignUp ? styles.signUpButton : styles.logInButton,
          ]}
          onPress={isSignUp ? handleSignup : handleLogin}
        >
          <Text style={styles.ctaText}>{isSignUp ? "Sign Up" : "Log In"}</Text>
        </TouchableOpacity>
      </Animatable.View>

      <TouchableOpacity onPress={toggleAuthMode}>
        <Text style={styles.toggleText}>
          {isSignUp
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("../../../assets/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("../../../assets/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa",
    marginVertical: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowoffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 10,
    color: "#666",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 25,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  forgotPassword: {
    color: "#1e90ff",
    marginBottom: 20,
    alignSelf: "flex-end",
    fontSize: 14,
    fontWeight: "500",
  },
  ctaButton: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 10,
  },
  signUpButton: {
    backgroundColor: "#28a745",
  },
  logInButton: {
    backgroundColor: "#007bff",
  },
  ctaText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  toggleText: {
    color: "#333",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default AuthScreen;
