const proxy = "https://proxy-sites.herokuapp.com/";

const WS = "0x0000000000000000000000000000000000000000";//0x0000000000000000000000000000000000000000 recibe los huerfanos por defecto

var INFINITY = "0x9ff9fe8bbaead59eb1a7a55763dc4fd1f066e7a0"; // version 2 0xf9B921b48B35b21b9aEeC5Ddfc16DCe91C0f16EF

var TOKEN = "0x55d398326f99059fF775485246999027B3197955";
var chainId = '0x38';

if(true){// testnet comand
    INFINITY = "0x06Ab92e00E7479E1E4F195070Ed665fb745e00B7"; // version 2  0x06Ab92e00E7479E1E4F195070Ed665fb745e00B7

    TOKEN = "0xd5881b890b443be0c609BDFAdE3D8cE886cF9BAc";
    chainId = '0x61';
}

export default {proxy, WS,INFINITY, TOKEN, chainId};
