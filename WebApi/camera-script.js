document.getElementById("id_business_version").innerHTML = "Bussiness version: 2019.01.20 - 05";
// Settări constante video stream(mode user sau environment)
var constraints = { video: { facingMode: "environment" }, audio: false };
// Constante, definire...
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Eroare, camera nu poate fi accesată", error);
    });
}
// Trigger settings pt. capture.
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Incepe video stream-ul când se încarcă fereastra.
window.addEventListener("load", cameraStart, false);
