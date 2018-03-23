function isWeekday(day) {
return !day.startsWith('S');
}

assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);
