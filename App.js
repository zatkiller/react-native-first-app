import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder="Course Goal" style={{
          width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
        }} />
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
