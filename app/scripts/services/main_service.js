'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quitandaApp
 */
angular.module('quitandaApp')
    .service("main_service",["$http", function($http){
        function _dados_resumo (){
             return $http({
                    method: 'GET',
                    url: "http://localhost:8090/estoque/find"
                });
            };
        return {
            dados_resumo :_dados_resumo
        };


        
}]);