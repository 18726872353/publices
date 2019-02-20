import CryptoJS from 'crypto-js'

let keySizes, iterationCounts;
let AesUtil = function (keySize, iterationCount) {
    keySizes = keySize / 32;
    iterationCounts = iterationCount;
};
const that = new AesUtil(128, 147);
AesUtil.prototype.generateKey = function (salt, passPhrase) {
    let key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySizes, iterations: iterationCounts });
    return key;
}

AesUtil.prototype.encrypt = function (salt, iv, passPhrase, plainText) {
    let key = that.generateKey(salt, passPhrase);
    let encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

AesUtil.prototype.decrypt = function (salt, iv, passPhrase, cipherText) {

    let key = that.generateKey(salt, passPhrase);
    let cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    })

    let decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) })


    return decrypted.toString(CryptoJS.enc.Utf8);
}
// let aes = new AesUtil(128,147);
// let decrypted = aes.decrypt("54bef10750df41d5ac9f2d0a4fe100bf","7c70035d4e7f4a1ba5a0eb737c7cf2d9","中电国康医到服务","PCMiCT6WxjhN/7YZ8sFE9IVpnmsRXikiCMJW7qUzw8I=");
// let eccrypted = aes.encrypt("54bef10750df41d5ac9f2d0a4fe100bf","7c70035d4e7f4a1ba5a0eb737c7cf2d9","中电国康医到服务","你是哪位？");
// console.log(eccrypted);
export default {
    encrypt: that.encrypt,
    decrypt: that.decrypt,
}
