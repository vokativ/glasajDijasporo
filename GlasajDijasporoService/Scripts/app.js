var wrapper = document.getElementById("signature-pad"),
        clearButton = wrapper.querySelector("[data-action=clear]"),
        canvas = wrapper.querySelector("canvas"),
        signaturePad;

var submitButton = document.getElementById("submitApplication");
var signatureField = document.getElementById("Signature");
var embassyEmail = document.getElementById("embassyEmail");
var votingLocation = document.getElementById("votingLocation");
var prefferedVotingLocation = document.getElementById("prefferedVotingLocation");
var embassyName = document.getElementById("embassyName");
var mailtoLink = document.getElementById("mailtoLink");;

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
    embassyName.innerHTML = votingLocation.value.split('|')[0];
    //mailtoLink.innerHTML = `<a href=\\"mailto: ${votingLocation.value.split('|')[1]}? subject = Zahtev % 20za % 20glasanje % 20u % 20inostranstvu & body=Po % C5 % A1tovana % 2Fi % 2CPodnosim % 20zahtev % 20za % 20glasanje % 20u % 20inostranstvu % 20za % 20predstoje % C4 % 87e % 20izbore.Sa % 20po % C5 % A1tovanjem`;//will add the mailto link generation here

    mailtoLink.innerHTML = votingLocation.value.split('|')[0] + 'AAAAAAAAAAA';
}

function prefferedVotingLocationSelected() {

}

function jmbgInputted() {//Source, but not used yet github.com/dijanal/JMBG

}