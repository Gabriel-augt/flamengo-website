function es() {
    const menuHome = document.querySelector(".home");
    const menuMatches = document.querySelector(".matches");
    const menuImportantTitle = document.querySelector(".importantTitle");
    const menuAbout = document.querySelector(".about");
  
    const hero = document.querySelector(".leftHero");
    const siteBtn = document.querySelector (".siteLink");
  
    const nextMatch = document.querySelector(".nextMatch");
    const brLeague = document.querySelector(".brLeague");
    const futureMatch = document.querySelector(".futureMatch");
  
    const impTitles = document.querySelector(".impTitles");
  
    const clubInfos = document.querySelector(".clubInfos");
  
    const since = document.querySelector(".since");

    const mainMatch = document.querySelector(".timeMainMatch");
    const match2 = document.querySelector(".date1");
    const match3 = document.querySelector(".date2");
  
    const es = document.querySelectorAll(".es");
  
    es.forEach((element) => element.addEventListener("click", () => {
        menuHome.textContent = "Inicio";
        menuMatches.textContent = "Partidos";
        menuImportantTitle.textContent = "Títulos Importantes";
        menuAbout.textContent = "Sobre";
  
        hero.innerHTML = "Una vez Flamengo <br> Siempre Flamengo";
        siteBtn.textContent = "Sitio Oficial";
  
        nextMatch.textContent = "Próximo partido";
        brLeague.textContent = "Campeonato Brasileño 2023";
        futureMatch.textContent = "Partidos futuros";
  
        impTitles.textContent = "Títulos más importantes";
  
        clubInfos.textContent =
          "El Clube de Regatas do Flamengo, más conocido simplemente como Flamengo, y popularmente por los apodos Fla, Mengo y Mengão, es un club deportivo brasileño con sede en Río de Janeiro, en el barrio de Gávea.";
  
        since.textContent = "Desde - 15 de noviembre de 1895.";

        mainMatch.textContent = "29/11/2023 - 19:30";
  
        match2.textContent = "03/12/2023 - 16:00";
        match3.textContent = "06/12/2023 - 21:30";
      })
    );
  }
  
  es();
  