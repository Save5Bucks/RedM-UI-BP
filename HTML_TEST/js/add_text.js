// export class to access from another file
export class AddText {
    // constructor for passing properties to functions
    constructor(m) {
        this.m = m;
    }
    // function in class
    Add_Text() {
        // creating new element
        const div_1 = document.createElement("div");
        // creating new text for element "this" must be used for calling the constructor property (private m: string)
        const node_1 = document.createTextNode(this.m);
        // adding the new element to the document
        div_1.appendChild(node_1);
        // selecting the existing element to add the new element under
        const element_1 = document.getElementsByClassName("main_text")[0];
        // putting everything together
        element_1.appendChild(div_1);
        // give child id
        div_1.setAttribute("id", "child");
    }
}
