export function initialAngle(rng=Math.random){const sign=rng()<.5?-1:1;return sign*(3+rng()*9);}
export function actualAngle(initial,correction){return initial+correction;}
export function summarize(errors){if(errors.length!==3||errors.some(v=>!Number.isFinite(v)||v<0))throw new RangeError('Three valid errors required');const error=errors.reduce((a,b)=>a+b,0)/3;return {error,accuracy:Math.max(0,100-error*10),title:error<.3?'A human spirit level':error<1?'The household frame fixer':error<2?'A precision frame fixer':'A little tilt is an art form'};}
