
export let canvas = document.getElementById("myCanvas");
export let context = canvas.getContext("2d");

export const drawBase = () => {
    //base
    context.beginPath();
    context.strokeStyle = "#fff"
    //largo del palo, altura
    context.moveTo(600, 440);
    context.lineWidth = 3;
    //lugar derecha,  inclinacion
    context.lineTo(0, 440);
    context.stroke();

    //palo 1
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(50, 10);
    context.lineTo(50, 440);
    context.stroke();

    //palo 2
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(340, 10);
    context.lineTo(50, 10);
    context.stroke();

    //palo3
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(120, 10);
    context.lineTo(50, 70);
    context.stroke();
}

export const drawNoose = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(280, 10);
    context.lineTo(280, 50);
    context.stroke();
}

export const drawHead = () => {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "#fff";
    context.arc(280, 100, 50, 0, Math.PI * 2, true);
    context.stroke();
}

export const drawSmileOk = (action) => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.arc(280, 110, 20, 0, Math.PI, false);
    context.stroke();
    if (action == 'clear') {
        context.clearRect(258, 102, 50, 30, Math.PI);
    }
}
export const drawSmileDead = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.arc(280, 131, 20, 0, Math.PI, true);
    context.stroke();
}

// eyes
export const drawEyesLeftOk = (action) => {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "#fff"; // color
    context.arc(260, 90, 5, 0, Math.PI * 2, true); // draw left eye
    context.stroke();
    if (action == 'clear') {
        context.clearRect(252, 60, 20, 50, Math.PI);
    }
}
export const drawEyesRightOk = (action) => {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "#fff"; // color
    context.arc(300, 90, 5, 0, Math.PI * 2, true); // draw right eye
    context.stroke();
    if (action == 'clear') {
        context.clearRect(278, 70, 40, 30, Math.PI);
    }
}

export const drawEyesRightDead = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.lineTo(305, 100);
    context.stroke();

    context.lineTo(285, 72);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.lineTo(305, 72);
    context.stroke();
    context.lineTo(285, 100);
    context.stroke();
}

export const drawEyesLeftDead = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.lineTo(276, 72);
    context.stroke();
    context.lineTo(248, 95);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    context.lineTo(253, 72);
    context.stroke();
    context.lineTo(275, 100);
    context.stroke();
}

// body
export const drawBody = () => {
    context.beginPath();
    context.moveTo(280, 150);
    context.lineTo(280, 280);
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.stroke();
}

// arms
export const drawArmLeft = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    context.moveTo(280, 180);
    context.lineTo(240, 260);
    context.stroke();
}

export const drawArmRight = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
    context.moveTo(280, 180);
    context.lineTo(320, 260);
    context.stroke();
}

// legs
export const drawLegLeft = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(280, 280);
    context.lineTo(250, 380);
    context.stroke();
}

export const drawLegRight = () => {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 3;
    context.moveTo(280, 280);
    context.lineTo(320, 380);
    context.stroke();
}

export const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}