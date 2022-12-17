try {
    hello.toUpperCase();
} catch {
    console.log("Error..........")
}

function yell(msg) {
    try {
        console.log(msg.toUpperCae().repeat(3))
    } catch (error) {
        console.log(error)
        console.log("Please pass the string not the error!!!!")
    }
}

yell(24352325);