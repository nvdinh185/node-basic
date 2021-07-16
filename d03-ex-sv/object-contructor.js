var Cho = function (chan, mauLong) {
    this.chan = chan;
    this.mauLong = mauLong;
}
Cho.prototype.suaFunc = function () { console.log('Gau Gau') }
var loki = new Cho();

console.log(loki);