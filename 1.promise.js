//reject代表失败态，resolve和reject均是函数
let p = new Promise((resolve,reject)=>{
	setTimeout(function () {
		let a = '蘑菇';
		resolve(a);
	},2000)
})
p.then(data=>{console.log(data)},()=>{})

function buyPack() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Math.random()>0.5) {
				resolve('买');
			} else {
				reject('不买')
			}
		},Math.random()*1000)
	});
}
buyPack().then(data=>{console.log(data)},data=>{console.log(data)})

