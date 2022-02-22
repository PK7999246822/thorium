function dateInfo(){
    console.log(new Date().getDate())
}


function month(){
    console.log((new Date().getMonth())+1)  
}

function batchInfo(message)
{
    console.log(message)
}

module.exports.dateInfo=dateInfo;
module.exports.month=month;
module.exports.batchInfo = batchInfo;