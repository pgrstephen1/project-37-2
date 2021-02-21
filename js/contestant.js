class Contestant{
    constructor(){

    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", function(data){
            contestantCount = data.val();
        })
    }

    updateCount(state){
        database.ref('/').update({
            contestantCount:state
        });
    }

    updateName(name)
    {
        var contestantIndex = "contestant"+contestantCount;
        database.ref(contestantIndex).set({
            
        })
    }
}