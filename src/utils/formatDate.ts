const formatDate = (value: Date): string => {
  const d = new Date(value)
  return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()
}

export default formatDate;
