import test from 'node:test';
import assert from 'node:assert/strict';
import {initialAngle,actualAngle,summarize} from '../../docs/en/engine.js';
test('The departure angle is in both directions 3~12degree range',()=>{assert.equal(initialAngle(()=>0),-3);assert.ok(initialAngle(()=>.999)>11);});
test('Calculate actual horizontal error by sum of departure angle and correction value',()=>{assert.equal(actualAngle(6,-6),0);assert.equal(actualAngle(-6,5),-1);});
test('Three edition averages and result lower bounds',()=>{assert.equal(summarize([.1,.2,.3]).error,(.1+.2+.3)/3);assert.equal(summarize([20,20,20]).accuracy,0);assert.throws(()=>summarize([1]));});
