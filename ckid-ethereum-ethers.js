const { ethers } = require("ethers");

function createCkidFromAddress(address) {
    if (address.slice(0, 2) != "0x") {
        throw new Error("Address needs to be a hexidecimal string that begins with '0x'");
    }
    
    if (address.length != 42) {
        throw new Error("Address needs to be an Etheruem address 42 hex characters long");
    }
    
    const checksumAddress = ethers.utils.getAddress(address);
    console.log("checksumAddress = " + checksumAddress);
    const prependedAddress = checksumAddress.slice(0, 2) + "0001" + checksumAddress.slice(2);
    console.log("prependedAddress = " + prependedAddress);
    const ckid = ethers.utils.hexZeroPad(prependedAddress, 32);
    console.log("ckid = " + ckid);

    return ckid;
}
