import test from 'tape';
import {wrapTest} from './testUtils';
import themeUtils from './themeUtils';

test('themeUtils.sizeToPx()', function(t) {
  
  wrapTest('Given a number', given => {
    let subject = 10;
    let expected = '10px';
    let actual = themeUtils.sizeToPx(subject);
    t.equals(actual, expected, `${given}: should format the number`);
  }, t);

  wrapTest('Given a string', given => {
    let subject = '10';
    let expected = '10px';
    let actual = themeUtils.sizeToPx(subject);
    t.equals(actual, expected, `${given}: should format the string`);
  }, t);

  wrapTest('Given an array', given => {
    let subject = [1, 2, 3];
    let expected = ['1px', '2px', '3px'];
    let actual = themeUtils.sizeToPx(subject);
    t.deepEqual(actual, expected, `${given}: should format the array`);
  }, t);

  t.end();
});