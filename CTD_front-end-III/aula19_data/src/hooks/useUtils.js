function formatCurrency(value) {
  // programação defensiva pra prever erros e valores inexistentes/inacessíveis
  if (value) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  } return "Saldo indisponível"
}

function formatDate(date) {
  if (date) {
    return new Intl.DateTimeFormat('pt-br', {
      // style: 'date',
      // dateStyle: 'medium'
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  } return "Data indisponível"
}

export { formatCurrency, formatDate };