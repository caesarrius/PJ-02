let sliderInfo = [{
    img: "images/slider-img_1.png",
    apartmentArea: 81,
	city: 'Rostov-on-Don, Admiral',
	repairTime: 3.5,
	cost: 'Upon request'
  }, {
    img: "images/slider-img_2.png",
    apartmentArea: 105,
	city: 'Sochi Thieves',
	repairTime: 4,
	cost: 'Upon request'
  }, {
    img: "images/slider-img_3.png",
    apartmentArea: 93,
	city: 'Rostov-on-Don Patriotic',
	repairTime: 3,
	cost: 'Upon request'
}];

const sliderArrows = document.querySelector('.slider_arrows')
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
let sliderImages = document.querySelector('.slider_images');
let sliderDots = document.querySelector('.circles');
let areaInfo = document.querySelector('.area-info');
let cityInfo = document.querySelector('.city-info');
let repairTimeInfo = document.querySelector('.repair-time-info');
let repairCostInfo = document.querySelector('.repair-cost-info');
let navDiv = document.querySelector('.section2-list-items');

function initSlider() {
	if (!sliderInfo || !sliderInfo.length) return;
	
	initImages();
	initArrows();
	initNav();
	initDots();
	initInfo();
	
	function initImages() {
		sliderInfo.forEach((option, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${sliderInfo[index].img});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
		});
	};
	
	function initArrows() {
		sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow => {
	  		arrow.addEventListener("click", function() {
				let curNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("left")) {
		  		nextNumber = curNumber === 0? sliderInfo.length - 1 : curNumber - 1;
				} else {
		  		nextNumber = curNumber === sliderInfo.length - 1? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
	  		});
		});
	};
	
	function initNav() {
		sliderInfo.forEach((option, index) => {
			let cityName = sliderInfo[index].city.toUpperCase();
		  	let navItem = `<li class="section2-list-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${cityName}</li>`;
		  	navDiv.innerHTML += navItem;
		});
		
		navDiv.querySelectorAll('.section2-list-item').forEach(item => {
			item.addEventListener("click", function() {
				moveSlider(this.dataset.index);
			})
		})
	};
	
 
    function initDots() {
	    sliderInfo.forEach((option, index) => {
		    let dot = `<div class="circle n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
	    });
	    sliderDots.querySelectorAll(".circle").forEach(dot => {
		    dot.addEventListener("click", function() {
			    moveSlider(this.dataset.index);
		    })
	    })
    };
  
    function moveSlider(num) {
	    sliderImages.querySelector(".active").classList.remove("active");
	    sliderImages.querySelector(".n" + num).classList.add("active");
	    navDiv.querySelector(".active").classList.remove("active");
	    navDiv.querySelector(".n" + num).classList.add("active");
		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + num).classList.add("active");
        changeInfo(num);
    };

    function initInfo() {
	    let apartmentAreaText = `${sliderInfo[0].apartmentArea} m2`;
	    areaInfo.textContent += apartmentAreaText;
	
	    let cityText = `${sliderInfo[0].city}`;
	    cityInfo.textContent += cityText;
	
	    let repairTimeText = `${sliderInfo[0].repairTime} months`;
	    repairTimeInfo.textContent += repairTimeText;
	
	    let repairCostText = `${sliderInfo[0].cost}`;
	    repairCostInfo.textContent += repairCostText;
    }

    function changeInfo(num) {
	    if (!sliderInfo[num].apartmentArea) return;
	    areaInfo.innerText = `${sliderInfo[num].apartmentArea} m2`;
	
	    if (!sliderInfo[num].city) return;
	    cityInfo.innerText = sliderInfo[num].city;
	
	    if (!sliderInfo[num].repairTime) return;
	    repairTimeInfo.innerText = `${sliderInfo[num].repairTime} months`;
	
	    if (!sliderInfo[num].cost) return;
	    repairCostInfo.innerText = sliderInfo[num].cost;
    };
};

  
document.addEventListener("DOMContentLoaded", function(){
	initSlider();
});