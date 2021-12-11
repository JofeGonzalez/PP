window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubc = premium.getBoundingClientRect();
    console.log(ubc);
    if(ubc.top < 784 ){
        console.log("Visible");
    } else {
        console.log("Scrollea");
    }
})