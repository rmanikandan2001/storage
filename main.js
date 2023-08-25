let foodlist=[
	
	{
		id:1,
	
		name:"Feast Pizza",

		rating:4.0,
		
		cusine:"Pizzas, Beverages",
		
		Time:"22Mins",
	
		
		imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zbgbwzvzz3qt5jdvmqdw",
	
	},
	
	{
	
	
		id:2,
	
		name:"Chilly Restaurant",
		
		cusine:"Chinese, North Indian",
		
		rating:4.0,
		
		Time:"22Mins",
	
		amount:"300 for two",
		
		imgurl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/drogl9jogiiitjlbumpx",
		
	},
	
	{

	
		id:3,
	
		name:"Chilly Restaurant",
		
		cusine:"Chinese, North Indian",
		
		rating:4.0,
		
		Time:"22Mins",
	
		amount:"300 for two",
		
		imgurl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n0zsfjymrxlimdat8ahb",
		
	},

	{	
		id:4,
	
		name:"Chilly Restaurant",
		
		cusine:"Chinese, North Indian",
		
		rating:4.0,
		
		Time:"22Mins",
	
		amount:"300 for two",
		
		imgurl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/i7lriqtto2wbnpktvqbo",
		
	}
	
	]
	
	
	localStorage.setItem('food', JSON.stringify(foodlist));
	
	console.log(localStorage.getItem('food'));
	
	let retrieveData=JSON.parse(localStorage.getItem('food'))
	
	console.log(retrieveData);
	
	