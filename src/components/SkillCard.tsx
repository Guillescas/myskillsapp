import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ISkillCardProps {
  skillId: number;
  skillName: String;
  onRemove: (skillId: number) => void;
}

export function SkillCard({ skillId, skillName, onRemove }: ISkillCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>
        {skillName}
      </Text>

      <TouchableOpacity activeOpacity={0.8} onPress={() => onRemove(skillId)}>
        <Icon style={styles.icon} name="x-circle" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1f1e25',
    marginVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skillName: {
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    padding: 8,
    fontSize: 18,
    color: '#fff',
  }
})