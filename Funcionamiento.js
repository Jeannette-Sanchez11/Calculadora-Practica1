$(document).ready(function() {
    $("#ejecucion1").click(function() {

        var valorInput1 = $("#entrada1").val();
        console.log("Valor del input 1:", valorInput1);
        var num1 = parseInt(valorInput1);

        var valorInput2 = $("#entrada2").val();
        console.log("Valor del input 2:", valorInput2);
        var num2 = parseInt(valorInput2);

        var opcElegida = $("#opcionesElegir").val();
        console.log("opc elegida:", opcElegida);
        var opcConver= parseInt(opcElegida);

        if(!valorInput1 || !valorInput2){
            alert("nulos");
    
        }else{
            operacionesAritmeticas(num1, num2, opcConver);
        }
        function operacionesAritmeticas(valorInput1, valorInput2, opcConver){
            var resultado = 0;

            switch(opcConver){
                case 1:
                    alert("nulos");
                    break;
                case 2:
                    console.log("suma");
                    resultado=valorInput1+valorInput2;
                    console.log(resultado);
                    $("#ResultadoF").val(resultado);
                    break;
                case 3:
                    console.log("resta");
                    resultado=valorInput1-valorInput2;
                    console.log(resultado);
                    $("#ResultadoF").val(resultado);
                    break;
                case 4:
                    console.log("multiplicacion");
                    resultado=valorInput1*valorInput2;
                    console.log(resultado);
                    $("#ResultadoF").val(resultado);
                    break
                case 5:
                    console.log("division");
                    resultado=valorInput1/valorInput2;
                    console.log(resultado);
                    $("#ResultadoF").val(resultado);
                    break;
                default:
                    break;
            }
        }
    });
});

