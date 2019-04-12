import { HeartPipe } from './heart.pipe';

describe('HeartPipe', () => {
  it('create an instance', () => {
    const pipe = new HeartPipe();
    expect(pipe).toBeTruthy();
  });
});
