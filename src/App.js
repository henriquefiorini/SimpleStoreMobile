import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, View, Text } from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Hello World!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
