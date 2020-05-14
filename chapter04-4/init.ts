export const init = (callback: () => void) => {
    console.log("default inirialization finished")
    callback()
    console.log("all initialization finished")
}