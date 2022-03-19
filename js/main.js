
/////////section Tabs/////////////////////////////////////
let listTabs = document.querySelectorAll(".services-tab");
let tabsContent = document.querySelectorAll(".content_tabs");
listTabs.forEach((currentBtn) =>{
    currentBtn.addEventListener("click", () =>{
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if(!currentBtn.classList.contains("active_tab")){
            listTabs.forEach((item) => item.classList.remove("active_tab"))
        };
        tabsContent.forEach((item) =>{
        item.classList.remove("show")
        })
        currentBtn.classList.add("active_tab")
        currentTab.classList.add("show")
    })
})
//////////////section AmazingWork////////////////////////
let workSection = document.querySelector("#work-section-imgs");
let btnWorkSection = document.querySelector("#btn");

let arr = [];
let arr2 = [];
function clone (){
    
    for (let index = 1; index <=12; index++) {
        div_web = document.createElement("DIV");
        div_web.classList.add("web");
        div_web.classList.add("noShow");
        let clone = document.querySelector(".hover-work-img").cloneNode(true);
        let img = document.createElement("IMG");
        img.classList.add("work-img");
        img.src = `./img/web-design/work${index}.jpg`;
        arr.push(img); 
        if(index >= 7 && index <= 8){
            div_web.setAttribute("id","landingPages");
        }else if(index >=10){
            div_web.setAttribute("id","wordPress");
        }else if(index <=5 ){
            div_web.setAttribute("id","webDesign");
        }else{
            div_web.setAttribute("id","graphicDesign");
        }
        arr2.push(div_web);
        div_web.setAttribute("data-atr","All")
        div_web.prepend(img);
        div_web.append(clone);
        workSection.append(div_web);
    }
}
    
clone()

let tabsFilter = document.querySelectorAll(".services-work-link");
let conteinerWork = document.querySelectorAll(".web");
let preloadList = document.querySelector(".preload-list");
tabsFilter.forEach((currentBtn) =>{
    currentBtn.addEventListener("click", () =>{
        btnWorkSection.style.opacity = 1;
        arr2.forEach((el) => el.classList.add("noShow"))
        let tabId = currentBtn.getAttribute("data-id");
        let currentTab = document.querySelectorAll(tabId);          
        if(!currentBtn.classList.contains("active_tab_work")){
            tabsFilter.forEach((item) => item.classList.remove("active_tab_work"))
        };
        conteinerWork.forEach((item) =>{
            item.classList.add("hidden");
            // item.classList.remove("noShow");
        })
        currentBtn.classList.add("active_tab_work")
        currentTab.forEach(element => {
            element.classList.remove("hidden");
        });
        if(currentBtn.textContent === "All"){
            conteinerWork.forEach(element => {
                element.classList.remove("hidden");
                        });
            
        }
    })
})

btnWorkSection.addEventListener("click",a)
function a(){
    
    preloadList.classList.add('preload-active');
    setTimeout(() => {
        tabsFilter.forEach((el) => {  
          if (el.classList.contains("active_tab_work") && el.textContent === "All"){
            conteinerWork.forEach((item) => {
            item.classList.remove('hidden');
            item.classList.remove('noShow');
            })
           
        }else if (el.classList.contains("active_tab_work")){
            let tab = el.getAttribute("data-id");
            conteinerWork.forEach((e) => {
                if(e.id === tab.slice(1)){
                    e.classList.remove('hidden');
                    e.classList.remove('noShow');
                }
            })
        }
        
    })
    btnWorkSection.style.opacity = 0;
        preloadList.classList.remove('preload-active');
       
    }, 2000);
}
   
//////////////////////////Slaider/////////////////////////////////////////////////////////

$(document).on('ready', function() {
  $('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.slider',
    useTransform:true,
  });
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    centerPadding: "10px",
    centerMode: true,
    focusOnSelect: true,
    appendArrows: $('.slider-arrows'),
            prevArrow: '<span class="slider-arrow-one"><</span>',
            nextArrow: '<span class="slider-arrow-two">></span>'
  });
})














   




  