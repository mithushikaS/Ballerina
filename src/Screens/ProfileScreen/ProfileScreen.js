// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// const userData = {
//   name: "John Doe",
//   email: "johndoe@example.com",
//   profileImage: "https://via.placeholder.com/150", // Placeholder profile image
// };

// const ProfileScreen = () => {
//   const handleEditProfile = () => {
//     Alert.alert("Edit Profile", "Navigating to Edit Profile...");
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       { text: "Logout", onPress: () => console.log("User logged out") },
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.userInfoContainer}>
//         <Image
//           source={{ uri: userData.profileImage }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>{userData.name}</Text>
//         <Text style={styles.email}>{userData.email}</Text>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
//         <Text style={styles.buttonText}>Edit Profile</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.button, styles.logoutButton]}
//         onPress={handleLogout}
//       >
//         <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f7",
//     paddingHorizontal: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   userInfoContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   email: {
//     fontSize: 18,
//     color: "#666",
//     marginBottom: 10,
//   },
//   button: {
//     width: "100%",
//     paddingVertical: 15,
//     borderRadius: 8,
//     backgroundColor: "#4caf50",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   logoutButton: {
//     backgroundColor: "#f44336",
//   },
//   logoutText: {
//     color: "#fff",
//   },
// });

// export default ProfileScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// // Mock user data
// const userData = {
//   name: "John Doe",
//   email: "johndoe@example.com",
//   profileImage: "https://via.placeholder.com/150", // Placeholder profile image, you can replace it with user's real image URL
// };

// const ProfileScreen = ({ navigation }) => {
//   // Handle Edit Profile
//   const handleEditProfile = () => {
//     Alert.alert("Edit Profile", "Navigating to Edit Profile...");
//     // Add navigation or functionality for editing profile here
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       { text: "Logout", onPress: () => console.log("User logged out") },
//     ]);
//   };

//   // Handle Medical Records
//   const handleMedicalRecords = () => {
//     Alert.alert("Medical Records", "Navigating to Medical Records...");
//     // Add navigation or functionality to go to medical records here
//   };

//   return (
//     <View style={styles.container}>
//       {/* User Info Section */}
//       <View style={styles.userInfoContainer}>
//         <Image
//           source={{ uri: userData.profileImage }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>{userData.name}</Text>
//         <Text style={styles.email}>{userData.email}</Text>
//       </View>

//       {/* Medical Records Button */}
//       <TouchableOpacity style={styles.button} onPress={handleMedicalRecords}>
//         <Text style={styles.buttonText}>Medical Records</Text>
//       </TouchableOpacity>

//       {/* Edit Profile Button */}
//       <TouchableOpacity
//         style={[styles.button, styles.editProfileButton]}
//         onPress={handleEditProfile}
//       >
//         <Text style={styles.buttonText}>Edit Profile</Text>
//       </TouchableOpacity>

//       {/* Logout Button */}
//       <TouchableOpacity
//         style={[styles.button, styles.logoutButton]}
//         onPress={handleLogout}
//       >
//         <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f4f7",
//     paddingHorizontal: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   userInfoContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   email: {
//     fontSize: 18,
//     color: "#666",
//     marginBottom: 10,
//   },
//   button: {
//     width: "100%",
//     paddingVertical: 15,
//     borderRadius: 8,
//     backgroundColor: "#4caf50",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   editProfileButton: {
//     backgroundColor: "#3f51b5",
//   },
//   logoutButton: {
//     backgroundColor: "#f44336",
//   },
//   logoutText: {
//     color: "#fff",
//   },
// });

// export default ProfileScreen;

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, Button } from "react-native";

// const ProfileScreen = ({ route, navigation }) => {
//   // Initial user data (this can be fetched from an API or storage)
//   const [userName, setUserName] = useState("John Doe");
//   const [userEmail, setUserEmail] = useState("johndoe@example.com");

//   // Receive updated profile data when returning from EditProfileScreen
//   useEffect(() => {
//     if (route.params?.updatedName) {
//       setUserName(route.params.updatedName);
//     }
//     if (route.params?.updatedEmail) {
//       setUserEmail(route.params.updatedEmail);
//     }
//   }, [route.params]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: "https://via.placeholder.com/150" }} // Placeholder for profile picture
//         style={styles.profileImage}
//       />

//       {/* User Info */}
//       <Text style={styles.userInfo}>Name: {userName}</Text>
//       <Text style={styles.userInfo}>Email: {userEmail}</Text>

//       {/* Edit Profile Button */}
//       <Button
//         title="Edit Profile"
//         onPress={() =>
//           navigation.navigate("EditProfileScreen", {
//             userName,
//             userEmail,
//           })
//         }
//       />

//       {/* Logout Button */}
//       <Button
//         title="Logout"
//         onPress={() => {
//           // Handle logout
//           alert("Logged out");
//         }}
//         color="red"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f0f4f7",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   userInfo: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
// });

// export default ProfileScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Assuming you're using expo for gradient
//import { profile1 } from "../../../assets/profile6.jpg";
const profile1 = require("../../../assets/profile6.jpg");

const ProfileScreen = ({ route, navigation }) => {
  const [userName, setUserName] = useState("John Doe");
  const [userEmail, setUserEmail] = useState("johndoe@example.com");
  const [userBio, setUserBio] = useState("Loving life, living in the moment.");
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );

  useEffect(() => {
    if (route.params?.updatedName) {
      setUserName(route.params.updatedName);
    }
    if (route.params?.updatedEmail) {
      setUserEmail(route.params.updatedEmail);
    }
    if (route.params?.updatedBio) {
      setUserBio(route.params.updatedBio);
    }
    if (route.params?.updatedProfileImage) {
      setProfileImage(route.params.updatedProfileImage);
    }
  }, [route.params]);

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => alert("You have been logged out") },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Clickable Profile Image */}
      <TouchableOpacity
        onPress={() => alert("Feature to update profile picture")}
      >
        <Image source={profile1} style={styles.profileImage} />
      </TouchableOpacity>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Ionicons name="person-outline" size={24} color="gray" />
        <Text style={styles.userInfoText}>{userName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="mail-outline" size={24} color="gray" />
        <Text style={styles.userInfoText}>{userEmail}</Text>
      </View>

      {/* User Bio */}
      <View style={styles.bioContainer}>
        <Ionicons name="information-circle-outline" size={24} color="gray" />
        <Text style={styles.bioText}>{userBio}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButtonContainer}
        onPress={() =>
          navigation.navigate("EditProfileScreen", {
            userName,
            userEmail,
            userBio,
            profileImage,
          })
        }
      >
        <LinearGradient
          colors={["#007bff", "#0056b3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.editButton}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButtonContainer}
        onPress={handleLogout}
      >
        <LinearGradient
          colors={["#ff4d4d", "#cc0000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logoutButton}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f7",
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#007bff",
    marginBottom: 20,
    marginVertical: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  userInfoText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#333",
    fontWeight: "bold",
  },
  bioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bioText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
    fontStyle: "italic",
  },
  editButtonContainer: {
    marginVertical: 20,
    width: "80%",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  logoutButtonContainer: {
    width: "80%",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
