var app = angular.module('agroCalc', []);
app.controller('calcMudas', function($scope){
    let areaCanteiro = 0;
    let areaEspacamento = 0;

    $scope.calcularMudas = function(data){
        if (data) {
            areaCanteiro = (data.largura * data.comprimento);
            areaEspacamento = (data.espacColunas * data.espacLinhas);
            $scope.totalMudasPorCanteiro = (areaCanteiro / areaEspacamento);
            $scope.totalMudas = ($scope.totalMudasPorCanteiro * data.nroCanteiros);
            $scope.totalMudasPerda = ($scope.totalMudas + ($scope.totalMudas * 0.1));
            $scope.message = "";
        } else {
            $scope.message = "Erro preencha os campos!";
        }
    }

    $scope.limpar = function () {
        delete $scope.data;
        delete $scope.totalMudasPorCanteiro;
        delete $scope.totalMudas;
        delete $scope.totalMudasPerda;
    }
});

app.controller('calcAdubo', function($scope){
    $scope.options = ["N", "P", "K"];
    let hectarMetrosQuadrado = 10000;

    $scope.calcular = function (data) {
        $scope.valorNutricional =  ((data.recoNutriente * data.areaParcela) / hectarMetrosQuadrado);
        $scope.qtdeAduboParcela = (((data.doseAdubo * $scope.valorNutricional) / data.pctNutriente) * 1000);
    }

    $scope.limpar = function () {
        delete $scope.data;
        delete $scope.valorNutricional;
        delete $scope.qtdeAduboParcela;
    }
});