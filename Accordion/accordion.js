(function(window) {

  function openPanel() {
    let titles =  document.querySelectorAll(".accordion__title");
    let images = document.querySelectorAll(".accordion__title  + .accordion__panel .accordion__panel-item img")

    for (let i=0; i<titles.length; i++) {
      titles[i].addEventListener("click", function() {
        titles[i].classList.toggle("active");

        let panel = titles[i].nextElementSibling;
        if (panel.style.opacity === "1") {
          panel.style.opacity = "0";
        } else {
          panel.style.opacity = "1";
          images[i].style.height = "100%";
        }
      });
    }
  }

  openPanel();

})(window);
