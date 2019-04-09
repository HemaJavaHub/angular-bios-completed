import { Developer } from './developer';

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer(1,'Jason','Monroe','Hello',1998)).toBeTruthy();
  });
});
