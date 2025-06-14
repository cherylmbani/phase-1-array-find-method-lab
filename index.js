// code your solution here
function superbowlWin(array){
     const winning = array.find(function(eachItem){
        return eachItem.result==="W";
    });
    if(winning){
        return winning.year;
    }else{
        return undefined;
    }
}