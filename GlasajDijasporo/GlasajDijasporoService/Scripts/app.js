var wrapper = document.getElementById("signature-pad"),
        clearButton = wrapper.querySelector("[data-action=clear]"),
        canvas = wrapper.querySelector("canvas"),
        signaturePad;

var submitButton = document.getElementById("submitApplication");
var signatureField = document.getElementById("Signature");
var embassyEmail = document.getElementById("embassyEmail");
var votingLocation = document.getElementById("votingLocation");
var prefferedVotingLocation = document.getElementById("PrefferedVotingLocation");
var defaultVotingLocation = document.getElementById("DefaultVotingLocation");

var mailtoLink = String;

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

signaturePad = new SignaturePad(canvas);

clearButton.addEventListener("click", function (event) {
    signaturePad.clear();
});

submitButton.addEventListener("click", function (event) {
    signatureField.value = signaturePad.toDataURL();
});

function votingLocationSelected() {
    embassyEmail.innerHTML = votingLocation.value.split('|')[1];
    defaultVotingLocation.innerHTML = votingLocation.value.split('|')[0];
    var mailtoLinkString = new StringBuilder("<a href=\"mailto: ");//will add the mailto link generation here
    mailtoLinkString.appendFormat("{0} ? subject = Zahtev % 20za % 20glasanje % 20u % 20inostranstvu & body=Po % C5 % A1tovana % 2Fi % 2CPodnosim % 20zahtev % 20za % 20glasanje % 20u % 20inostranstvu % 20za % 20predstoje % C4 % 87e % 20izbore.Sa % 20po % C5 % A1tovanjem", embassyEmail);
    mailtoLink = mailtoLinkString.ToString();
}

function prefferedVotingLocationSelected() {

}