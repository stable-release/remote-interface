import "react-native-get-random-values";

import "@ethersproject/shims";

import {HDNodeWallet} from 'ethers';

export default function createHDWallet(password = "") {
    const my_wallet = HDNodeWallet.createRandom(password);
    return my_wallet;
}
