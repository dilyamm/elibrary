const navItems = document.querySelectorAll('.nav-item');

if (navItems.length === 0) {
    console.error("No nav items found!"); 
}

navItems.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`); 
        if (event.key === 'ArrowDown') {
            event.preventDefault(); 
            const nextIndex = (index + 1) % navItems.length;
            navItems[nextIndex].focus();
            console.log(`Moving to: ${nextIndex}`); 
        } else if (event.key === 'ArrowUp') {
            event.preventDefault(); 
            const prevIndex = (index - 1 + navItems.length) % navItems.length;
            navItems[prevIndex].focus();
            console.log(`Moving to: ${prevIndex}`); 
        } else if (event.key === 'Enter') {
            const link = item.querySelector('a');
            if (link) {
                link.click(); 
            }
        }
    });
});

const searchForm = document.querySelector('.search').closest('form');
searchForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        searchForm.submit(); 
    }
});
