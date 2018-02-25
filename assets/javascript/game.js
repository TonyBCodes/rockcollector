
$(document).ready(function () {

    //Gloab Vars
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var target;
    var total;
    var wins=0;
    var loses=0;
    var modal = document.getElementById('myModal');

    // -----FUNCTIONS-----------------------------------------------------------

    //function to start the game
    function gamestart() {
        crystal1 = 0;
        crystal2 = 0;
        crystal3 = 0;
        crystal4 = 0;
        target = 0;
        total = 0;

        //create a target random number between 19 and 120
        target = Math.floor(Math.random() * 102) + 19;
        // show the target number on the screen
        $("#number").text(target);

        //create a random number for each of 4 crystals between 1 and 12
        crystal1 = cryst_val();
        crystal2 = cryst_val();
        crystal3 = cryst_val();
        crystal4 = cryst_val();

        // show 0 for total
        $("#score").text(total);

        // show instructions
        $("#message").text("Click the gems to try to match the number above.  You win if you match exactly.  You lose if you go over.");
    }


    //function to create random numbers for crystals
    function cryst_val() {
        return (Math.floor(Math.random() * 12) + 1);
    }

    // add up the clicked crystal values, display the new total, evaluate gameover condition
    function addNdispl(x) {
        total += x;
        $("#score").text(total);
        if (total < target) {
            $("#message").text("Not there quite yet.  Keep Clicking")
        }
        if (total > target) {
            endofgame(total - target);
        }

        if (total === target) {
            endofgame(0);
        }
    }

    function endofgame(diff) {
        if (diff === 0) {
            $("#endmsg").text("You matched the number and won the game!!");
            $("#win").text(++wins);
        }
        else {
            $("#endmsg").text("You went over the number by " + diff + ". You lost.  Better luck next time.");
            $("#los").text(++loses);
        }

        // open the modal to show end of game result
        modal.style.display = "block";

        //close the modal
        $("#close").on("click", function () {
            modal.style.display = "none";
            gamestart();
        });

    }

    // ----- END OF FUNCTIONS----------------------------------------------------

    // start the game when the window loads;    
    $(window).on("load", function () {
        gamestart();
        $("#win").text(0);
        $("#los").text(0);
    });




    // insert the value into the crystal label
    $("#c1").on("click", function () {
        addNdispl(crystal1);
    });

    $("#c2").on("click", function () {
        addNdispl(crystal2);
    });

    $("#c3").on("click", function () {
        addNdispl(crystal3);
    });

    $("#c4").on("click", function () {
        addNdispl(crystal4);
    });

});
