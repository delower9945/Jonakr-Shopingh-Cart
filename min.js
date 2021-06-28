


// id caseup and simple coderedundency
document.getElementById('case-increse').addEventListener('click',function(){
    handelinghProductChange(true);
})
document.getElementById('case-descrise').addEventListener('click',function(){
    handelinghProductChange(false);
})


// handelinghProductChange add function 
function handelinghProductChange(IsIncrise){
    const CountInput = document.getElementById('case-count');
    const CaseCount = parseInt(CountInput.value);
    let CaseNewCount = CaseCount;
    // Plus and Mines add condition 
    if( IsIncrise == true ){
        CaseNewCount = CaseCount +1;
    }
    if(IsIncrise == false && CaseCount > 0 ){
        CaseNewCount = CaseCount -1;
    }
    CountInput.value = CaseNewCount;
    const CaseTotal = CaseNewCount * 59;
    document.getElementById('case-total').innerText ='$'+CaseTotal;
}
