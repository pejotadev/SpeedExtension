const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimeButton")

        button.addEventListener("click", () =>{
            const audios = document.querySelectorAll("audio")
            audios.forEach(audio => {
                if (audio.playbackRate == 2) {
                    audio.playbackRate = 1
                    button.style.color = "grey"  
                }else{
                    audio.playbackRate = 2
                    button.style.color = "#039be5"
                }  
            })
        })

        header.appendChild(button)
    }
}, 1000)
