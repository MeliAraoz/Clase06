////////////////////////Importar Funciones o Clases/////////////////////
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";
/////////////////////////////////Datos/////////////////////////////////
let mySuperArrayofString = ["Login", "Signup" , "Reset", "Cancel"];

let myInputArray = ["Username", "Surname" , "E-mail", "Password"];

let myInputArrayFiltered = myInputArray.filter(element => element == "Password");
///////////////////////////////Funciones////////////////////////////////
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {
    let input_type = "none"
    switch (type) {
        case "Password":
            input_type = "password"
            break;
            case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text";
        break;
    }
    let myInput = new Input("app", input_type);
    myInput.render();
}
/////////////////////////////Logica de App//////////////////////////////
mySuperArrayofString.forEach(element => RenderButton(element));

myInputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

let myVideo = new Video ( "videoID", "https://www.w3schools.com/tags/movie.mp4", 320, 480, "video/mp4"); 
myVideo.render();
