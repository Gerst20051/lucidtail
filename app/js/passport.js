var MAX_DETAILS = 10000;

function clearResults() {
    $("#results").empty();
}

function toggleWrap() {
    window.nowrap = !window.nowrap;
    $(".results summary").toggleClass('nowrap');
}

setInterval(function() {
    $("#results").children("details:gt(" + MAX_DETAILS + ")").remove();
}, 10E3);

