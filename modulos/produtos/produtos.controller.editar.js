angular
    .module('produtos')
    .controller('ProdutosEditarController',ProdutosEditarController )
    
    function ProdutosEditarController($scope, ProdutosService,produtoParaEditar,$state){
        $scope.produto=produtoParaEditar;
        $scope.produtoAux = angular.copy(produtoParaEditar);      
        $scope.editarProduto = function(produto){
              ProdutosService.editarProduto(produtoAux,produto);
               $state.go('produtosLista');

            }
        
    }