export function test() {
	const myCatInfo = {
		name: 'riru',
		age: 5,
		birthDay: 'April'
	}

	console.log(myCatInfo?.favoriteFood)
	console.log(myCatInfo?.name + '|' + myCatInfo?.birthDay)
}