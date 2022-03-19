function a(){
    tabsFilter.forEach((el) => {
        if (el.classList.contains("active_tab_work")){
            let tab = el.getAttribute("data-id");
            conteinerWork.forEach((el) => {
                let id = "#" + element.id;
                if(id === tab){
                    element.classList.remove('hidden');
                    element.classList.remove('hidden');
                }else if(a === "All"){
                    element.classList.remove('hidden');
                    element.classList.remove("noShow");
                }
            })
        }
    })
}