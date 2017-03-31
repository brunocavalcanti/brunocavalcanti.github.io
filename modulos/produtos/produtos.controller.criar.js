angular
    .module('produtos')
    .controller('ProdutosCriarController',ProdutosCriarController )
    
    function ProdutosCriarController($scope, ProdutosService){
        $scope.produto={}

        $scope.salvar = function(produto){
           ProdutosService.salvarProduto(produto)
        }
    }