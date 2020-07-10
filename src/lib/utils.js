module.exports = {
  formateDate(timestamp){
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      iso: `${year}-${month}-${day}`,
      birth: `${day}/${month}`
    }
  },
  createdAt(at){
    const date = new Intl.DateTimeFormat('pt-br').format(at)

    return date
  }
}