export const mealPackage = [
    {
        packageName: 'Monthly (Mon-Fri)',
        packagePrice: 2999,
        packageSize: 'full',
        packageType: 'Veg',
        days:22,
        payToKitchenPerMeal: 65,
        vegMealDescription:'2 Roti, Chawal, Dal, 2 Sabji',
        nonVegMealDescription:'2 Roti, Chawal, Dal, Chicken Curry',
        deliveryOnWeekends: false,
        addonsList:[
            {addonName:'Go Green', extraPrice:30,selected:false,payKitchenExtraPerMeal:0,daily:true},       
            {addonName:'Non-veg on wednesdays',extraPrice:300,selected:false,payKitchenExtraPerMeal:20,day:4,addOnType:'NonVeg',daily:false},
            {addonName:'Non-veg on Fridays',extraPrice:300,selected:false,payKitchenExtraPerMeal:20,day:4,addOnType:'NonVeg',daily:false},
            {addonName:'Daily Sweet',extraPrice: 200,selected:false,payKitchenExtraPerMeal:10,addOnType:'Sweet',daily:true},
            {addonName:'Include Sundays',extraPrice: 300,selected:false,payKitchenExtraPerMeal:0,day:1,addOnType:'Veg',daily:false},
            {addonName:'Include Saturdays',extraPrice: 300,selected:false,payKitchenExtraPerMeal:0,day:7,addOnType:'Veg',daily:false},
        ]
    }
]