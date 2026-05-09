export const jsQuestions = [
  {
    title: "Validate credit card numbers (Visa, MasterCard, American Express)",
    problem: "Design a web page to validate credit card numbers per the specifications:\n- Master Card: Prefix 51–55, Length 16\n- Visa: Prefix 4, Length 13 or 16\n- American Express: Prefix 34 or 37, Length 15",
    code: `<!DOCTYPE html>
<head>
  <title>Credit Card Validator</title>
  <script>
    function validateCard() {
      let card = document.getElementById("card").value;
      let result = document.getElementById("result");
      let visa = /^4\\d{12}(\\d{3})?$/;
      let mastercard = /^5[1-5]\\d{14}$/;
      let AE = /^3[47]\\d{13}$/;
      if (visa.test(card)) {
        result.innerHTML = "✔ Visa Card";
        result.style.color = "green";
      } else if (mastercard.test(card)) {
        result.innerHTML = "✔ Master Card";
        result.style.color = "green";
      } else if (AE.test(card)) {
        result.innerHTML = "✔ American Express Card";
        result.style.color = "green";
      } else {
        result.innerHTML = "✖ Invalid Card Number";
        result.style.color = "red";
      }
    }
  </script>
</head>
<body>
  <h2>Validate Credit Card Number</h2>
  <label>Enter Card No: </label>
  <input type="text" id="card" placeholder="Enter card number">
  <button onclick="validateCard()">Validate</button>
  <p id="result"></p>
</body>
</html>`
  },
  {
    title: "Validate Name, Email ID and Password",
    problem: "Design a web page to validate the following according to standard conditions:\na. Name\nb. E-Mail-id\nc. Password (8-14 characters)",
    code: `<!DOCTYPE html>
<html>
<head>
  <script>
    function verify() {
      let name  = document.getElementById("name").value;
      let email = document.getElementById("mail").value;
      let pass  = document.getElementById("pass").value;
      let namep  = /^[a-zA-Z]{2,}$/;
      let emailp = /^[a-zA-Z0-9]+@(gmail|yahoo)(\.com|\.in)$/;
      let passp  = /^.{8,14}$/;
      document.getElementById("nameres").innerHTML = namep.test(name)  ? "✔ Valid" : "✖ Invalid name";
      document.getElementById("mailres").innerHTML = emailp.test(email) ? "✔ Valid" : "✖ Invalid email";
      document.getElementById("passres").innerHTML = passp.test(pass)  ? "✔ Valid" : "✖ Must be 8-14 chars";
      document.getElementById("nameres").style.color = namep.test(name)  ? "green" : "red";
      document.getElementById("mailres").style.color = emailp.test(email) ? "green" : "red";
      document.getElementById("passres").style.color = passp.test(pass)  ? "green" : "red";
      return false;
    }
  </script>
</head>
<body>
  <form>
    <fieldset>
      <legend><h2>Verification Form</h2></legend>
      Name: <input type="text" id="name">
      <p id="nameres"></p>
      Email: <input type="text" id="mail">
      <p id="mailres"></p>
      Password: <input type="password" id="pass">
      <p id="passres"></p>
      <button onclick="return verify()">Verify</button>
    </fieldset>
  </form>
</body>
</html>`
  },
  {
    title: "Country and capital matching quiz",
    problem: "Store some country names and their capitals. Ask the user to select a country and its capital from two lists. If the match is correct, display 'Correct answer'; otherwise, display an error message and tell the correct answer.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    button { color: blue; padding: 8px 16px; }
    select { margin: 10px; padding: 6px; }
  </style>
  <script>
    const capitals = { Ind: "ND", SL: "Col", SA: "Ct", USA: "WD", Eng: "Lon" };
    const capitalNames = { ND: "New Delhi", Col: "Colombo", Ct: "Capetown", WD: "Washington DC", Lon: "London" };
    function verify() {
      let country = document.getElementById("country").value;
      let capital = document.getElementById("capital").value;
      let r = document.getElementById("res");
      if (capitals[country] === capital) {
        r.innerHTML = "✔ Correct Answer!";
        r.style.color = "green";
      } else {
        r.innerHTML = "✖ Wrong! Correct capital is: " + capitalNames[capitals[country]];
        r.style.color = "red";
      }
    }
  </script>
</head>
<body>
  <h3>Country Capital Quiz</h3>
  <label>Select Country:</label>
  <select id="country">
    <option value="Ind">India</option>
    <option value="SL">Sri Lanka</option>
    <option value="SA">South Africa</option>
    <option value="USA">USA</option>
    <option value="Eng">England</option>
  </select>
  <br>
  <label>Select Capital:</label>
  <select id="capital">
    <option value="ND">New Delhi</option>
    <option value="Col">Colombo</option>
    <option value="Ct">Capetown</option>
    <option value="WD">Washington DC</option>
    <option value="Lon">London</option>
  </select>
  <br><br>
  <button onclick="verify()">Check Answer</button>
  <p id="res"></p>
</body>
</html>`
  },
  {
    title: "Design a simple Calculator",
    problem: "Design a simple Calculator web page that can perform basic arithmetic operations: addition, subtraction, multiplication and division.",
    code: `<!DOCTYPE html>
<head>
  <style>
    .calculator { width: 300px; border: 5px solid #333; padding: 20px; margin: auto; background: rgb(92,92,125); border-radius: 10px; }
    h3 { color: aqua; text-align: center; }
    button { color: white; background: #2a6496; border: none; padding: 8px 14px; margin: 4px; border-radius: 4px; cursor: pointer; font-size: 14px; }
    input { color: lime; background: rgb(40,40,60); border: 1px solid #555; padding: 6px; border-radius: 4px; width: 100%; margin-bottom: 10px; }
    #res { color: orange; font-size: 18px; font-weight: bold; text-align: center; margin-top: 10px; }
  </style>
  <script>
    function calc(op) {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      let r;
      if (op==='+') r=n1+n2;
      else if (op==='-') r=n1-n2;
      else if (op==='*') r=n1*n2;
      else if (op==='/') r = n2!==0 ? n1/n2 : "Error: Divide by zero";
      document.getElementById("res").innerHTML = "Result: " + r;
    }
  </script>
</head>
<body>
  <div class="calculator">
    <h3>CALCULATOR</h3>
    First digit: <input type="number" id="n1">
    Second digit: <input type="number" id="n2">
    <div style="text-align:center">
      <button onclick="calc('+')">Add</button>
      <button onclick="calc('-')">Sub</button>
      <button onclick="calc('*')">Mul</button>
      <button onclick="calc('/')">Div</button>
    </div>
    <p id="res">Result</p>
  </div>
</body>
</html>`
  },
  {
    title: "Design a web page that self-modifies after every minute",
    problem: "Design a web page that is self-modifying itself after every minute — changing its content, background color, and text color using setInterval.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    #box {
      width: 300px; padding: 20px; border: 2px solid black;
      background: aqua; color: red; font-family: Arial, sans-serif;
      margin: 50px auto; text-align: center; border-radius: 8px;
      box-shadow: 5px 5px 10px black; font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="box">Page will update every 60 seconds...</div>
  <script>
    function modifyPage() {
      const box = document.getElementById("box");
      box.innerHTML = "Updated at: " + new Date().toLocaleTimeString();
      const colors = ["red","blue","green","purple","orange","teal"];
      box.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
      box.style.color = colors[Math.floor(Math.random()*colors.length)];
    }
    setInterval(modifyPage, 60000);
  </script>
</body>
</html>`
  },
  {
    title: "Design a web page that implements a running clock",
    problem: "Design a web page that implements a running clock — displays current time updating every second using setInterval and Date object.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1a1a2e; }
    #clock {
      width: 250px; height: 250px; border: 4px solid #00d4ff;
      border-radius: 50%; display: flex; flex-direction: column;
      justify-content: center; align-items: center;
      color: #00d4ff; font-family: 'Courier New', monospace;
    }
    #time   { font-size: 28px; font-weight: bold; }
    #date   { font-size: 14px; margin-top: 8px; color: #aaa; }
  </style>
</head>
<body>
  <div id="clock">
    <div id="time"></div>
    <div id="date"></div>
  </div>
  <script>
    function updateClock() {
      const now = new Date();
      document.getElementById("time").textContent = now.toLocaleTimeString();
      document.getElementById("date").textContent = now.toLocaleDateString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  </script>
</body>
</html>`
  },
  {
    title: "Accept birthdate and display the day of the week",
    problem: "Write a code for a web application that accepts the user's birthdate in a textbox and displays the day of the week in a message box at the click of a button.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Find Day of Birth</title>
</head>
<body>
  <h3>Enter Your Birthdate:</h3>
  <input type="date" id="dob">
  <button onclick="findDay()">Find Day</button>
  <p id="result" style="font-size:18px; font-weight:bold; color:green;"></p>
  <script>
    function findDay() {
      const input = document.getElementById("dob").value;
      if (!input) { alert("Please select a date"); return; }
      const date = new Date(input);
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("result").textContent = "You were born on: " + days[date.getDay()];
    }
  </script>
</body>
</html>`
  },
  {
    title: "Parse telephone number string and extract area code",
    problem: "Write a script that inputs a telephone number as a string in the form (555)555-5555. The script should use the string's split method to extract the area code and the last four digits. Display the area code in one text field and the seven-digit phone number in another.",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>Phone Parser</title></head>
<body>
  <h3>Enter Phone Number (format: (555)555-5555)</h3>
  <input type="text" id="phone" placeholder="(555)555-5555">
  <button onclick="extract()">Extract</button>
  <br><br>
  Area Code: <input type="text" id="area" readonly><br><br>
  Phone Number: <input type="text" id="number" readonly>
  <script>
    function extract() {
      const input = document.getElementById("phone").value;
      const parts = input.split(")");
      const areaCode = parts[0].split("(")[1];
      const numberParts = parts[1].split("-");
      const fullNumber = numberParts[0] + "-" + numberParts[1];
      document.getElementById("area").value = areaCode;
      document.getElementById("number").value = fullNumber;
    }
  </script>
</body>
</html>`
  },
  {
    title: "Functions — find left-most vowel position and reverse a number",
    problem: "Develop and demonstrate an HTML file that includes JavaScript functions for:\na. Parameter: A string → Output: Position of left-most vowel\nb. Parameter: A number → Output: The number with digits in reverse order",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>Functions Demo</title></head>
<body>
  <h3>Find Left-most Vowel Position</h3>
  <input type="text" id="str" placeholder="Enter a string">
  <button onclick="findVowel()">Find Position</button>
  <p id="vowelResult"></p>
  <hr>
  <h3>Reverse a Number</h3>
  <input type="number" id="num" placeholder="Enter a number">
  <button onclick="reverseNum()">Reverse</button>
  <p id="numResult"></p>
  <script>
    function leftMostVowel(str) {
      str = str.toLowerCase();
      const vowels = "aeiou";
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) return i;
      }
      return -1;
    }
    function findVowel() {
      const input = document.getElementById("str").value;
      const pos = leftMostVowel(input);
      document.getElementById("vowelResult").innerText =
        pos === -1 ? "No vowel found" : "Left-most vowel at position: " + (pos + 1);
    }
    function reverseNumber(num) {
      let rev = 0;
      while (num > 0) { rev = rev * 10 + (num % 10); num = Math.floor(num / 10); }
      return rev;
    }
    function reverseNum() {
      const input = Number(document.getElementById("num").value);
      document.getElementById("numResult").innerText = "Reversed: " + reverseNumber(input);
    }
  </script>
</body>
</html>`
  },
  {
    title: "Toggle case — convert upper to lower and lower to upper",
    problem: "Write a JavaScript function that takes a string with lower and upper case letters as a parameter and converts upper case letters to lower case and lower case letters to upper case.",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>Toggle Case</title></head>
<body>
  <h3>Enter a String:</h3>
  <input type="text" id="inputStr" placeholder="Enter text" style="padding:6px; font-size:16px;">
  <button onclick="convert()" style="padding:6px 14px;">Convert Case</button>
  <p id="result" style="font-size:18px; font-weight:bold; color:darkblue;"></p>
  <script>
    function toggleCase(str) {
      let result = "";
      for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        result += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
      }
      return result;
    }
    function convert() {
      const input = document.getElementById("inputStr").value;
      document.getElementById("result").innerText = "Result: " + toggleCase(input);
    }
  </script>
</body>
</html>`
  },
  {
    title: "Maruti car survey — tabulate data across metro cities",
    problem: "Design a web page to perform a survey on four different models of Maruti (K10, Zen-Astelo, Wagnor, SX4) owned by people in four metro cities (Delhi, Mumbai, Chennai, Kolkata). Calculate total number of cars per city.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Maruti Survey</title>
  <style>
    table, th, td { border: 1px solid black; border-collapse: collapse; padding: 10px; text-align: center; }
    th { background: #2a6496; color: white; }
    button { margin-top: 16px; padding: 8px 20px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Maruti Car Survey</h2>
  <table>
    <tr><th>City</th><th>Maruti-K10</th><th>Zen-Astelo</th><th>Wagnor</th><th>Maruti-SX4</th><th>Total</th></tr>
    <tr><td>Delhi</td>  <td><input type="number" id="d1" style="width:50px"></td><td><input type="number" id="d2" style="width:50px"></td><td><input type="number" id="d3" style="width:50px"></td><td><input type="number" id="d4" style="width:50px"></td><td id="dt">-</td></tr>
    <tr><td>Mumbai</td> <td><input type="number" id="m1" style="width:50px"></td><td><input type="number" id="m2" style="width:50px"></td><td><input type="number" id="m3" style="width:50px"></td><td><input type="number" id="m4" style="width:50px"></td><td id="mt">-</td></tr>
    <tr><td>Chennai</td><td><input type="number" id="c1" style="width:50px"></td><td><input type="number" id="c2" style="width:50px"></td><td><input type="number" id="c3" style="width:50px"></td><td><input type="number" id="c4" style="width:50px"></td><td id="ct">-</td></tr>
    <tr><td>Kolkata</td><td><input type="number" id="k1" style="width:50px"></td><td><input type="number" id="k2" style="width:50px"></td><td><input type="number" id="k3" style="width:50px"></td><td><input type="number" id="k4" style="width:50px"></td><td id="kt">-</td></tr>
  </table>
  <button onclick="calculate()">Calculate Totals</button>
  <script>
    function get(id) { return parseInt(document.getElementById(id).value) || 0; }
    function calculate() {
      document.getElementById("dt").innerText = get("d1")+get("d2")+get("d3")+get("d4");
      document.getElementById("mt").innerText = get("m1")+get("m2")+get("m3")+get("m4");
      document.getElementById("ct").innerText = get("c1")+get("c2")+get("c3")+get("c4");
      document.getElementById("kt").innerText = get("k1")+get("k2")+get("k3")+get("k4");
    }
  </script>
</body>
</html>`
  }
];