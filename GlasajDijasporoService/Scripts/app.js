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
    generateMailtoLink();
}

function prefferedVotingLocationSelected() {

}

function jmbgInputted() {//Source, but not used yet github.com/dijanal/JMBG

}

function generateMailtoLink() {
    var args = [];
    args.push('subject=' + encodeURIComponent('Registracija za glasanje iz inostranstva'));
    args.push('body=' + encodeURIComponent('Poštovani/a, Prilažem moje podatke za registraciju za glasanje iz inostranstva. Sa poštovanjem'));
    var url = 'mailto:' + encodeURIComponent(votingLocation.value.split('|')[1]);
    if (args.length > 0) {
        url += '?' + args.join('&');
    }
    document.getElementById("mailtoLink").setAttribute("href", url);
    mailtoLink.innerHTML = "Pritisnite ovde da pošaljete mejl na: " + votingLocation.value.split('|')[0];
}
