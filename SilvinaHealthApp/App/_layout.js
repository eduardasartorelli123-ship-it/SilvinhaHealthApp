import React from 'react';
import { stack } from 'expo-router';
import { status } from 'expo-status-bar';

export default function _layout() {
  return (
    <>
      <StatusBar style ='dark'/>
      <Stack>
        screenOpitions={{headerstyle: {
            backgroudColor : '#f9f9f9',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeigth: 'bold',
        }
        }}
        <Stack.Screen
         name="index"
         options={{
            title: 'Silvinha Health App',
            headerShown: true
         }}
        />
      </Stack>
    </>
  )
}