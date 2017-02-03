$( document ).ready(function() {

    $.ajax({
        url: "http://localhost/api_megacable/cable",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                //console.log(data);
                $.each(data, function(index, data){
                    $("#television").append("<td><input type='radio' name='television' class='rbtelevision' value='"+data.id+"'></td>");
                    $("#television").append("<td>"+data.nombre+"</td>");
                    $("#television").append("<td>"+data.numero_canales+" Canales</td>");
                    $("#television").append("<td>"+data.numero_musica+" Canales de Musica</td>");
                });
            },
            error: function (response) {
                alert("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                alert("failure");
                console.log(response);
            }
    });

    $.ajax({
        url: "http://localhost/api_megacable/internet",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                //console.log(data);
                $.each(data, function(index, data){
                    $("#internet").append("<td><input type='radio' name='internet' class='rbinternet' value='"+data.id+"'></td>");
                    $("#internet").append("<td>"+data.velocidades+" Mbps</td>");
                 });
            },
            error: function (response) {
                alert("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                alert("failure");
                console.log(response);
            }
    });

    $.ajax({
        url: "http://localhost/api_megacable/telefonia",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                //console.log(data);
                $.each(data, function(index, data){
                    $("#telefonia").append("<td><input type='radio' name='telefonia' class='rbtelefonia' value='"+data.id+"'></td>");
                    $("#telefonia").append("<td>"+data.nombre+"</td>");
                 });
            },
            error: function (response) {
                alert("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                alert("failure");
                console.log(response);
            }
    });

    $("#registro").click(function(){
        var tipo = $("#tipo").val();
        var television = $(".rbtelevision:checked").val();
        var internet = $(".rbinternet:checked").val();
        var telefonia = $(".rbtelefonia:checked").val();
        var precio = $("#precio").val();
        var precio_pronto = $("#precio_pronto").val();

        var datos = {'precio' :  precio, 'precio_pronto' :  precio_pronto, 'tipo' :  tipo, 'id_television' :  television, 'id_telefonia' : telefonia  , 'id_internet' : internet};

        console.log(datos);
        $.ajax({
            url: "http://localhost/api_megacable/agregarpaquete",
            type: 'post',
            data: JSON.stringify(datos),
            dataType: 'json'
        }).done(function () {
            alert("datos agregados correctamente");
            //window.location.href="#/paquetes";
        }).fail(function () {
            alert("datos agregados correctamente");
            window.location.href="#/paquetes";
        })
       
    });

});