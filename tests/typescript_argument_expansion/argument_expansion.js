const bar = [1,2,3].reduce((carry, value) => {
  return [...carry, value];
}, ([] as unknown) as number[]);

const bar = [1,2,3].reduce((carry, value) => {
  return [...carry, value];
}, <Array<number>>[]);

const bar = [1,2,3].reduce((carry, value) => {
  return [...carry, value];
}, ([1, 2, 3] as unknown) as number[]);

const bar = [1,2,3].reduce((carry, value) => {
  return [...carry, value];
}, <Array<number>>[1, 2, 3]);

const bar = [1,2,3].reduce((carry, value) => {
  return {...carry, [value]: true};
}, ({} as unknown) as {[key: number]: boolean});

const bar = [1,2,3].reduce((carry, value) => {
  return {...carry, [value]: true};
}, <{[key: number]: boolean}>{});

const bar = [1,2,3].reduce((carry, value) => {
  return {...carry, [value]: true};
}, ({1: true} as unknown) as {[key: number]: boolean});

const bar = [1,2,3].reduce((carry, value) => {
  return {...carry, [value]: true};
}, <{[key: number]: boolean}>{1: true});
