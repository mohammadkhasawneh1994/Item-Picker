function Select(e) {
    var x = e.parentElement.id;
    var html = document.getElementById('x').value;
    if (parseInt(html.length) == 0) {
        document.getElementById('x').value = ","+x;
        e.value = "Remove";
        e.style.backgroundColor = "red";
    }
    else
    {
        if (parseInt(finder(html, x)) == 1)
        {
            document.getElementById('x').value = remover(html, x);
            e.value = "Select";
            e.style.backgroundColor = "#428BCA";
        }
        else
        {
            document.getElementById('x').value = html +","+x;
            e.value = "Remove";
            e.style.backgroundColor = "red";
        }
    }
}

function finder(text, i)
{
    var index = parseInt(i.length);
    var num = parseInt(0);
    var newText = text;
    var count = parseInt(0);
    while (parseInt(newText.length) >= index)
    {
        if (i == newText.substr(1, i.length))
        {
            num = num + 1;
        }
        count = count + 1;
        newText = text.substr(count+index, (text.length) - count);
    }

    return num;
}
function remover(text, i)
{
    var str = null;
    var ind = text.indexOf(i);
    var len = parseInt(i.length);
    if (i == text.substr(ind, text.length - ind)) {
        str = text.substr(0, ind - 1);
    }
    else if ( i == text.substr(1, len))
    {
        str = text.substr(len+1, text.length - ind);
    }
    else {
        var before = text.substr(0, ind - 1);
        var after = text.substr(ind + len, (text.length) - len + 1)
        str = before + after
    }
    return str;
}
