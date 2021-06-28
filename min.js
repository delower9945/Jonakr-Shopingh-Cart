
document.getElementById('case-increse').addEventListener('click',function(){
    const CountInput = document.getElementById('case-count');
    const CaseCount = parseInt(CountInput.value);
    const CaseNewCount = CaseCount +1;
    CountInput.value = CaseNewCount;
    const CaseTotal = CaseNewCount * 59;
    document.getElementById('case-total').innerText ='$'+CaseTotal;
})


document.getElementById('case-descrise').addEventListener('click',function(){
    const CountInput = document.getElementById('case-count');
    const CaseCount = parseInt(CountInput.value);
    const CaseNewCount = CaseCount - 1;
    CountInput.value = CaseNewCount;
    
    const CaseTotal = CaseNewCount * 59;
    document.getElementById('case-total').innerText ='$'+CaseTotal;
})

