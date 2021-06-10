import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface ISkillData {
  id: number;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<ISkillData[]>([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 11) {
      setGretting('Good morning');
    } else if (currentHour >= 11 && currentHour < 18) {
      setGretting('Good afternoon');
    } else if (currentHour >= 18) {
      setGretting('Good night');
    }
  }, []);

  const handleAddSkill = () => {
    const data = {
      id: new Date().getTime(),
      name: newSkill
    };

    setSkills([...skills, data])
  }

  const handleRemoveSkill = (skillId: number) => {
    setSkills(skills.filter(skill => skill.id !== skillId))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gretting}, Guilherme!</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkill} title="Add" />

      <Text style={[styles.title, styles.secondTitle]}>My skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SkillCard skillId={item.id} skillName={item.name} onRemove={handleRemoveSkill} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 16 : 12,
    marginTop: 15,
    borderRadius: 8,
  },
  secondTitle: {
    marginTop: 20,
  },
})
