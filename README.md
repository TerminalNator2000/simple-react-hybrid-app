# simple-react-hybrid-app
  Sample hybrid app using react.js

Step 1: Setup with Expo and React Native Web
Install Node.js and Expo CLI: Make sure you have Node.js installed. Then, install the Expo CLI:

bash

npm install -g expo-cli
Create an Expo Project: Initialize a new Expo project with template support for web:

bash

expo init hybrid-app
Choose the blank template or any template you like. Expo will set up the project for you.

Install React Native Web: React Native Web allows your app to run in the browser. Change to your project directory and install React Native Web dependencies:

bash

cd hybrid-app
npm install react-native-web react-dom
Configure package.json for Web: Add these scripts to make running on the web easier:

json
Copy code
"scripts": {
  "web": "expo start --web",
  "android": "expo start --android",
  "ios": "expo start --ios"
}
Step 2: Basic App Structure
Edit App.js: Modify App.js to include a simple, hybrid UI that works across web and mobile:

javascript
Copy code
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hybrid App with React Native</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});
Add Platform-Specific Code (Optional): You can use React Native’s Platform API to create platform-specific behavior:

javascript

import { Platform } from 'react-native';

const platformMessage =
  Platform.OS === 'web' ? 'Running on the web!' : 'Running on mobile!';
Step 3: Run the App
Run on Web: Start the web server by running:

bash

npm run web
Your app will open in the browser, and you can interact with it as a web app.

Run on Mobile: To test on mobile, use either of the following commands:

bash

npm run android
npm run ios
You’ll need Android Studio or Xcode configured, or you can use the Expo Go app on your phone for quick testing.
