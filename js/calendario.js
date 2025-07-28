document.addEventListener("DOMContentLoaded", function () {
  const jogos = [];

  document.querySelectorAll(".card-jogos").forEach((card) => {
    const info = card.querySelector(".info")?.innerText.trim();

    if (!info) {
      console.error(
        "Nenhuma informação encontrada dentro do .info para um card"
      );
      return;
    }

    console.log("Info extraída do card:", info);

    const dataTexto = info.split("\n")[0].trim();
    const partesData = dataTexto.split("/");

    // Verifica se a data foi separada corretamente
    if (partesData.length !== 3) {
      console.error(
        "Data inválida encontrada. Não está no formato correto:",
        dataTexto
      );
      return;
    }

    const [dia, mes, ano] = partesData.map((parte) => {
      const numero = Number(parte);
      if (isNaN(numero)) {
        console.error(`Falha ao converter "${parte}" para número`);
      }
      return numero;
    });

    // Se qualquer conversão falhou, exibe o erro e interrompe a execução
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      console.error("Erro na conversão da data:", { dia, mes, ano });
      return;
    }

    console.log(
      `Data extraída corretamente: Dia ${dia}, Mês ${mes}, Ano ${ano}`
    );

    const dataFormatada = `${ano}-${String(mes).padStart(2, "0")}-${String(
      dia
    ).padStart(2, "0")}`;
    jogos.push({ data: dataFormatada, cardHTML: card.outerHTML });
  });

  console.log("Jogos extraídos:", jogos);

  localStorage.setItem("jogosCalendario", JSON.stringify(jogos));
});
