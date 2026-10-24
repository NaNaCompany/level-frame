import test from 'node:test';
import assert from 'node:assert/strict';
import {initialAngle,actualAngle,summarize} from '../../docs/ko/engine.js';
test('출발 각도는 양쪽 방향이며 3~12도 범위',()=>{assert.equal(initialAngle(()=>0),-3);assert.ok(initialAngle(()=>.999)>11);});
test('출발 각도와 보정값 합으로 실제 수평 오차 계산',()=>{assert.equal(actualAngle(6,-6),0);assert.equal(actualAngle(-6,5),-1);});
test('세 판 평균과 결과 하한',()=>{assert.equal(summarize([.1,.2,.3]).error,(.1+.2+.3)/3);assert.equal(summarize([20,20,20]).accuracy,0);assert.throws(()=>summarize([1]));});
