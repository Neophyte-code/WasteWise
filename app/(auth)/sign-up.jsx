import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Import Firebase auth
import Formfield from '../../components/Formfield';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ passwordMatch: false });

  const handleSignUp = async () => {
    if (form.password !== form.confirmPassword) {
      setErrors({ ...errors, passwordMatch: true });
      return;
    }

    setIsSubmitting(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      Alert.alert("Success!", "Account created.");
      router.push("/sign-in");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signInContent}>
          <Text style={styles.title}>WasteWise</Text>
          <Text style={styles.subTitle}>Sign Up to Wastewise</Text>
          
          <Formfield 
            title="Email" 
            value={form.email} 
            handleChangeText={(e) => setForm({ ...form, email: e })} 
            keyboardType="email-address" 
            otherStyles={{ marginTop: 50 }} 
          />
          
          <Formfield 
            title="Password" 
            value={form.password} 
            handleChangeText={(e) => setForm({ ...form, password: e })} 
            secureTextEntry 
            otherStyles={{ marginTop: 10 }} 
          />
          
          <Formfield 
            title="Confirm Password" 
            value={form.confirmPassword} 
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            secureTextEntry
            otherStyles={{ marginTop: 10 }} 
          />
          
          {errors.passwordMatch && (
            <Text style={styles.errorText}>Passwords do not match!</Text>
          )}
          
          <CustomButton 
            title="Sign Up"
            handlePress={handleSignUp}
            containerStyles={{ marginTop: 50 }}
            isLoading={isSubmitting}
          />

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Already have an account? </Text>
            <Link href="/sign-in" style={styles.link}>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 10,
  },
    signInContent: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "600", 
    fontSize: 15,
    textAlign: "center",
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  linkText: {
    fontSize: 15,
  },
  link: {
    fontSize: 15,
    color: "green",
  },
  members: {
    fontSize: 15,
    color: "green",
    textAlign: "center"
  }

});