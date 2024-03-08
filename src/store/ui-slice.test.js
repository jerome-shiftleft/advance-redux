import { toggle } from './ui-slice';

describe('UI Slice', () => {
  test('toggle should toggle the cartIsVisible state', () => {
    const initialState = { cartIsVisible: false };
    const nextState = { cartIsVisible: true };

    const newState = toggle(initialState);

    expect(newState).toEqual(nextState);
  });
});