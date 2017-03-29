$(document).ready(function() {
    console.log('main we up')
  // Place JavaScript code here...
    let postProduce = function()
    {
        console.log('sam')
    }

    $("#produce-signup-form").submit(function(event) {


        event.preventDefault();
        console.log("we doin ajax sucka");

        let produce = $('#produce').val(),
            units = $('#units').val(),
            unitPrice = $('#unitPrice').val()

        let myData = {
            produce: produce,
            units: units,
            unitPrice: unitPrice
        };
        console.log(myData)
        $.ajax({
            url: "/register_produce",
            type: "POST",
            data: myData,
            datatype: "json",
            success: function (data) {
                let errorM = 'registered successfully!'
                $("#errorMsg").empty()
                $("#errorMsg").empty().append(errorM);
            },
            error: function (data) {
                let errorM = data.responseJSON[0].msg

                $("#errorMsg").empty().append(errorM);
            }
        })
    })
});