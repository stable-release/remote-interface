import {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {storage} from '../../storage/mmkv.instance';
import AccountDetails from './AccountDetails';

export default function AccountCard({account}) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={[styles.viewBox]}>
      <Button title={account} onPress={() => setIsSelected(prev => !prev)} style={[styles.button]}/>
      {isSelected && (
        <AccountDetails account={JSON.parse(storage.getString(account))} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    viewBox: {
        display: "flex",
    },
    button: {
        height: 400,
    }
});
