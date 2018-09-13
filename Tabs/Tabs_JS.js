(function(window) {

  function removeActive(currentComponent) {
    let tabComponent = currentComponent.getAttribute("class");

    let tabLinks = currentComponent.querySelectorAll("label .tab");

    for (let x=0; x<tabLinks.length; x++) {
      let href = tabLinks[x].getAttribute("href");
      let link = retrieveID(href);

      tabLinks[x].parentElement.classList.remove("active");

      let content = document.getElementById(link);
      content.style.display = "none";
      content.style.opacity = "0";
    }
  }

  function retrieveID(href) {
    let link = href.slice(1);

    return link;
  }

  function showTabContent() {
    let tabComponents = document.querySelectorAll(".tabComponent");

    for (let i=0; i<tabComponents.length; i++) {
      let tabLinks = tabComponents[i].querySelectorAll("label .tab");

      for (let x=0; x<tabLinks.length; x++) {
        tabLinks[x].addEventListener("click", function(event) {
          removeActive(tabComponents[i]);
          event.preventDefault();
          let href = tabLinks[x].getAttribute("href");
          let link = retrieveID(href);

          tabLinks[x].parentElement.classList.add("active");

          let content = document.getElementById(link);
          content.style.display = "block";
          content.style.opacity = "1";
        });
      }
    }


    console.log(tabComponents.length);
  }

  showTabContent();


})(window);
