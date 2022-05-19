const proxy = "https://proxy-sites.herokuapp.com/";

const WS = "0x0000000000000000000000000000000000000000";//0x0000000000000000000000000000000000000000 recibe los huerfanos por defecto

var SC = "0x031f115150c6F8178f19C031B5b1a1d82c8d238A";// direccion del contrato V1
var INFINITY = "0xFb0c7715d96227C70e86101F3dCF990bA5813E48"; // version 2

var TOKEN = "0x55d398326f99059fF775485246999027B3197955";
var chainId = '0x38';

if(true){// testnet comand
    SC = "0x031f115150c6F8178f19C031B5b1a1d82c8d238A";// direccion del contrato V1
    INFINITY = "0x18A66cc03820Ea7e86775681a4F62413b81eCB7C"; // version 2  0xf47fBd34E663D8F5ad78fbf46Ae097202557A8e8

    TOKEN = "0xd5881b890b443be0c609BDFAdE3D8cE886cF9BAc";
    chainId = '0x61';
}

export default {proxy, WS, SC,INFINITY, TOKEN, chainId};
