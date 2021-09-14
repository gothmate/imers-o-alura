function calculaMedia() {
  const grade1 = parseFloat(document.getElementById('primeira').value)
  const grade2 = parseFloat(document.getElementById('segunda').value)
  const grade3 = parseFloat(document.getElementById('terceira').value)
  const grade4 = parseFloat(document.getElementById('quarta').value)
  let finalGrade = (grade1 + grade2 + grade3 + grade4) / 4
  finalGrade = finalGrade.toFixed(1)
  let result = ''
  if (finalGrade >= 6) {
    document.getElementById('solucao').innerHTML =
      'Aprovado: ' + finalGrade + '!'
  } else {
    document.getElementById('solucao').innerHTML =
      'Reprovado: ' + finalGrade + '!'
  }
}
