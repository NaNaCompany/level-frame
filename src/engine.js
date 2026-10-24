export function initialAngle(rng=Math.random){const sign=rng()<.5?-1:1;return sign*(3+rng()*9);}
export function actualAngle(initial,correction){return initial+correction;}
export function summarize(errors){if(errors.length!==3||errors.some(v=>!Number.isFinite(v)||v<0))throw new RangeError('세 번의 유효한 오차 필요');const error=errors.reduce((a,b)=>a+b,0)/3;return {error,accuracy:Math.max(0,100-error*10),title:error<.3?'인간 수평계':error<1?'우리 집 액자 전담':error<2?'섬세한 액자 수리사':'기울어짐도 하나의 예술'};}
