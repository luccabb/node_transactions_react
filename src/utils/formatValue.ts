const formatValue = (value: number, type: 'income' | 'outcome'): string => {
  if (type === 'income') {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  } else {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }
}

export default formatValue;
