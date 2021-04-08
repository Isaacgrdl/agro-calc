var app = angular.module('agroCalc', []);
app.controller('calcMudas', function($scope){
    let areaCanteiro = 0;
    let areaEspacamento = 0;

    $scope.calcularMudas = function(data){
        areaCanteiro = (data.largura * data.comprimento);
        areaEspacamento = (data.espacColunas * data.espacLinhas);
        $scope.totalMudas = (areaCanteiro / areaEspacamento);
    }
});
