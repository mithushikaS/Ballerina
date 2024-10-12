// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ProgressBar,
// } from "react-native";

// import { ProgressBarAndroid } from "@react-native-community/progress-bar-android";

// const QueueStatusScreen = ({ navigation, route }) => {
//   const [queuePosition, setQueuePosition] = useState(3); // Assuming patient is 3rd in line initially
//   const [estimatedWaitTime, setEstimatedWaitTime] = useState(20); // 15 minutes wait time
//   const [progress, setProgress] = useState(1); // 100% progress initially
//   const [timeLeft, setTimeLeft] = useState(20); // 900 seconds = 15 minutes countdown

//   // Countdown timer for the estimated wait time
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timeLeft > 0) {
//         setTimeLeft((prevTime) => prevTime - 1);
//         setProgress((prevProgress) => prevProgress - 1 / estimatedWaitTime); // prevProgress - 1 / 900) //Reducing progress bar based on total time
//         //     } else {
//         //       clearInterval(interval);
//         //     }
//         //   }, 1000);

//         //   return () => clearInterval(interval);
//         // }, [timeLeft]);

//         // Logic to reduce queue position when timeLeft reaches a threshold
//         if (timeLeft === 15 && queuePosition > 1) {
//           setQueuePosition((prevPosition) => prevPosition - 1);
//         } else if (timeLeft === 10 && queuePosition > 1) {
//           setQueuePosition((prevPosition) => prevPosition - 1);
//         } else if (timeLeft === 5 && queuePosition > 1) {
//           setQueuePosition((prevPosition) => prevPosition - 1);
//         }
//       } else {
//         clearInterval(interval); // Stop the interval when time runs out
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Clean up the interval
//   }, [timeLeft, queuePosition]);

//   // Format the countdown timer to minutes and seconds
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}m ${secs}s`;
//   };

//   const getQueuePositionSuffix = (position) => {
//     if (position === 1) return "st";
//     if (position === 2) return "nd";
//     if (position === 3) return "rd";
//     return "th";
//   };

//   const handleGoHome = () => {
//     Alert.alert("Returning Home", "You will be redirected to the home screen.");
//     navigation.navigate("HomeScreen"); // Navigate to HomeScreen (adjust route name as needed)
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header: Doctor's Name and Department */}
//       <Text style={styles.headerText}>Dr. John Smith - Cardiologist</Text>

//       {/* Queue Position Indicator */}
//       <View style={styles.queuePositionContainer}>
//         <Text style={styles.queuePositionNumber}>{queuePosition}</Text>
//         <Text style={styles.queuePositionText}>
//           {/* You are {queuePosition}rd in line. */}
//           You are {queuePosition}
//           {getQueuePositionSuffix(queuePosition)} in line.
//         </Text>
//       </View>

//       {/* Estimated Wait Time */}
//       <Text style={styles.estimatedWaitTimeText}>
//         Estimated Wait Time: {formatTime(timeLeft)}
//       </Text>

//       {/* Live Countdown Timer */}
//       <ProgressBar
//         styleAttr="Horizontal"
//         indeterminate={false}
//         progress={progress}
//         color="#6200ee"
//         style={styles.progressBar}
//       />

//       {/* Button: Go to Home */}
//       <TouchableOpacity style={styles.goHomeButton} onPress={handleGoHome}>
//         <Text style={styles.goHomeButtonText}>Go to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f2f2f2",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#333",
//   },
//   queuePositionContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   queuePositionNumber: {
//     fontSize: 80,
//     fontWeight: "bold",
//     color: "#6200ee",
//   },
//   queuePositionText: {
//     fontSize: 18,
//     color: "#333",
//   },
//   estimatedWaitTimeText: {
//     fontSize: 18,
//     color: "#333",
//     marginBottom: 20,
//   },
//   progressBar: {
//     width: "100%",
//     height: 10,
//     marginBottom: 40,
//   },
//   goHomeButton: {
//     backgroundColor: "#6200ee",
//     paddingVertical: 15,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//   },
//   goHomeButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default QueueStatusScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ProgressBarAndroid,
//   TouchableOpacity,
// } from "react-native";

// // Function to get the color based on the queue position
// const getQueueColor = (position) => {
//   if (position === 1) return "green";
//   if (position <= 3) return "yellow";
//   return "red";
// };

// const QueueStatusScreen = () => {
//   // State variables
//   const [queuePosition, setQueuePosition] = useState(3);
//   const [waitTime, setWaitTime] = useState(1); // in minutes
//   const [progress, setProgress] = useState(1); // 1 represents full progress

//   // Countdown logic to simulate wait time reduction
//   useEffect(() => {
//     if (waitTime > 0) {
//       const interval = setInterval(() => {
//         setWaitTime((prevTime) => prevTime - 1);
//         setProgress((prevProgress) => prevProgress - 0.1); // Update progress bar
//       }, 60000); // 1 minute interval

//       return () => clearInterval(interval);
//     }
//   }, [waitTime]);

//   // Function to reduce queue position manually (for demo purposes)
//   const advanceQueue = () => {
//     if (queuePosition > 1) {
//       setQueuePosition((prevPos) => prevPos - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Queue Position */}
//       <View style={styles.queuePositionContainer}>
//         <Text style={styles.queuePosition}>{queuePosition}</Text>
//         <Text style={styles.queueDetails}>
//           {queuePosition === 1
//             ? "It's your turn!"
//             : `You are ${queuePosition}rd in line.`}
//         </Text>
//       </View>

//       {/* Estimated Wait Time */}
//       <Text style={styles.estimatedWaitTime}>
//         Estimated wait time: {waitTime} minutes
//       </Text>

//       {/* Progress Bar */}
//       <View style={styles.progressBarContainer}>
//         <ProgressBarAndroid
//           styleAttr="Horizontal"
//           indeterminate={false}
//           progress={progress}
//           color="#4caf50"
//           style={styles.progressBar}
//         />
//         <Text style={styles.countdownText}>
//           Time left: {waitTime > 0 ? waitTime : 0} minutes
//         </Text>
//       </View>

//       {/* Circular Status Indicator */}
//       <View
//         style={[
//           styles.statusIndicator,
//           { backgroundColor: getQueueColor(queuePosition) },
//         ]}
//       />

//       {/* Button to simulate advancing the queue */}
//       <TouchableOpacity style={styles.advanceButton} onPress={advanceQueue}>
//         <Text style={styles.advanceButtonText}>Advance Queue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f4f7",
//     padding: 20,
//   },
//   queuePositionContainer: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   queuePosition: {
//     fontSize: 80,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   queueDetails: {
//     fontSize: 18,
//     color: "#666",
//   },
//   estimatedWaitTime: {
//     fontSize: 20,
//     marginBottom: 30,
//     color: "#444",
//   },
//   progressBarContainer: {
//     width: "80%",
//     marginVertical: 20,
//     alignItems: "center",
//   },
//   progressBar: {
//     height: 10,
//     width: "100%",
//     borderRadius: 5,
//     backgroundColor: "#d3d3d3",
//   },
//   countdownText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#333",
//   },
//   statusIndicator: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   advanceButton: {
//     marginTop: 30,
//     backgroundColor: "#4caf50",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   advanceButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default QueueStatusScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ProgressBarAndroid,
  TouchableOpacity,
} from "react-native";

// Sample patient queue data
const initialQueue = [
  { id: 1, name: "Patient A" },
  { id: 2, name: "Patient B" },
  { id: 3, name: "Patient C" },
  { id: 4, name: "Patient D" },
  { id: 5, name: "You" }, // The current user
  { id: 6, name: "Patient E" },
];

// Function to get color based on the queue position
const getQueueColor = (position) => {
  if (position === 1) return "green";
  if (position <= 3) return "yellow";
  return "red";
};

const QueueStatusScreen = () => {
  const [queue, setQueue] = useState(initialQueue);
  const [userPosition, setUserPosition] = useState(5); // Starting position of the user
  const [waitTime, setWaitTime] = useState(30); // Total wait time in minutes
  const [progress, setProgress] = useState(1); // Progress bar full (1)

  // Move the user up the queue every minute and reduce the estimated wait time
  useEffect(() => {
    if (userPosition > 1) {
      const interval = setInterval(() => {
        setQueue((prevQueue) => prevQueue.slice(1)); // Remove first patient in the queue
        setUserPosition((prevPosition) => prevPosition - 1); // Move user up
        setWaitTime((prevTime) => prevTime - 5); // Reduce wait time
        setProgress((prevProgress) => prevProgress - 0.2); // Reduce progress bar
      }, 60000); // Move every minute (60000 ms)

      return () => clearInterval(interval);
    }
  }, [userPosition]);

  // Function to render each patient in the queue
  const renderPatient = ({ item, index }) => {
    const isCurrentUser = item.name === "You"; // Check if the item is the user
    return (
      <View
        style={[
          styles.patientItem,
          isCurrentUser && styles.currentUserHighlight,
        ]}
      >
        <Text style={styles.patientText}>
          {index + 1}. {item.name}
        </Text>
        {isCurrentUser && (
          <Text style={styles.queueDetails}>
            {userPosition === 1
              ? "It's your turn!"
              : `You are ${userPosition}rd in line.`}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Queue Status</Text>

      {/* Queue List */}
      <View style={styles.queueContainer}>
        <Text style={styles.queueTitle}>Patient Queue:</Text>
        <FlatList
          data={queue}
          renderItem={renderPatient}
          keyExtractor={(item) => item.id.toString()}
          style={styles.queueList}
        />
      </View>

      {/* Current User Position */}
      <View style={styles.positionContainer}>
        <Text style={styles.positionText}>
          {userPosition === 1
            ? "It's your turn!"
            : `You are ${userPosition}rd in line.`}
        </Text>
      </View>

      {/* Estimated Wait Time */}
      <Text style={styles.estimatedWaitTime}>
        Estimated wait time: {waitTime > 0 ? waitTime : 0} minutes
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color="#4caf50"
          style={styles.progressBar}
        />
        <Text style={styles.countdownText}>
          Time left: {waitTime > 0 ? waitTime : 0} minutes
        </Text>
      </View>

      {/* Circular Status Indicator */}
      <View
        style={[
          styles.statusIndicator,
          { backgroundColor: getQueueColor(userPosition) },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
    textAlign: "center",
  },
  queueContainer: {
    width: "100%",
    marginVertical: 20,
  },
  queueTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
    textAlign: "left",
    width: "100%",
  },
  queueList: {
    width: "100%",
    marginBottom: 20,
  },
  patientItem: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentUserHighlight: {
    backgroundColor: "#e0f7fa",
  },
  patientText: {
    fontSize: 18,
    color: "#333",
  },
  queueDetails: {
    fontSize: 16,
    color: "#666",
  },
  positionContainer: {
    width: "100%",
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  positionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  estimatedWaitTime: {
    fontSize: 20,
    marginVertical: 20,
    color: "#444",
    textAlign: "center",
  },
  progressBarContainer: {
    width: "80%",
    marginVertical: 20,
    alignItems: "center",
  },
  progressBar: {
    height: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
  },
  countdownText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  statusIndicator: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
});

export default QueueStatusScreen;
