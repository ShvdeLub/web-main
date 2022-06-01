async function loadUser() {
    const response = await fetch("data/users.json")
    console.log(response)
}

loadUser()