const proxy = "https://proxy-sites.herokuapp.com/";

const WS = "0x0000000000000000000000000000000000000000";//0x0000000000000000000000000000000000000000 recibe los huerfanos por defecto

var SC = "0x01480A7Af2387ab0732e6a23863E5c160Db32b93";// direccion del contrato V1
var INFINITY = "0xF0CEC70740e10AB3659a263e52B845Eb3F398212"; // version 2.1

var TOKEN = "0x55d398326f99059fF775485246999027B3197955";
var chainId = '0x38';

if(true){// testnet comand
    SC = "0x47DA06e10CF59f00cCE3Aeb66F9779B5E1dA2b7f";// direccion del contrato V1
    INFINITY = "0xe0Eec93025C3E675c99d44BCC8E2f590164C9A2C"; // version 2.1  0xe0Eec93025C3E675c99d44BCC8E2f590164C9A2C

    TOKEN = "0xd5881b890b443be0c609BDFAdE3D8cE886cF9BAc";
    chainId = '0x61';
}

export default {proxy, WS, SC,INFINITY, TOKEN, chainId};
