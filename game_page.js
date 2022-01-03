function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1)*parseInt(number2);

    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    answer = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question+answer+check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}