export function increment(amount) {
  return {
    type: 'INCREMENT',
    payload: {
      amount
    }
  };
}

export function decrement(amount) {
  return {
    type: 'DECREMENT',
    payload: {
      amount
    }
  };
}