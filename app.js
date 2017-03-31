angular
    .module('app',['ui.router','produtos'])
    .controller('indexController',indexController )
    .config(config)
    
    function indexController($scope){

    }
    function config($stateProvider,$urlRouterProvider){
                $stateProvider
                    .state('index', {
                    url: '/index',
                    controller: 'indexController',
                    templateUrl: 'index.html'
                })
                 $urlRouterProvider.otherwise('/produtos/criar')
    }