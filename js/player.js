//Use this 'cssClassNameForCalendarEvent_AllTime' variable to assign to "cssClassNameForCalendarEvent" in slideDetails if slide needs to be appear whole day.
cssClassNameForCalendarEvent_AllTime = 'allTime';

//Use this 'cssClassNameForCalendarEvent_lunch' variable to assign to "cssClassNameForCalendarEvent" in slideDetails if slide needs to be appear in lunch time.
cssClassNameForCalendarEvent_lunch = 'lunchMenu';


timeChangeData = [

    //27th Nov - only lunch
    {
        "className": cssClassNameForCalendarEvent_lunch,
        "startDate": "11/27/2017 6:00:00",
        "endDate": "11/27/2017 23:59:00"
    }
];


slideDetails = {
    "FoodWastage": {
        "ProducerMessage": "Health First - Signalling a new era in Food Safety and Nutrition",
        "cssClassNameForCalendarEvent": cssClassNameForCalendarEvent_AllTime,
        "ImagePath": "../fd4.jpg",
        "WastagePerWeekInKgs": "1120",
        "NoOfPeople": "2240"
    },
    "FoodSafe": {
        "ProducerMessage": "Health First - Signalling a new era in Food Safety and Nutrition",
        "cssClassNameForCalendarEvent": cssClassNameForCalendarEvent_AllTime,
        "Title": "Your Food Is Safe",
        "ImagePath": "../foodSafe.jpg",
        "Paragraph": "NutriSafe is an initiative by Health First Services to ensure Safety, Quality and Nutrition of food served at the Citrix Cafeteria. The Health First team works passionately along with the Citrix Facilities team to ensure that the food catered to you is safe, healthy and nutritious."
    },
    "FruitOfTheDay": {
        "ProducerMessage": "Health First - Signalling a new era in Food Safety and Nutrition",
        "cssClassNameForCalendarEvent": cssClassNameForCalendarEvent_lunch,
        "Title": "Fruit Of The Day - Banana",
        "ImagePath": "avagado.jpg",
        "Paragraph": "",
        "Bulletpoints": [
            {
                "Point": "Banana is an edible fruit rich in potassium and vitamins."
            },
            {
                "Point": "Banana helps in providing relief from stomach ulcer, diarrhoea & constipation."
            },
            {
                "Point": "Banana aids in treating piles & anaemia."
            },
            {
                "Point": "It reduces inflammation from arthritis & gout, keeps eyes & bones healthy."
            }
        ],
        "Calories": "89",
        "Carbohydrate": "23",
        "Protein": "1.1",
        "Fat": "0.3",
        "Sodium": "1"
    },
    "VideoSlide": {
        "ProducerMessage": "Health First - Signalling a new era in Food Safety and Nutrition",
        "cssClassNameForCalendarEvent": cssClassNameForCalendarEvent_AllTime,
        "VideoPath": "4BestTimesToDrinkWater.mp4"
    },
    "MenuOfTheDay": [
        {
            "cssClassNameForCalendarEvent": cssClassNameForCalendarEvent_lunch,
            "ProducerMessage": "Krishna Grand",
            "Items": [
                {
                    "ImagePath": "BlackChanaSubzi.png",
                    "NutritionistChoice": false,
                    "CatererChoice": true
                },
                {
                    "ItemName": "Black Chana Subji",
                    "ImagePath": "MilaguRasam.png",
                    "NutritionistChoice": true,
                    "CatererChoice": true
                }
            ]
        }
    ]
}