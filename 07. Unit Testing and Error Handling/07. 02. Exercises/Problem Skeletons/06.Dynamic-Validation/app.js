function validate() {
    document.getElementById('email').addEventListener('change', (event)=>{
        const target = event.target;
        
        if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(target.value)) {
            target.classList.add('error');
        } else { 
            target.removeAttribute("class"); 
        }

    });
}