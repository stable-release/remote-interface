import {Button, ScrollView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export default function Store({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text>Store Page</Text>
        <Button title='Go back Home' onPress={() => navigation.navigate("Home")}/>
      </ScrollView>
    </View>
  );
}
