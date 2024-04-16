import {View, Text, StyleSheet} from 'react-native';

export default function AccountDetails({account}) {

  return (
    <View style={[styles.viewArea]}>
      <View style={[styles.container]}>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>Address</Text>
        </View>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>{account.address}</Text>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>Public Key</Text>
        </View>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>{account.publicKey}</Text>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>Seed Phrase</Text>
        </View>
        <View style={[styles.box]}>
          <Text style={[styles.text]}>{account.mnemonic.phrase}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  box: {
    flex: 1,
    padding: '1px',
    width: '50%',
  },
  text: {
    color: 'black',
    fontSize: 12,
  },
});
