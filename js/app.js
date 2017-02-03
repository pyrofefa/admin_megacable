
// Creación del módulo
var rutas = angular.module('rutas', ['ngRoute','ngResource']);

// Configuración de las rutas
rutas.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'view/inicio.html',
            controller  : 'inicioController'
        })
        .when('/banner_view', {
            templateUrl : 'view/banner_view.html',
            controller  : 'banner_viewController'
        })
        .when('/banner_view/add', {
            templateUrl : 'view/add_banner_view.html',
            controller  : 'banner_viewController'
        })
        .when('/banner_view/update/:param', {
            templateUrl : 'view/update_banner_view.html',
            controller  : 'update_banner_viewController'
        })
        .when('/banner_footer', {
            templateUrl : 'view/banner_footer.html',
            controller  : 'banner_footerController'
        })
        .when('/banner_footer/add', {
            templateUrl : 'view/add_banner_footer.html',
            controller  : 'banner_footerController'
        })
        .when('/banner_footer/update/:param', {
            templateUrl : 'view/update_banner_footer.html',
            controller  : 'update_banner_footerController'
        })
		.when('/fox_mas', {
            templateUrl : 'view/fox_mas.html',
            controller  : 'fox_masController'
        })
        .when('/fox_mas/add', {
            templateUrl : 'view/add_fox_mas.html',
            controller  : 'fox_masController'
        })
        .when('/fox_mas/update/:param', {
            templateUrl : 'view/update_fox_mas.html',
            controller  : 'update_fox_masController'
        })
		.when('/hbo_max', {
            templateUrl : 'view/hbo_max.html',
            controller  : 'hbo_maxController'
        })
        .when('/hbo_max/add', {
            templateUrl : 'view/add_hbo_max.html',
            controller  : 'hbo_maxController'
        })
        .when('/hbo_max/update/:param', {
            templateUrl : 'view/update_hbo_max.html',
            controller  : 'update_hbo_maxController'
        })
		.when('/peliculas', {
            templateUrl : 'view/peliculas.html',
            controller  : 'peliculasController'
        })
        .when('/peliculas/add', {
            templateUrl : 'view/add_peliculas.html',
            controller  : 'peliculasController'
        })
        .when('/peliculas/update/:param', {
            templateUrl : 'view/update_peliculas.html',
            controller  : 'update_peliculasController'
        })
        .when('/ppv', {
            templateUrl : 'view/ppv.html',
            controller  : 'ppvController'
        })
        .when('/ppv/add', {
            templateUrl : 'view/add_ppv.html',
            controller  : 'ppvController'
        })
        .when('/ppv/update/:param', {
            templateUrl : 'view/update_ppv.html',
            controller  : 'update_ppvController'
        })
        .when('/promos', {
            templateUrl : 'view/promos.html',
            controller  : 'promosController'
        })
        .when('/promos/add', {
            templateUrl : 'view/add_promos.html',
            controller  : 'promosController'
        })
        .when('/promos/update/:param', {
            templateUrl : 'view/update_promos.html',
            controller  : 'update_promosController'
        })
        .when('/television', {
            templateUrl : 'view/television.html',
            controller  : 'televisionController'
        })
        .when('/television/add', {
            templateUrl : 'view/add_television.html',
            controller  : 'televisionController'
        })
        .when('/television/update/:param', {
            templateUrl : 'view/update_television.html',
            controller  : 'update_televisionController'
        })
        .when('/internet', {
            templateUrl : 'view/internet.html',
            controller  : 'internetController'
        })
        .when('/internet/add', {
            templateUrl : 'view/add_internet.html',
            controller  : 'internetController'
        })
        .when('/internet/update/:param', {
            templateUrl : 'view/update_internet.html',
            controller  : 'update_internetController'
        })
        .when('/telefonia', {
            templateUrl : 'view/telefonia.html',
            controller  : 'telefoniaController'
        })
        .when('/telefonia/add', {
            templateUrl : 'view/add_telefonia.html',
            controller  : 'telefoniaController'
        })
        .when('/telefonia/update/:param', {
            templateUrl : 'view/update_telefonia.html',
            controller  : 'update_telefoniaController'
        })
        .when('/paquetes', {
            templateUrl : 'view/paquetes.html',
            controller  : 'paquetesController'
        })
        .when('/paquetes/add', {
            templateUrl : 'view/add_paquetes.html',
            controller  : 'paquetesController'
        })
        .when('/paquetes/update/:param', {
            templateUrl : 'view/update_paquetes.html',
            controller  : 'update_paquetesController'
        })
        .when('/tv_en_vivo', {
            templateUrl : 'view/tv_en_vivo.html',
            controller  : 'tv_en_vivoController'
        })
        .when('/tv_en_vivo/add', {
            templateUrl : 'view/add_tv_en_vivo.html',
            controller  : 'tv_en_vivoController'
        })
        .when('/tv_en_vivo/update/:param', {
            templateUrl : 'view/update_tv_en_vivo.html',
            controller  : 'update_tv_en_vivoController'
        })
        .when('/programas_tv', {
            templateUrl : 'view/programas_tv.html',
            controller  : 'programas_tvController'
        })
        .when('/programas_tv/add', {
            templateUrl : 'view/add_programas_tv.html',
            controller  : 'programas_tvController'
        })
        .when('/programas_tv/update/:param', {
            templateUrl : 'view/update_programas_tv.html',
            controller  : 'update_programas_tvController'
        })
        .when('/networks', {
            templateUrl : 'view/networks.html',
            controller  : 'networksController'
        })
        .when('/networks/add', {
            templateUrl : 'view/add_networks.html',
            controller  : 'networksController'
        })
        .when('/networks/update/:param', {
            templateUrl : 'view/update_networks.html',
            controller  : 'update_networksController'
        })
        /*final*/  
        .otherwise({
            redirectTo: '/'
        });

});
rutas.controller('inicioController', function($scope) 
{});
rutas.controller('banner_viewController',['$scope', 'imagen', '$http', function ($scope, imagen, $http)
{
    /*traer*/
    $http({
        method:"get",
        url: "http://localhost/api_megacable/listaimagenes"
        }).success(function(data){
            $scope.datos=data;
            //console.log(data);
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Agregar*/
        $scope.agregar_banner_view = function()
        {
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_banner_view(file, nombre,descripcion).then(function(res)
            {
                //console.log(res);
            });
            $http({
                method:"post",
                url: "http://localhost/api_megacable/agregarlistaimagenes",
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos guardados con exito");
                window.location.href="#/banner_view";
            }).error(function(data){
                alert("Ha ocurrido un error al guardar los datos");
                //console.log(data);
            })
        }

        /*Eliminar banner view*/
        $scope.eliminar_banner_view=function(id,ruta)
        {
            //console.log(id);
            //console.log(ruta);

            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagen/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });
            //Elminar banner view
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarlistaimagen/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
                })
        }
}]);

rutas.controller('banner_footerController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
   $http({
        method:"get",
        url: "http://localhost/api_megacable/listaimagenesfooter"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_banner_footer=function(id,ruta)
        {
            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagenfooter/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarlistaimagenfooter/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_banner_footer = function()
        {
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_banner_footer(file, nombre,descripcion).then(function(res)
            {
                //console.log(res);
            });
            $http({
                method:"post",
                url: "http://localhost/api_megacable/agregarlistaimagenesfooter",
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos guardados con exito");
                window.location.href="#/banner_footer";
            }).error(function(data){
                alert("Ha ocurrido un error al guardar los datos");
                //console.log(data);
            })
        }        
}]);
rutas.controller('fox_masController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http)
{
    $scope.mes = new Date();
     $http({
        method:"get",
        url: "http://localhost/api_megacable/fox_mas"}).success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar*/
        $scope.eliminar_fox_mas=function(id,ruta)
        {
            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagenfox_mas/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarfox_mas/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
                })
        }
        /*agregas pelicula*/
        $scope.agregar_fox_mas=function()
        {
            $scope.parent = {fecha};
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.fecha;
            var file = $scope.file;
            var directorio=$scope.file.name;
            
            imagen.agregar_fox_mas(file,nombre,descripcion,mes).then(function(res){
                //console.log(res);
            });
            $http({
                method:"post",
                url: "http://localhost/api_megacable/agregarfox_mas",
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos guardados con exito");
                window.location.href="#/fox_mas";
            }).error(function(data){
                alert("Ha ocurrido un error al guardar los datos");
                //console.log(data);
            })
        }        
}]);
rutas.controller('hbo_maxController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http)
{
    $scope.mes = new Date();
    $http({
        method:"get",
        url: "http://localhost/api_megacable/hbo_max"
        }).success(function(data){
            $scope.datos=data;
            //console.log(data);
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });

    $scope.eliminar_hbo_max=function(id,ruta)
    {
        $http({
        method:"delete",
        url: "http://localhost/api_megacable/eliminarimagenhbo/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
        });

        $http({
        method:"delete",
        url: "http://localhost/api_megacable/eliminarhbo_max/"+id
            }).success(function(data){
                alert("Datos eliminados con exito");
                location.reload();
            }).error(function(data){
                alert("Ha ocurrido un error al eliminar los datos");
            })
    }        
    $scope.agregar_hbo_max=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#guardando").show();
            $scope.parent = {fecha};
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.fecha;
            var file = $scope.file;
            var directorio=$scope.file.name;
            
            imagen.agregar_hbo_max(file,nombre,descripcion,mes).then(function(res){
                //console.log(res);
            });
            $http({
                method:"post",
                url: "http://localhost/api_megacable/agregarhbo_max",
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos Guardados con exito");
                window.location.href="#/hbo_max";
            }).error(function(data){
                alert("Ha ocurrido un error al guardar los datos");
                //console.log(data);
            })
        }    
    }
}]);
rutas.controller('peliculasController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
    $scope.mes = new Date();
    $http({
        method:"get",
        url: "http://localhost/api_megacable/peliculas"}).success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });
        $scope.eliminar_pelicula=function(id,ruta)
        {
            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagenpeliculas/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });

            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarpelicula/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
                })
        }
        /*agregas pelicula*/
    $scope.agregar_pelicula=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#guardando").show();
            $scope.parent = {fecha};
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.fecha;
            var file = $scope.file;
            var directorio=$scope.file.name;
            
            imagen.agregar_pelicula(file,nombre,descripcion,mes).then(function(res){
                //console.log(res);
            });
            $http({
                method:"post",
                url: "http://localhost/api_megacable/agregarpelicula",
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos Actualizados con exito");
                window.location.href="#/peliculas";
            }).error(function(data){
                alert("Ha ocurrido un error al guardar los datos");
                //console.log(data);
            })
        }    
    }

}]);
rutas.controller('ppvController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
    $scope.mes = new Date();
    $http({
        method:"get",
        url: "http://localhost/api_megacable/ppv"
        }).success(function(data){
            $scope.datos=data;
            //console.log(data);
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });
        
        $scope.eliminar_ppv=function(id,ruta)
        {
            //console.log(id);
            //console.log(ruta);

            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagenppv/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });
            
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarppv/"+id
                }).success(function(data){
                    alert("Datos Eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
                })
        }
        $scope.agregar_ppv=function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                $scope.parent = {fecha};
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;
                var mes=$scope.fecha;
                var file = $scope.file;
                var directorio=$scope.file.name;
                
                imagen.agregar_ppv(file,nombre,descripcion,mes).then(function(res){
                    //console.log(res);
                });
                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregarppv",
                    data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
                }).success(function(data){
                    alert("Datos guardados con exito");
                    window.location.href="#/ppv";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    //console.log(data);
                })
            }    
        }
}]);
rutas.controller('promosController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/promociones"}).success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_promo=function(id,ruta)
        {
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarimagenpromos/"+ruta
                }).success(function(data){
                    //console.log(data);
                    $scope.datos=data;
                }).error(function(data){
                    //alert("Ha ocurrido un error al eliminar imagen ");
            });
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarpromo/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
                })
        }
        $scope.agregar_promos = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;
                var encabezado=$scope.encabezado;
                var file = $scope.file;
                var directorio=$scope.file.name;

                imagen.agregar_promos(file, nombre,descripcion,encabezado).then(function(res)
                {
                    //console.log(res);
                });
                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregarpromos",
                    data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion,'encabezado' : encabezado})
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/promos";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('televisionController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/cable"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_television=function(id,ruta)
        {
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarcable/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_tv = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var numero_canales=$scope.numero_canales;
                var numero_musica=$scope.numero_musica;
               

                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregartelevision",
                    data: ({ 'nombre' : nombre , 'numero_canales' :  numero_canales, 'numero_musica' : numero_musica })
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/television";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('internetController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/internet"})
        .success(function(data)
        {   
            $scope.datos = [];
            $scope.datos = data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_internet=function(id,ruta)
        {
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarinternet/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_internet = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var velocidades = $scope.velocidades;
                var descripcion=$scope.descripcion;

                var file = $scope.file;
                var directorio=$scope.file.name;

                imagen.agregar_internet(file, velocidades, descripcion).then(function(res)
                {
                    //console.log(res);
                });

               $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregarinternet",
                    data: ({ 'velocidades' : velocidades , 'descripcion' :  descripcion, 'ruta' : directorio })
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/internet";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('paquetesController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/paquete_tres"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_internet=function(id,ruta)
        {
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarinternet/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
}]);
rutas.controller('telefoniaController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/telefonia"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_telefonia=function(id)
        {
            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminartelefonia/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_telefonia = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;

               $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregartelefonia",
                    data: ({ 'nombre' : nombre , 'descripcion' :  descripcion })
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/telefonia";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('tv_en_vivoController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/tv_en_vivo"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_tv_en_vivo=function(id,ruta)
        {

            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagentv_en_vivo/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });

            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminartv_en_vivo/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_tv_en_vivo = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;
                var file = $scope.file;
                var directorio=$scope.file.name;

                imagen.agregar_tv_en_vivo(file, nombre, descripcion).then(function(res)
                {
                    //console.log(res);
                });
                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregar_tv_en_vivo",
                    data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion})
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/tv_en_vivo";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('networksController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/networks"})
        .success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        /*Eliminar banner footer*/
        $scope.eliminar_networks=function(id,ruta)
        {

            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagennetworks/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });

            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarnetworks/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_networks = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;
                var file = $scope.file;
                var directorio=$scope.file.name;

                imagen.agregar_networks(file, nombre, descripcion).then(function(res)
                {
                    //console.log(res);
                });
                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregarnetwork",
                    data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion})
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/networks";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('programas_tvController', ['$scope', 'imagen', '$http', function ($scope, imagen, $http) 
{
        $http({
        method:"get",
        url: "http://localhost/api_megacable/programas_tv"
        }).success(function(data)
        {
            $scope.datos=data;
            $("#cargando").hide();
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
        });

        $scope.eliminar_programas_tv=function(id,ruta)
        {

            $http({
                method:"delete",
                url: "http://localhost/api_megacable/eliminarimagenprogramas_tv/"+ruta
            }).success(function(data){
                //console.log(data);
                $scope.datos=data;
            }).error(function(data){
                //alert("Ha ocurrido un error al eliminar imagen ");
            });

            $http({
            method:"delete",
            url: "http://localhost/api_megacable/eliminarprogramas_tv/"+id
                }).success(function(data){
                    alert("Datos eliminados con exito");
                    location.reload();
                }).error(function(data){
                    alert("Ha ocurrido un error al eliminar los datos");
            })
        }
        $scope.agregar_programas_tv = function()
        {
            if ($scope.miFormulario.$valid) 
            {
                $("#guardando").show();
                var nombre = $scope.nombre;
                var descripcion=$scope.descripcion;
                var file = $scope.file;
                var directorio=$scope.file.name;

                imagen.agregar_programas_tv(file, nombre, descripcion).then(function(res)
                {
                    //console.log(res);
                });
                $http({
                    method:"post",
                    url: "http://localhost/api_megacable/agregarprogramas_tv",
                    data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion})
                }).success(function(data){
                    alert("Datos Guardados con exito");
                    window.location.href="#/programas_tv";
                }).error(function(data){
                    alert("Ha ocurrido un error al guardar los datos");
                    console.log(data);
                })
            }    
        }
}]);
rutas.controller('update_tv_en_vivoController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/tv_en_vivo/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.ruta=data.ruta;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_tv_en_vivo=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_tv_en_vivo(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizartv_en_vivo/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/tv_en_vivo";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_programas_tvController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/programas_tv/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.ruta=data.ruta;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_programas_tv=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_programas_tv(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarprogramas_tv/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/programas_tv";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_internetController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
     $http({
        method:"get",
        url: "http://localhost/api_megacable/internet/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.velocidades=data.velocidades;
            $scope.descripcion=data.descripcion;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    $scope.agregar_internet=function()
    {
       if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var velocidades = $scope.velocidades;
            var descripcion = $scope.descripcion;
            console.log(velocidades);
            console.log(descripcion);
         
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarinternet/"+id,
                data: ({'velocidades' : velocidades, 'descripcion' : descripcion})
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/internet";
            }).error(function(data){
                console.log(data);
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_networksController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/networks/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.ruta=data.ruta;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_networks=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_networks(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarnetworks/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/networks";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_televisionController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/cable/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.numero_canales=data.numero_canales;
            $scope.numero_musica=data.numero_musica;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_tv=function()
    {
       if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var numero_canales = $scope.numero_canales;
            var numero_musica = $scope.numero_musica;
         

           $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarcable/"+id,
                data: ({'nombre' : nombre, 'numero_musica' : numero_musica, 'numero_canales' : numero_canales})
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/television";
            }).error(function(data){
                console.log(data);
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_telefoniaController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/telefonia/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_telefonia=function()
    {
       if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion = $scope.descripcion;
         
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizartelefonia/"+id,
                data: ({'nombre' : nombre, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/telefonia";
            }).error(function(data){
                console.log(data);
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);
rutas.controller('update_banner_viewController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams) 
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/listaimagenes/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.ruta=data.ruta;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner view*/
    $scope.agregar_banner_view=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_banner_view(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarlistaimagenes/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/banner_view";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }

}]);

rutas.controller('update_banner_footerController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/listaimagenesfooter/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar Banner footer*/
    $scope.agregar_banner_footer=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_banner_footer(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarlistaimagenesfooter/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/banner_footer";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }
    }
}]);

rutas.controller('update_promosController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/promociones/"+id
    }).success(function(data){
            console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.encabezado=data.encabezado;
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar promo*/
    $scope.agregar_promos=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var encabezado=$scope.encabezado;
            var file = $scope.file;
            var directorio=$scope.file.name;

            imagen.agregar_promos(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarpromo/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'encabezado' : encabezado })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/promos";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }
}]);

rutas.controller('update_peliculasController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/peliculas/"+id
    }).success(function(data){
            console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.mes=data.mes;
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar pelicula*/
    $scope.agregar_pelicula=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.mes;
            var file = $scope.file;
            var directorio=$scope.file.name;
            
            imagen.agregar_pelicula(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarpelicula/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/peliculas";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    } 
}]);
rutas.controller('update_hbo_maxController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/hbo_max/"+id
    }).success(function(data){
            console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.mes=data.mes;
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar pelicula*/
    $scope.agregar_hbo_max=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.mes;
            var file = $scope.file;
            var directorio=$scope.file.name;
          
            imagen.agregar_hbo_max(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarhbo_max/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/hbo_max";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }  
}]);
rutas.controller('update_ppvController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/ppv/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.mes=data.mes;

    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar pelicula*/
    $scope.agregar_ppv=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.mes;
            var file = $scope.file;
            var directorio=$scope.file.name;
          
            imagen.agregar_ppv(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarppv/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/ppv";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    }
}]);

rutas.controller('update_fox_masController',['$scope', 'imagen', '$http', '$routeParams', function($scope, imagen, $http,$routeParams)  
{
    //console.log($routeParams.param);
    var id=$routeParams.param
    
    $http({
        method:"get",
        url: "http://localhost/api_megacable/fox_mas/"+id
    }).success(function(data){
            //console.log(data);
            $scope.datos=data;
            $scope.nombre=data.nombre;
            $scope.descripcion=data.descripcion;
            $scope.mes=data.mes;
    }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
    
    /*Actualizar pelicula*/
    $scope.agregar_fox_mas=function()
    {
        if ($scope.miFormulario.$valid) 
        {
            $("#actualizando").show();
            var nombre = $scope.nombre;
            var descripcion=$scope.descripcion;
            var mes=$scope.mes;
            var file = $scope.file;
            var directorio=$scope.file.name;
          
            imagen.agregar_fox_mas(file).then(function(res){
                //console.log(res);
            });
            
            $http({
                method:"put",
                url: "http://localhost/api_megacable/actualizarfox_mas/"+id,
                data: ({'nombre' : nombre , 'ruta' :  directorio, 'descripcion' : descripcion, 'mes' : mes })
            }).success(function(data){
                alert("Datos actualizados con exito");
                window.location.href="#/fox_mas";
            }).error(function(data){
                alert("Ha ocurrido un error al actualizar los datos");
                //console.log(id);
            })
        }    
    } 
}]);

/*Captuando propiedades del archivo de imagen file*/
rutas.directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])
rutas.service('imagen', ["$http", "$q", function ($http, $q) 
{
    /*Agregar Nueva Imagen de banner view*/
    this.agregar_banner_view = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagen", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    /*Agregando imagen en banner footer*/
    this.agregar_banner_footer = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagenfooter", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    /*Agregando imagen en  promos*/
    this.agregar_promos = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);

        return $http.post("http://localhost/api_megacable/insertarimagenpromos", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    /*Agregando imagen en pelicula*/
    this.agregar_pelicula = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);

        return $http.post("http://localhost/api_megacable/insertarimagenpeliculas", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    /*Agregando imagen en hbo max */
    this.agregar_hbo_max = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);

        return $http.post("http://localhost/api_megacable/insertarimagenhbo", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }

     /*Agregando imagen en  ppv */
    this.agregar_ppv = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        
        return $http.post("http://localhost/api_megacable/insertarimagenppv", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
     /*Agregando imagen en  fox mas */
    this.agregar_fox_mas = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagenfox_mas", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
     /*Agregando imagen en  fox mas */
    this.agregar_networks = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagennetwork", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    this.agregar_programas_tv = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagenprogramas_tv", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    this.agregar_internet = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimageninternet", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
    this.agregar_tv_en_vivo = function(file)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("file", file);
        return $http.post("http://localhost/api_megacable/insertarimagentv_en_vivo", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }
}])