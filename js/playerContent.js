var app = angular.module("playerApp", []);

app.directive("repeatEnd", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            if (scope.$last) {
                scope.$eval(attrs.repeatEnd);
            }
        }
    };
});

app.controller("playerController", function ($scope, $timeout) {

    $scope.launchSlick = function () {
        setTimeout(function () {
            $(".centerDiv").slick({
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: false
            });
        }, 100);

    };

    $scope.playerData = slideDetails;
    console.log($scope.playerData);

    $scope.foodWastage = $scope.playerData.FoodWastage;
    $scope.foodSafe = $scope.playerData.FoodSafe;
    $scope.fruitOfTheDay = $scope.playerData.FruitOfTheDay;
    $scope.videoSlide = $scope.playerData.VideoSlide;
    $scope.menuOfTheDay = $scope.playerData.MenuOfTheDay;
});

