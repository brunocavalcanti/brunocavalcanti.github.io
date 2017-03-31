    angular
        .module('produtos')
        .factory('ProdutosService', ProdutosService )
        
        function ProdutosService(){
            var listaProdutos =[];
            var service ={
                salvarProduto : salvarProduto,
                obterProdutos : obterProdutos,
                apagarProduto : apagarProduto,
                buscarProduto : buscarProduto,
                editarProduto : editarProduto
                
            }
            function salvarProduto(produto){
                var produtosalvar = angular.copy(produto)
                listaProdutos.push(produtosalvar);
            }
            function obterProdutos(){
                return listaProdutos;
            }
            function apagarProduto(produto){
               console.log(produto)
                listaProdutos = listaProdutos.filter(p => p.codigo != produto.codigo);
                return listaProdutos;
            }
            function buscarProduto(id){
                return listaProdutos.filter(p => p.codigo === codigo);
            }
            function   editarProduto (produtoOld, produtoNovo){
                var index = listaProdutos.indexOf(produtoOld);
                listaProdutos[index] = angular.copy(produtoOld);
            }
            return service;
        }