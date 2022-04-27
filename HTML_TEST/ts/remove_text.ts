// export class to access from another file
export class RemoveText {
  // constructor for passing properties to functions
  //constructor(private m: string) {}
  // function in class
  Remove_Text() {
    // selecting the existing element
    const element_1 = document.getElementsByClassName("main_text")[0];
    // child to be removed
    const child_1 = document.getElementById("child");
    // putting everything together
    element_1.removeChild(child_1!);
  }
}
