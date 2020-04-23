
const GetRemainTime = deadline => {
	let now = new Date(),
	remainTime = (new Date(deadline) - now + 1000) / 1000,
	

 return {
 	remainTime
 	}

};

console.log(getRemainTime('Apr 29 2020 21:04:13 GMT-0400'));    