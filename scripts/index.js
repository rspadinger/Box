module.exports = async function main(callback) {
  try {
    // Our code will go here
    const accounts = await web3.eth.getAccounts();
    //console.log(accounts);

    const Box = artifacts.require("Box");
    const box = await Box.deployed();

    value = await box.retrieve();
    console.log("Box value is", value.toString());

    // Send a transaction to store() a new value in the Box
    await box.store(23);
    value = await box.retrieve();
    console.log("New Box value is", value.toString());

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
