const proxy = "https://proxy-sites.herokuapp.com/";

const WS = "0x0000000000000000000000000000000000000000";//0x0000000000000000000000000000000000000000 recibe los huerfanos por defecto

var SC = "0x296629F56a677ff38B083029e9fEA6BC892d450b";// direccion del contrato V1
var INFINITY = "0xF0CEC70740e10AB3659a263e52B845Eb3F398212"; // version 2

var TOKEN = "0x55d398326f99059fF775485246999027B3197955";
var chainId = '0x38';

if(true){// testnet comand
    SC = "0x296629F56a677ff38B083029e9fEA6BC892d450b";// direccion del contrato V1
    INFINITY = "0xf47fBd34E663D8F5ad78fbf46Ae097202557A8e8"; // version 2  0xf47fBd34E663D8F5ad78fbf46Ae097202557A8e8

    TOKEN = "0xd5881b890b443be0c609BDFAdE3D8cE886cF9BAc";
    chainId = '0x61';
}

export default {proxy, WS, SC,INFINITY, TOKEN, chainId};
