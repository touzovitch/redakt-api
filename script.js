const key = "i<3redakt-06644fe7-6503-484b-9ae0-02db2dda7466";

const urlParams = new URLSearchParams(window.location.search);

// Decrypt
const decryptParam = urlParams.get('decrypt');
decryptParam && decrypt(decryptParam);

function decrypt(decryptParam) {
  const inputText = decryptParam.replace('redakt.org-','').replace('redakt-','').replace('&&&','').replace(/ /g, '+');
  const decryptedText = CryptoJS.AES.decrypt(inputText, key).toString(CryptoJS.enc.Utf8);
  document.getElementById('output').textContent = decryptedText;
  return decryptedText;
}

// Encrypt
const encryptParam = urlParams.get('encrypt');
encryptParam && encrypt(encryptParam);

function encrypt(encryptParam) {
  const inputText = encryptParam;
  const encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
  document.getElementById('output').textContent = 'redakt-' +  encryptedText + '&&&';
  return encryptedText;
}