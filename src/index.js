module.exports = function solveEquation(equation) {
  let arr=equation.replace(/\s/g,'').match(/[+-]+\d+|\d+/g);
  let D=Math.sqrt(arr[2]*arr[2]-4*arr[0]*arr[3])
  return [Math.round((arr[2]*(-1)+D)/(2*arr[0])),Math.round((arr[2]*(-1)-D)/(2*arr[0]))].sort((a,b)=>{return a-b})
}
