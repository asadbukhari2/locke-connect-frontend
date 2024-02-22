const convertToCents = amountInDollars => {
  if (typeof amountInDollars !== 'number') {
    return null;
  }

  const amountInCents = amountInDollars * 100;

  return Math.round(amountInCents);
};

export default convertToCents;
