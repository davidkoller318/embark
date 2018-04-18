/*globals describe, it*/
const File = require('../lib/core/file');
const fs = require('fs-extra');

describe('embark.File', function () {
  describe('parseFileForImport', () => {
    it('should find all the imports', function () {
      const contract = fs.readFileSync('./test/contracts/simple_storage.sol').toString();
      const file = new File({filename: 'simple_storage.sol'});
      file.parseFileForImport(contract);
    });
  });
});
