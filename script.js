const buttonCarbono = document.querySelector("#buttonCarbono")

const reduceCarbonImage = () => {
    const textDivs = document.querySelectorAll("*")
    textDivs.forEach((textDiv) => {
        textDiv.style = "font-family: normal !important; font-weight: 100 !important;"
    })

    const iframes = document.querySelectorAll("iframe")
    iframes.forEach((iframe) => {
        iframe.src = ''
    })

    const images = document.querySelectorAll("img")
    images.forEach((image) => {
        image.src = ''
        image.srcset = ''
    })
}

buttonCarbono.addEventListener("click", async (event) => {
    event.preventDefault()

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reduceCarbonImage
    })
})