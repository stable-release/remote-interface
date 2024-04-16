import {useState} from 'react';
import {Text, View} from 'react-native';

export default function FingerprintAuthFlow() {
  const [viewKey, setViewKey] = useState('CurrentKey');

  return (
    <View className="flex align-middle justify-center">
      <View className="flex flex-col">
        <View className="flex flex-row">
            <Text className="">Key</Text>
            <Text className="">{viewKey}</Text>
        </View>
      </View>
    </View>
  );
}
