const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        const postInfos = document.getElementById("informations")
        
    data.forEach((post) => {
        const name = document.createElement("p")
        name.textContent = post.name

        const phoneNumber = document.createElement("p")
        phoneNumber.textContent = post.phone

        const nameOfCompany = document.createElement("p")
        nameOfCompany.textContent = post.company.name


        postInfos.appendChild(name)
        postInfos.appendChild(phoneNumber)
        postInfos.appendChild(nameOfCompany)
    })
        
    } catch(error) {
        console.log(error);
    }
}

 fetchPost()