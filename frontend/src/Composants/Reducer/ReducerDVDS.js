export default function(dvds = [], action){
    // console.log("Action Reducer -->",action)
    // console.log("TableContent -->",TableContent) 
    var DVDContentCopy = [...dvds]
    
    if (action.type === 'setDVD') {
        console.log("Action", action)
        var results = action.dvds
    
        for (var i = 0; i < results.length; i++) {
            DVDContentCopy.push(results[i])
        }
    
        return DVDContentCopy;
    }else if(action.type === 'addDVD'){
        console.log("addDVD", action)
        DVDContentCopy.push(action)
        return DVDContentCopy;
    }else{
        return dvds;
    }
}