angular
    .module('produtos')
    .controller('ProdutosController',ProdutosController )
    
    function ProdutosController($scope, ProdutosService,$state){
       $scope.produtos =[];
   
        $scope.obterTodosProdutos = function(){
           $scope.produtos = ProdutosService.obterProdutos();
        }
        $scope.obterTodosProdutos();

          $scope.apagarProduto = function(produto){
            $scope.produtos = ProdutosService.apagarProduto(produto);
        }
           $scope.editar = function(produto){ 
              $state.go('produtosEditar', { id: produto.codigo })
   
    }
    }