app.controller('firstCtrl', ['$scope', function ($scope) {
    $scope.name = "Maayan";

    $scope.start = function () {
        console.log("working");
    };

    $scope.btnClick = function () {
        alert($scope.lastName);
    };

    $scope.games = [
        {
            "id": 1,
            "type": "basketball",
            "title": "NBA Season",
            "image": "basketball.jpg",
            "price": 47,
            "soldOut": false,
            "teams": {
                "home": "LA Lakers",
                "away": "Utah Jazz"
            }
		},
        {
            "id": 2,
            "type": "tennis",
            "title": "French open semi final",
            "image": "tennis.jpeg",
            "price": 30.5,
            "soldOut": true,
            "teams": {
                "home": "Federer",
                "away": "Nadal"
            }
		},
        {
            "id": 3,
            "type": "football",
            "title": "The Superball",
            "image": "football.jpg",
            "price": 92,
            "soldOut": false,
            "teams": {
                "home": "Dallas Cowboys",
                "away": "New York Giants"
            }
		},
        {
            "id": 4,
            "type": "soccer",
            "title": "World Cup first round",
            "image": "soccer.jpg",
            "price": 50.9,
            "soldOut": false,
            "teams": {
                "home": "Brazil",
                "away": "Spain"
            }
		},
        {
            "id": 5,
            "type": "soccer",
            "title": "World Cup first round",
            "image": "soccer.jpg",
            "price": 51.9,
            "soldOut": false,
            "teams": {
                "home": "Brazil",
                "away": "Spain"
            }
		},
        {
            "id": 6,
            "type": "soccer",
            "title": "World Cup first round",
            "image": "soccer.jpg",
            "price": 52.9,
            "soldOut": false,
            "teams": {
                "home": "Brazil",
                "away": "Spain"
            }
		},
        {
            "id": 7,
            "type": "tennis",
            "title": "Wimbeldon finals",
            "image": "tennis.jpg",
            "price": 40,
            "soldOut": false,
            "teams": {
                "home": "Marie",
                "away": "Sela"
            }
		},
        {
            "id": 8,
            "type": "tennis",
            "title": "French open semi finals",
            "image": "tennis.jpg",
            "price": 30,
            "soldOut": false,
            "teams": {
                "home": "nadal",
                "away": "williams"
            }
		},
        {
            "id": 9,
            "type": "tennis",
            "title": "winner league final",
            "image": "basketball.jpg",
            "price": 12,
            "soldOut": true,
            "teams": {
                "home": "Bnei hertzeliya",
                "away": "Ness tziona"
            }
		}
	];

    $scope.students = [
        {
            "name": "Zohar",
            "age": 34
        },
        {
            "name": "Bar",
            "age": 17
        },
        {
            "name": "Ehud",
            "age": 20
        }
    ];

}]);
