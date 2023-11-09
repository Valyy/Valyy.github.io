
    var buttons = document.querySelectorAll('.button');
    var hiddenSection = document.querySelector('.hidden-section');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            toggleHiddenSection();
            toggleCheckMark(this);
        });
    });

    function toggleHiddenSection() {
        hiddenSection.style.display = (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') ? 'block' : 'none';
    }

    function toggleCheckMark(clickedButton) {
        buttons.forEach(function(button) {
            button.classList.remove('selected');
            button.querySelector('.check-mark').style.opacity = 0;
        });

        clickedButton.classList.add('selected');
        clickedButton.querySelector('.check-mark').style.opacity = 1;
    }
