import { Button, Text } from "react-native";
import { View } from "react-native";
import createHDWallet from "../../controller/wallet.controller";
import { storage } from "../../storage/mmkv.instance";
import { useEffect, useState } from "react";
import AccountCard from "../../components/accounts/AccountCard";

export default function Accounts() {
    const [accountsList, setAccountsList] = useState([]);

    const handleCreateButton = (password = "") => {
        const ethers_wallet = createHDWallet(password);
        storage.set(ethers_wallet.address, JSON.stringify(ethers_wallet))
        setAccountsList(prev => storage.getAllKeys())
    }

    // const getAllAddresses = () => {
    //     setAccountsList(prev => storage.getAllKeys());
    // }

    const accountsView = accountsList.map((account, index) => {
        return <AccountCard account={account} key={index} />
    })

    useEffect(() => {
        setAccountsList(prev => storage.getAllKeys())
    }, [])

    const debugClearKeys = () => {
        storage.clearAll();
        setAccountsList(prev => storage.getAllKeys())
    }

    return (
        <View>
            {/* <Text> Accounts Page </Text> */}
            <Button title="New Wallet" onPress={() => handleCreateButton()} />
            {/* <Button title="Refresh Accounts" onPress={() => getAllAddresses()} /> */}
            {accountsView}
            <Button title="Debug Clear" onPress={() => debugClearKeys()} />
        </View>
    )
}