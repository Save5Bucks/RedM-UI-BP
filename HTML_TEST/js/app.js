// in the from "./file" you may need to use "./file.js" check both
import { AddText } from "./add_text.js";
import { RemoveText } from "./remove_text.js";
// add listener to document once page is loaded
document.addEventListener("DOMContentLoaded", function (even) {
    // get button by id
    var button_c = document.getElementById("btn_c");
    var button_d = document.getElementById("btn_d");
    // in typescript you can not run a function in the "listener" but you can call a function
    // the button! is required as it is declared as a var and may be null
    button_c.addEventListener("click", handleClick_c);
    button_d.addEventListener("click", handleClick_d);
    // function for handling the click
    function handleClick_c() {
        // call new instance of import class passing the ("string") to the constructor
        var message = new AddText("New Text");
        // call the function in the import class
        message.Add_Text();
    }
    function handleClick_d() {
        // make child variable
        var c_valid = document.getElementById("child");
        // check to see if it exists
        if (c_valid != null) {
            var delete_text = new RemoveText();
            delete_text.Remove_Text();
        }
    }
});
