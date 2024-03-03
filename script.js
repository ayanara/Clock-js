function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime(); // Chama a função para exibir o tempo atual imediatamente


function mostrarDia() {
  const data = new Date();
  const dia = data.getDay();
  const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  // Exibe o dia da semana no elemento HTML
  document.getElementById("dia").textContent = diasSemana[dia].toUpperCase();
}

mostrarDia(); // Exibe o dia da semana formatado


//Pontos-chave:

//Este código demonstra como:
//Obter a hora atual usando new Date().
//Formatar componentes individuais da hora usando padStart().
//Criar uma string de hora formatada usando literais de modelo.
//Atualizar o conteúdo de um elemento HTML usando textContent.
//Agendar uma função para ser executada periodicamente usando setInterval().