var Hist = document.querySelector(".Hist");
var Arch = document.querySelector(".Arch");
var Tour = document.querySelector(".Tour");


Hist.addEventListener("mouseover", function(){
								
								this.style.background="grey";
								this.textContent="Commemorate King George V and Queen Mary";
								});
Hist.addEventListener("mouseout", function(){
								this.textContent = "History";
								this.style.background="orange";});

Arch.addEventListener("mouseover", function(){

								this.style.background="grey";
								this.textContent="Large Arch with a height of 26m";
								});
Arch.addEventListener("mouseout", function(){
								this.textContent="Architectural Layout"
								this.style.background="turquoise";});

Tour.addEventListener("mouseover", function(){

								this.style.background="grey";
								this.textContent="Elephanta Caves and Taj Mahal hotel";
								});
Tour.addEventListener("mouseout", function(){

								this.style.background="magenta";
								this.textContent="Nearby Tourist Attractions"});