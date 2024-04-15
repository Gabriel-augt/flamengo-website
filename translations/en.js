function en() {
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
  
    const en = document.querySelectorAll(".en");
  
    en.forEach((element) => element.addEventListener("click", () => {
        menuHome.textContent = "Home";
        menuMatches.textContent = "Matches";
        menuImportantTitle.textContent = "Important Titles";
        menuAbout.textContent = "About";
  
        hero.innerHTML = "Once Flamengo <br> I will always be Flamengo";
        siteBtn.textContent = "Official Site";
  
        nextMatch.textContent = "Next match";
        brLeague.textContent = "Brazilian championship 2023";
        futureMatch.textContent = "Future matches";
  
        impTitles.textContent = "important titles";
  
        clubInfos.textContent =
          "The Clube de Regatas do Flamengo more commonly referred to as simply Flamengo, and popularly by the nicknames Fla, Mengo and Mengão is a Brazilian sports club based in Rio de Janeiro, in the neighborhood of Gávea";
  
        since.textContent = "Since - November 15, 1895.";
  
        mainMatch.textContent = "11/29/2023 - 19:30";
  
        match2.textContent = "12/03/2023 - 16:00";
        match3.textContent = "12/06/2023 - 21:30";
      })
    );
  }
  
  en();
  