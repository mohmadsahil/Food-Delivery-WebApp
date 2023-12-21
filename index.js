// ***********MODAL JS*****************

function openmodal()
{
    document.getElementById("overlay").style.zIndex="1";
    document.getElementById("overlay").style.display="flex";
    document.getElementById("modal").style.zIndex="1";
    document.getElementById("modal").style.display="flex";
}
function closemodal()
{
    document.getElementById("overlay").style.display="none";
    document.getElementById("modal").style.display="none";
}


// ****************RESPONSIVE MENUBAR*******************

let openHamburger=()=>{
    
    document.getElementById('navbar').style.flexDirection="column";
    document.getElementById("Menubar").style.display="block";

    let menus = document.querySelectorAll("#menu-text")
    menus.forEach((element)=>{
        element.style.display="block";
        element.style.padding = "10px"
    })
    document.getElementById("hamburger").style.display="none";
    document.getElementById("hamburger2").style.display="block";
    document.getElementById("hamburger-icon2").style.display="block";
    document.getElementById("hamburger2").style.paddingTop="20px";

}

let closeHamburger=()=>{
    document.getElementById('navbar').style.flexDirection="row";

    let menus = document.querySelectorAll("#menu-text")
    menus.forEach((element)=>{
        element.style.display="none";
    })
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("hamburger-icon2").style.display="none";
    document.getElementById("hamburger2").style.paddingTop="0px";

}


// *******************HANDLE SEARCH ICON***********************


let openSearchbar=()=>{

    let openSearchbar = document.getElementById("Searchbar")
    openSearchbar.style.transition = "1.5s";
    openSearchbar.style.display = "block";
    openSearchbar.style.position = "fixed";
    openSearchbar.style.top = "4%";

}
let closeSearchbar=()=>{
    let openSearchbar = document.getElementById("Searchbar")
    openSearchbar.style.position = "fixed";
    openSearchbar.style.top = "-10%";

}



// ********************HANDLE LIKE BUTTON***************


let count = 0;

let like=(id)=>{
   let like =  document.getElementById(id)
    
    if(like.style.color=="red"){
        count--
        like.style.color = "white";
        document.getElementById("wishlist").innerHTML = count;
        if(count==0){
            document.getElementById("wishlist").innerHTML = "";
        }
        
    }
    else{
        count++
        like.style.color = "red";
        document.getElementById("wishlist").innerHTML = count;
    }
}

