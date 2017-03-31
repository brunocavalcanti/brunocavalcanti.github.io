    angular
        .module('produtos')
        .config(config)
        function config($stateProvider){
            $stateProvider
                .state('produtosLista', {
                    url: '/produtos/lista',
                    controller: 'ProdutosController',
                    templateUrl: './modulos/produtos/produtos.lista.html'
                })
                .state('produtosCriar', {
                    url: '/produtos/criar',
                    controller: 'ProdutosCriarController',
                    templateUrl: './modulos/produtos/produtos.criar.html'
                })
                  .state('produtosEditar', {
                    url: '/produtos/:id/produtosEditar',
                    controller: 'ProdutosCriarController',
                    templateUrl: './modulos/produtos/produtos.criar.html',
                    resolve: {
                        produtoParaEditar: produtoParaEditar
                    }
                })

                 produtoParaEditar.$inject = ['ProdutosService', '$stateParams']
                function produtoParaEditar(ProdutosService, $stateParams) {
                        return ProdutosService.buscarProduto($stateParams.id)
                }

        }
