import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, Platform } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ onPress, title, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 16 : 12,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f1f1f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
})