
const inputsArray = [
    {
        name: "title",
        validation: value => value.length > 3,
        errorText: "La categoría debe tener al menos 4 caracteres"
    }, 
    {
        name: "year",
        validation: value => value > 1800 && value < 2026,
        errorText: "El año está mal"
    }, 
    {
        name: "sinopsis",
        validation: value => value.length > 3,
        errorText: "La sinopsis "
    }, 
    {
        name: "gender",
        validation: value => value,
        errorText: "El genero debe tener al menos 4 caracteres"
    }, 
    {
        name: "director",
    }, 
    {
        name: "country",
    }, 
    {
        name: "image",
        validation: value => value.startsWith("https://"),
        errorText: "El formato de la url de la imagen es incorrecto"
    }
    
]

const uploadSubmit = (event) => {
    alert("por aca")
    event.preventDefault()
    const values = {};
    let isValid = true

    for (let index = 0; index < inputsArray.length; index++) {
        const input = inputsArray[index];
        const inputName = input.name;
        const fieldElement = document.getElementById(inputName);
        const errorElement = document.getElementById(`${inputName}-error`)
        
        if ( !input.validation || input.validation(fieldElement.value)) {
            values[inputName] = fieldElement.type === "checkbox" ? fieldElement.checked : fieldElement.value
            if (fieldElement) fieldElement.className = fieldElement.className.replace(" with-error", "")
            if (errorElement) errorElement.innerText = ""
        } else {
            if (fieldElement) fieldElement.className = fieldElement.className.concat(" with-error")
            if (errorElement) errorElement.innerText = input.errorText
            isValid = false
        }
    }

    if (isValid) {
        console.log(values)
    }
}