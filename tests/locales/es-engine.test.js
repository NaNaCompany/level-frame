import test from 'node:test';
import assert from 'node:assert/strict';
import {initialAngle,actualAngle,summarize} from '../../docs/es/engine.js';
test('El ángulo de salida es en ambas direcciones. 3~12rango de grados',()=>{assert.equal(initialAngle(()=>0),-3);assert.ok(initialAngle(()=>.999)>11);});
test('Calcule el error horizontal real mediante la suma del ángulo de salida y el valor de corrección',()=>{assert.equal(actualAngle(6,-6),0);assert.equal(actualAngle(-6,5),-1);});
test('Promedios de tres ediciones y límites inferiores de resultados.',()=>{assert.equal(summarize([.1,.2,.3]).error,(.1+.2+.3)/3);assert.equal(summarize([20,20,20]).accuracy,0);assert.throws(()=>summarize([1]));});
