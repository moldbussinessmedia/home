const el = document.getElementById('poster')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20
    
    el.style.transform = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
})

el.addEventListener('mouseout', () => {
    el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
})

const el2 = document.getElementById('poster2')
const height2 = el.clientHeight
const width2 = el.clientWidth

el2.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20
    
    el2.style.transform = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
})

el2.addEventListener('mouseout', () => {
    el2.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
})