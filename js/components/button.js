export default class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render() {
        let myApp = document.getElementById(this.parentID, this.text);
        
        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; 
    }
};