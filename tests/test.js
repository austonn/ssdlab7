import{ expect} from 'chai'; // Importing Chai for assertions functions
import{ getCurrentTimestamp, server} from '../src/server.js'; // Importing the getCurrentTimestamp and server from the server.js file

// DESCRIBE: Group of related tests
// it: Individual test case
// expect: Assertion function to check if the actual value matches the expected value
// Many types of assertions to.equal, to.be.true, etc.

// Group Test with label
describe('Timestamp Function', () =>{

  // Test 1
  it('should return a valid ISO timestamp', () =>{
    const timestamp= getCurrentTimestamp();
    const isoRegex=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    expect(timestamp).to.match(isoRegex);
  });

  // Test 2
  it('should return the current timestamp', () =>{
    const timestamp= getCurrentTimestamp();
    const now= new Date().toISOString();
    expect(new Date(timestamp).getTime()).to.be.closeTo(new Date(now).getTime(), 1000);
  });

  // Close the server after all tests
  after(() =>{
    server.close();
  });
});