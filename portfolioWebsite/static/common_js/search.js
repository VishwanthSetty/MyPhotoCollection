$(document).ready(function () {

    $('#searchBtn').click(function () {
        openSearchBar();
    });

    $('#searchCloseBtn').click(function () {
        collapseSearchBar();
    });

    $(window).resize(function () {
        if (window.innerWidth >= 930) {
            if (document.getElementById('searchForm').style.display == 'none') {
                document.getElementById('buttonsGrp').style.display = 'inline-block';
            }
        }
    });

});


// Functions....
function openSearchBar() {
    document.getElementById('searchForm').style.display = 'flex';
    document.getElementById('searchBox').setAttribute('autofocus', 'autofocus');
    document.getElementById('buttonsGrp').style.display = 'none';
    document.getElementById('searchBtn').style.display = 'none';
}

function collapseSearchBar() {
    document.getElementById('searchForm').style.display = 'none';
    if (window.innerWidth >= 930) {
        document.getElementById('buttonsGrp').style.display = 'inline-block';
    }
    document.getElementById('searchBtn').style.display = 'inline-block';
}
