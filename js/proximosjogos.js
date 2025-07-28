document.addEventListener("DOMContentLoaded", function () {
  const containerIndex = document.getElementById("proximos-jogos");

  if (!containerIndex) {
    console.error("Elemento #proximos-jogos não encontrado.");
    return;
  }

  const jogos = JSON.parse(localStorage.getItem("jogosCalendario")) || [];
  console.log("Jogos recuperados:", jogos);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera o horário do dia atual

  const proximosJogos = jogos
    .filter((jogo) => {
      const dataJogo = new Date(jogo.data);
      dataJogo.setHours(0, 0, 0, 0); // Zera o horário do jogo também
      return dataJogo >= hoje;
    })
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, 2);

  console.log("Próximos jogos filtrados:", proximosJogos);

  if (proximosJogos.length === 0) {
    containerIndex.innerHTML = "<p>Nenhum jogo futuro encontrado.</p>";
  } else {
    containerIndex.innerHTML = proximosJogos
      .map((jogo) => jogo.cardHTML)
      .join("");
  }

  console.log("HTML inserido:", containerIndex.innerHTML);
});
