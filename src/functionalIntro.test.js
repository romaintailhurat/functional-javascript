import {
  getEndLine,
  generateArrayOf
} from './functionalIntro'

it('get the right end line', () => {
  expect(getEndLine(10)).toEqual('9 bottles of beer on the wall');
  expect(getEndLine(0)).toEqual('No more bottles of beer on the wall');
});

it('generate a array', () => {
  expect(generateArrayOf()).toEqual([0,0,0,0,0,0,0,0,0,0]);
  expect(generateArrayOf(5, 'yo')).toEqual(['yo','yo','yo','yo','yo']);
});
