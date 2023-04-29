//display  modal on click

const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "unset";
        })

        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "none";
    }
}


const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}

function copyemail() {
    var copyText = document.querySelector("body > div.container > div:nth-child(1) > input[type=email]:nth-child(4)")
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("The E-Mail has been Copied !!"); 
  }



function copypassword(){
    var copyText = document.querySelector("body > div.container > div > input[type=password]:nth-child(6)")
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("The Password has been Copied !!");

}
