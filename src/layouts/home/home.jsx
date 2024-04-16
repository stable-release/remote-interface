import {Button, ScrollView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text>Home Page</Text>
        {/* <Button title="Go to Store" onPress={() => navigation.navigate("Store")} />
        <Button title="Fingerprint Example" onPress={() => navigation.navigate("FingerprintAuthFlow")} /> */}
        <Button title="Accounts" onPress={() => navigation.navigate("Accounts")} />
      </ScrollView>
    </View>
  );
}
