var WalletsContent = require('./wallets');

var wallet = new WalletsContent();

console.log(wallet, ' : this console test');
/*
wallet.create("jacob@neuralbc.com", "1234").then((w) => {
    console.log(w);
});
*/
setTimeout(() => {
    //wallet.send(0.0000003, 'mrG9FnbqJtMHEqdYjyw5Jc6AiM4jTMr5Sj', 100000, "1234");
//	console.log(wallet.state.sourceWallet[0], ' : this console wallet');
	wallet.setSourceWallet(1);
	console.log(wallet);
	wallet.setSourceWallet(2);
	console.log(wallet);
	wallet.setSourceWallet(0);
	console.log(wallet);
	wallet.send(0.000003, 'mhhuJfZvDRmkHJCnPeFtsrN7TnHzQMzWb5', 100000, "1234");
}, 1000);









function SendMethod(email, counts, fee, addr, pass) {
	setTimeout(() => {
	let data = wallet.state.getWallets();
	let result = data.forEach((value, index, array) => { console.log(data[index].__name); });
	console.log(result);
	},1000);
}
