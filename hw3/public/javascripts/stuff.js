// Dylan Price; 8 February, 2023
$(document).ready(function () {
    // when order button is pressed
    $("#send-order").click(function () {
        notes = $("#notes").val();
        count = $("#count").val();

        // if notes contain substring "vegan"
        if ($("#notes").val().includes('vegan')) {
            alert("All cheesecakes contain dairy."); // alert will display at top of browser window
        }
        else { // hide the order menu and total orders, display user's order and notes
            flavor = $("input[name='topping']:checked").val();
            $("#order-toppings").text('Topping: ' + flavor);
            $("#order-count").text('Quantity: ' + count);
            $("#order-notes").text('Notes: ' + notes);
            $("#to-clear").hide();
            $("#to-display").show();
        }
    });

    // this will change the text of the hover dropdown menu button
    $("#dropdown").click(function (event) {
        $("#dropbtn").html("<b>" + $(event.target).text() + "</b>");

        // issue POST to server
        $.post("./orders", function(data) {
            console.log(data);

            // update total monthly order list at bottom of the page
            var list = document.getElementById("orderList");
            while (document.getElementById("orderType")) {
                document.getElementById("orderType").remove();
                console.log("can you see this?");
            }

            var i = 0
            while (data.data[i]) {
                list.innerHTML += "<li id=orderType>" + data.data[i].topping + ": " + data.data[i].quantity +  "</li>";
                i++;
            }
        });
    });
});