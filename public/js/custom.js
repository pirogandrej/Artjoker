
var objRegions = [];
var objCities = [];
var objDistricts = [];

//Валидация формы
function validate(formData) {
	var error = [];
    if(formData.name.length == 0) {
    	error.push('Поле -NAME- обязательно к заполнению');
	}
    if(formData.email.length == 0) {
    	error.push('Поле -EMAIL- обязательно к заполнению');
	} else {
        if (!validateEmail(formData.email)) {
            error.push('Поле -EMAIL- не корректно');
        }
	}
    if(formData.selectRegion == -1) {
        error.push('Поле -ОБЛАСТЬ- обязательна к заполнению');
    }
    if(formData.selectCity == -1) {
        error.push('Поле -ГОРОД- обязателен к заполнению');
    }
    if(formData.selectDistrict == -1) {
        error.push('Поле -РАЙОН- обязателен к заполнению');
    }
    if (error.length > 0) {
        $( "#message-danger" ).empty().show(200);
        $.each(error, function(key, value) {
            $( "#message-danger" ).append( value + '<br>' );
        });
    } else {
        $( "#message-danger" ).empty().hide(200);
	}
	return error;
}

//Валидация email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//Получаем список областей
$.ajax({
    method: "POST",
    url: "/get_region"
})
.done(function( msg ) {
	objRegions = JSON.parse(msg);
    console.log(objRegions.length);
    $.each(objRegions, function(key, value) {
        $('#selectRegion')
            .append($("<option></option>")
                .attr("value",value.ter_id)
                .text(value.ter_name)).trigger("chosen:updated");
    });
});

$(document).ready(function() {
    $(".chosen-select").chosen({width: "50%"});

    //Получаем список городов при изменении области
    $('#selectRegion').change(function (event) {
        $( "#message-success" ).empty().hide(200);
        var idRegion = event.target.value;
		if (idRegion > 0) {

            $.ajax({
                method: "POST",
                url: "/get_city",
                data: { region: idRegion }
            })
			.done(function( msg ) {
				objCities = JSON.parse(msg);
				if (objCities.length > 0) {
                    $('#selectCity').find('option').remove();
                    $('#selectCity')
                        .append($("<option></option>")
                            .attr("value", "-1")
                            .text("Выберите город .."));
                    $.each(objCities, function(key, value) {
                        $('#selectCity')
                            .append($("<option></option>")
                                .attr("value",value.ter_id)
                                .text(value.ter_name)).trigger("chosen:updated");
                    });
                    $('#selectCity-group').show(300);
                    $('#selectDistrict').find('option').remove();
				} else {
                    $('#selectCity-group').hide(300);
                    $('#selectCity').find('option').remove();
				}
			});
		} else {
            $('#selectDistrict-group').hide(300);
            $('#selectDistrict').find('option').remove();
            $('#selectCity-group').hide(300);
            $('#selectCity').find('option').remove();
		}
    });

    //Получаем список районов при изменении города
	$('#selectCity').change(function (event) {
        $( "#message-success" ).empty().hide(200);
		var idCity = event.target.value;
		if (idCity > 0) {
            $.ajax({
                method: "POST",
                url: "/get_district",
                data: { city: idCity }
            })
			.done(function( msg ) {
				objDistricts = JSON.parse(msg);
                if (objDistricts.length > 0) {
                    $('#selectDistrict').find('option').remove();
                    $('#selectDistrict')
                        .append($("<option></option>")
                            .attr("value", "-1")
                            .text("Выберите район .."));
                    $.each(objDistricts, function(key, value) {
                        $('#selectDistrict')
                            .append($("<option></option>")
                                .attr("value",value.ter_id)
                                .text(value.ter_name)).trigger("chosen:updated");
                    });
                    $('#selectDistrict-group').show(300);
				} else {
                    $('#selectDistrict-group').hide(300);
                    $('#selectDistrict').find('option').remove();
				}
            });
		} else {
            $('#selectDistrict-group').hide(300);
            $('#selectDistrict').find('option').remove();
        }
    });

    $('#selectDistrict').change(function (event) {
        $("#message-success").empty().hide(200);
    });

    $('#name-group').change(function (event) {
        $("#message-success").empty().hide(200);
    });

    $('#email-group').change(function (event) {
        $("#message-success").empty().hide(200);
    });

    //Вадидация и отправка формы на сервер
    $('form').submit(function(event) {
        var formData = {
            'name'           : $('input[name=name]').val(),
            'email'          : $('input[name=email]').val(),
            'selectRegion'   : $('select#selectRegion').val(),
            'selectCity'     : $('select#selectCity').val(),
            'selectDistrict' : $('select#selectDistrict').val()
        };
        var error = validate(formData);
        if (error.length == 0) {
            $.ajax({
                type        : 'POST',
                url         : '/create',
                data        : formData,
                dataType    : 'json',
                encode          : true
            })
			.done(function(data) {
				console.log(data);
				if((data.success) && (data.new_user)){
                    $( "#message-success" ).empty().show(200);
					$( "#message-success" ).append( 'Данные успешно записаны в базу данных.' );
				}
				if((data.success) && (!data.new_user)){
                    $('#modalUser').modal('show');
                    $('.modal-body').empty().append(
                    	'ФИО : ' + data.user[0].name + '<br>' +
						'Email : ' + data.user[0].email + '<br>' +
						'Territory : ' + data.user[0].territory);
				}
			});
		}
        event.preventDefault();
    });
});
