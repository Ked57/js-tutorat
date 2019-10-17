const {doSomethingAsync} = require("./error-handling.util")

const callSomethingAsync = async () => {
    try{
        await doSomethingAsync()
    }catch(err){
        return err;
    }
}

exports.callSomethingAsync = callSomethingAsync;