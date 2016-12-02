/*globals describe, it*/
var Compiler = require('../lib/compiler.js');
var assert = require('assert');
var fs = require('fs');

var readFile = function(file) {
  return {filename: file, content: fs.readFileSync(file).toString()};
};

describe('embark.Compiler', function() {
  var compiler = new Compiler();

  describe('#compile_solidity', function() {
    var compiledContracts = compiler.compile_solidity([
      readFile('test/contracts/simple_storage.sol'),
      readFile('test/contracts/token.sol')
    ]);

    var expectedObject = {};

    expectedObject["SimpleStorage"] = {"code":"606060405234610000576040516020806100bd83398101604052515b60008190555b505b608d806100306000396000f3606060405260e060020a60003504632a1afcd98114603057806360fe47b114604c5780636d4ce63c14605b575b6000565b34600057603a6077565b60408051918252519081900360200190f35b346000576059600435607d565b005b34600057603a6086565b60408051918252519081900360200190f35b60005481565b60008190555b50565b6000545b9056","runtimeBytecode":"606060405260e060020a60003504632a1afcd98114603057806360fe47b114604c5780636d4ce63c14605b575b6000565b34600057603a6077565b60408051918252519081900360200190f35b346000576059600435607d565b005b34600057603a6086565b60408051918252519081900360200190f35b60005481565b60008190555b50565b6000545b9056","gasEstimates":{"creation":[20125,28200],"external":{"get()":263,"set(uint256)":20157,"storedData()":218},"internal":{}},"functionHashes":{"get()":"6d4ce63c","set(uint256)":"60fe47b1","storedData()":"2a1afcd9"},"abiDefinition":[{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialValue","type":"uint256"}],"payable":false,"type":"constructor"}]};

    expectedObject["Token"] = {"code":"6060604052346100005760405160208061042883398101604052515b600160a060020a033316600090815260208190526040902081905560028190555b505b6103dc8061004c6000396000f3606060405236156100565760e060020a6000350463095ea7b3811461005b57806318160ddd1461008257806323b872dd146100a157806370a08231146100cb578063a9059cbb146100ed578063dd62ed3e14610114575b610000565b346100005761006e600435602435610139565b604080519115158252519081900360200190f35b346100005761008f6101a4565b60408051918252519081900360200190f35b346100005761006e6004356024356044356101ab565b604080519115158252519081900360200190f35b346100005761008f6004356102bf565b60408051918252519081900360200190f35b346100005761006e6004356024356102de565b604080519115158252519081900360200190f35b346100005761008f6004356024356103a1565b60408051918252519081900360200190f35b600160a060020a03338116600081815260016020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b600160a060020a038316600090815260208190526040812054829010156101d157610000565b600160a060020a03808516600090815260016020908152604080832033909416835292905220548290101561020557610000565b600160a060020a03831660009081526020819052604090205461022890836103ce565b151561023357610000565b600160a060020a038085166000818152600160209081526040808320338616845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b9392505050565b600160a060020a0381166000908152602081905260409020545b919050565b600160a060020a0333166000908152602081905260408120548290101561030457610000565b600160a060020a03831660009081526020819052604090205461032790836103ce565b151561033257610000565b600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b92915050565b600160a060020a038083166000908152600160209081526040808320938516835292905220545b92915050565b808201829010155b9291505056","runtimeBytecode":"606060405236156100565760e060020a6000350463095ea7b3811461005b57806318160ddd1461008257806323b872dd146100a157806370a08231146100cb578063a9059cbb146100ed578063dd62ed3e14610114575b610000565b346100005761006e600435602435610139565b604080519115158252519081900360200190f35b346100005761008f6101a4565b60408051918252519081900360200190f35b346100005761006e6004356024356044356101ab565b604080519115158252519081900360200190f35b346100005761008f6004356102bf565b60408051918252519081900360200190f35b346100005761006e6004356024356102de565b604080519115158252519081900360200190f35b346100005761008f6004356024356103a1565b60408051918252519081900360200190f35b600160a060020a03338116600081815260016020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b600160a060020a038316600090815260208190526040812054829010156101d157610000565b600160a060020a03808516600090815260016020908152604080832033909416835292905220548290101561020557610000565b600160a060020a03831660009081526020819052604090205461022890836103ce565b151561023357610000565b600160a060020a038085166000818152600160209081526040808320338616845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b9392505050565b600160a060020a0381166000908152602081905260409020545b919050565b600160a060020a0333166000908152602081905260408120548290101561030457610000565b600160a060020a03831660009081526020819052604090205461032790836103ce565b151561033257610000565b600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b92915050565b600160a060020a038083166000908152600160209081526040808320938516835292905220545b92915050565b808201829010155b9291505056","gasEstimates":{"creation":[40397,197600],"external":{"allowance(address,address)":548,"approve(address,uint256)":22232,"balanceOf(address)":421,"totalSupply()":259,"transfer(address,uint256)":42853,"transferFrom(address,address,uint256)":63284},"internal":{"safeToAdd(uint256,uint256)":41}},"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abiDefinition":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"supply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"_allowance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initial_balance","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]}

    it('should generate compiled code and abi', function() {
      assert.deepEqual(compiledContracts, expectedObject);
    });

  });

});
