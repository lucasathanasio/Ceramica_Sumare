document.addEventListener("DOMContentLoaded", function () {
  const meses = [
    "janeiro",
    "fevereiro",
    "marco",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const mesAtual = new Date().getMonth(); // Obtém o número do mês (0 = Janeiro, 11 = Dezembro)
  const mesId = meses[mesAtual]; // Obtém o nome do mês correspondente

  mostrarJogos(mesId); // Exibe os jogos do mês atual

  // Foca automaticamente no botão do mês atual
  const botaoMes = document.querySelector(
    `.meses button[onclick="mostrarJogos('${mesId}')"]`
  );
  if (botaoMes) {
    botaoMes.focus();
  }
});

function mostrarJogos(mes) {
  document.querySelectorAll(".jogos").forEach((div) => {
    div.classList.remove("ativo");
  });
  document.getElementById(mes).classList.add("ativo");
}
