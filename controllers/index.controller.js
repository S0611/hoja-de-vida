async function getHome(req, res){
    try{
        return res.sendFile(path.resolve("public", 'index.html'));
    }catch(e){
        const error =  new Error();
        error.status = 400;
        error.message = "Error loading the file"
        throw error;
    }
}

module.exports = {
    getHome
}
