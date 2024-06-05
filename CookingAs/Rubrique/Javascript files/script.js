var message = function MessageAlert(Y, W, X, F, D) {
    this.reseauxSocialY = Y;

    this.reseauxSocialW = W;

    this.reseauxSocialX = X;

    this.reseauxSocialF = F;

    this.reseauxSocialD = D;
}

var obj = new message(' Youtube', ' Whatsapp', ' X', ' Facebook', 'Discord');

function YMessageOfSite() {
    alert('Vous allez être redirigé sur :' + obj.reseauxSocialY) 
}

function WMessageOfSite() {
    alert('Vous allez être redirigé sur :' + obj.reseauxSocialW) 
}

function XMessageOfSite() {
    alert('Vous allez être redirigé sur :' + obj.reseauxSocialX) 
}

function FMessageOfSite() {
    alert('Vous allez être redirigé sur :' + obj.reseauxSocialF) 
}

function DMessageOfSite() {
    alert('Vous allez être redirigé sur :' + obj.reseauxSocialD) 
}