import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const menuData = [
  {
    id: 'l',
    title: 'calculadora IMC',
    route: '/imc',
    color: '#FF6B6B',
    icon: '📊'
  },
  {
    id: 'l',
    title: 'Peso Ideal',
    route: '/peso-ideal',
    color: '#4ECDC4',
    icon: '⚖️'
  },
  {
    id: '3',
    title: 'Água Diária',
    route: '/agua',
    color: '#45B7D1',
    icon: '💧'
  },
  {
    id: '4',
    title: 'Taxa Metabólica',
    route: '/tmb',
    color: '#96CEB4',
    icon: '🔥'
  },
];

export default function HomeScreen() {
  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => router.push(item.route)}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonIcon}>{item.icon}</Text>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌸 Silvinha Health App</Text>
        <Text style={styles.subtitle}>Cuide da sua saúde com
          carinho</Text>
      </View>
      <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}