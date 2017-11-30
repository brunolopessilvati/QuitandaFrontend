'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quitandaApp
 */
angular.module('quitandaApp')
    .service("produtos_service",["$http", function($http){
         function _dados_tabela (){
             return $http({
                    method: 'GET',
                    url: "http://localhost:8090/produto/find-all"
                });
            };
        return {
            dados_tabela :_dados_tabela
        };
}]);