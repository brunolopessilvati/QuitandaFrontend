'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.service:MainService
 * @description
 * # MainService
 * MainService of the quitandaApp
 */
angular.module('quitandaApp')
    .service("MainService",["$http", function($http){
        function _find_tipos_produtos(){
             return $http({
                    method: 'GET',
                    url: "http://localhost:8090/tipo-produto/find-all"
                });
            };

        function _dados_resumo (){
             return $http({
                    method: 'GET',
                    url: "http://localhost:8090/estoque/find-resumo-estoque"
                });
            };
            
        return {
            dados_resumo :_dados_resumo,
            find_tipos_produtos : _find_tipos_produtos
        };


        
}]);