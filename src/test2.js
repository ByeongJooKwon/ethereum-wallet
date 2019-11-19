var test = require('./wallets.js');

const testFm = async() =>{
	var walletinfo = await test.getWallets();
	console.log(walletinfo);
}


testFm();
