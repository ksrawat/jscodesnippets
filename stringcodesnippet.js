#Write a code snippet to find consecuitve charstring in a string.

Input : 'avcccceedffftvvvvvvvvvv'
Output:  vvvvvvvvvv


var str = 'avcccceedffftvvvvvvvvvv';
var s   = str.match(/([a-zA-Z])\1*/g)||[];
s.reduce(function(a,b){
  return a.length > b.length ? a : b;
});
