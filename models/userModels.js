const User = {
    register: (userData) => {
        return {
            id: Date.now().toString(),
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address
        }
    },
    getUser: () => {
        return {
            id : "123",
            name: "kashif",
            email: "kashif@gmail.com"
        }
    }
}

module.exports = User;