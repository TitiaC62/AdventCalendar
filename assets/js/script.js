const boxes = document.querySelectorAll(".js-box")

boxes.forEach (box => {
    box.addEventListener('click', () => {
        const boxNumber = parseInt(box.textContent)
        const today = new Date(Date.now())
        const dateNumber = today.getDate()
        console.log(today)
        if (boxNumber <= dateNumber){
            console.log("ok")
        }
    })
})