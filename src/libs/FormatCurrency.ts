export const formatCurrency = (value: string): string => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    return value;
  }

  if (numericValue >= 10000) {
    const billion = Math.floor(numericValue / 10000);
    const million = Math.floor((numericValue % 10000) / 1000);
    if (million === 0) {
      return `${billion}억원`;
    } else {
      return `${billion}억 ${million}천만원`;
    }
  }

  return `${value}만원`;
};
