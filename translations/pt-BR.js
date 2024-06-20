function ptBr() {
  const menuHome = document.querySelector(".home");
  const menuMatches = document.querySelector(".matches");
  const menuImportantTitle = document.querySelector(".importantTitle");
  const menuAbout = document.querySelector(".about");

  const hero = document.querySelector(".leftHero");
  const siteBtn = document.querySelector(".siteLink");

  const stadium = document.querySelector(".stadium");
  const nextMatch = document.querySelector(".nextMatch");
  const brLeague = document.querySelector(".brLeague");
  const futureMatch = document.querySelector(".futureMatch");

  const impTitles = document.querySelector(".impTitles");

  const clubInfos = document.querySelector(".clubInfos");

  const since = document.querySelector(".since");

  const mainMatch = document.querySelector(".timeMainMatch");
  const match2 = document.querySelector(".date1");
  const match3 = document.querySelector(".date2");

  const pt = document.querySelectorAll(".ptBr");

  pt.forEach((element) => element.addEventListener("click", () => {
      menuHome.textContent = "Início";
      menuMatches.textContent = "Partidas";
      menuImportantTitle.textContent = "Títulos Importantes";
      menuAbout.textContent = "Sobre";

      hero.innerHTML = "Uma vez Flamengo, <br> Sempre Flamengo!";
      siteBtn.textContent = "Site Oficial";

      stadium.textContent = "Estádio Maracanã";
      nextMatch.textContent = "Próxima partida";
      brLeague.textContent = "Campeonato Brasileiro 2023";
      futureMatch.textContent = "Partidas futuras";

      impTitles.textContent = "Títulos mais importantes";

      clubInfos.textContent =
        "O Clube de Regatas do Flamengo, mais conhecido simplesmente como Flamengo, e popularmente pelos apelidos Fla, Mengo e Mengão, é um clube esportivo brasileiro com sede no Rio de Janeiro, no bairro da Gávea.";

      since.textContent = "Desde - 15 de novembro de 1895.";

      mainMatch.textContent = "29/11/2023 - 19:30";

      match2.textContent = "03/12/2023 - 16:00";
      match3.textContent = "06/12/2023 - 21:30";
    })
  );
}

ptBr();
