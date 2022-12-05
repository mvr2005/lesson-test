import { strict as assert} from 'node:assert';
import user from "../info.js";

assert.equal(user.name, 'Michel');

console.log('Ok');
