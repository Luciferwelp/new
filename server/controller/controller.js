const path = requires('path')
module.export = {
    getHomePage: (req,res) => {
        res.sendFile(path.join(_dirname, `../../client/indexedDB.html`))
    }
        getCSS: (req,res) =>{
            res.sendFile(path.join(_dirname,'../../client/styles.css'))
        }
}