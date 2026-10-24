export function initialAngle(rng=Math.random){const sign=rng()<.5?-1:1;return sign*(3+rng()*9);}
export function actualAngle(initial,correction){return initial+correction;}
export function summarize(errors){if(errors.length!==3||errors.some(v=>!Number.isFinite(v)||v<0))throw new RangeError('需要三个有效错误');const error=errors.reduce((a,b)=>a+b,0)/3;return {error,accuracy:Math.max(0,100-error*10),title:error<.3?'人形水平仪':error<1?'家里的画框管家':error<2?'精准的画框修理师':'倾斜也是一种艺术'};}
