
const tickets = document.querySelectorAll('.on1, .on2, .on3, .on4, .on5');

tickets.forEach(ticket => {

    ticket.addEventListener('mouseenter', () => {
        ticket.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        ticket.style.transform = 'scale(1.1)';
        ticket.style.backgroundColor = '#000000';
        ticket.style.color = '#ffffff';
    });

    ticket.addEventListener('mouseleave', () => {
        ticket.style.transform = 'scale(1)';
        ticket.style.backgroundColor = '#ffffff';
        ticket.style.color = '#000000';
    });
});
