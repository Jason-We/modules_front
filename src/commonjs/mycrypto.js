import CryptoJS from 'crypto-js';
//DES加密
export const encryptBy = (message) => {
    var key = '12345678';
    function encryptByDES (message, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key)
      var option = {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}
      var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
      return encrypted.ciphertext.toString()
    }
    return encryptByDES(message, key);
}
//DES解密
export const decryptBy = (message) => {
    var key = '12345678';
    //DES  ECB模式解密
    function decryptByDES(message,key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(message)
    }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
    }
    return decryptByDES(message, key);
}