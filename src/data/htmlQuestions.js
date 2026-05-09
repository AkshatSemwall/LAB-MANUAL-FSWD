export const htmlQuestions = [
  {
    title: "Demonstrate all text formatting tags in a single HTML page",
    problem: "Demonstrate all the text formatting tags in a single HTML page including bold, italic, underline, mark, small, del, ins, sub, sup, code, pre and more.",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Text Formatting Tags</title>
</head>
<body>
<h1>HTML Text Formatting Tags Demo</h1>
<p><b>This text is bold (b tag)</b></p>
<p><strong>This text is important (strong tag)</strong></p>
<p><i>This text is italic (i tag)</i></p>
<p><em>This text is emphasized (em tag)</em></p>
<p><u>This text is underlined (u tag)</u></p>
<p><mark>This text is highlighted (mark tag)</mark></p>
<p><small>This text is smaller (small tag)</small></p>
<p><del>This text is deleted (del tag)</del></p>
<p><ins>This text is inserted (ins tag)</ins></p>
<p>This is <sub>subscript</sub> text (sub tag)</p>
<p>This is <sup>superscript</sup> text (sup tag)</p>
<p><code>This is code text (code tag)</code></p>
<pre>
This text is preformatted.
Spaces and line breaks are preserved. (pre tag)
</pre>
<p>I am in 10<sup>th</sup></p>
</body>
</html>`
  },
  {
    title: "Write HTML code to draw a star/pyramid pattern using asterisks",
    problem: "Write a HTML code to draw the following Figure using pre tag:\n*\n* * *\n* * * * *\n* * * * * * *",
    code: `<!DOCTYPE html>
<html>
    <head>
        <title>pattern printing</title>
    </head>
    <body>
        <pre>
                    *
              *     *     *
          *   *     *     *    *
        *   *   *   *   *   *   *
        </pre>
    </body>
</html>`
  },
  {
    title: "Create a web page to print a course-wise subjects table",
    problem: "Create a web page to print the following table: List of Course-wise Subjects with merged cells using rowspan and colspan for MBA and MCM courses.",
    code: `<!DOCTYPE html>
<html>
<head>
<title>List of Course-wise Subjects</title>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 6px;
  text-align: center;
}
</style>
</head>
<body>
<h2 align="center">List of Course-wise Subjects</h2>
<table align="center">
<tr>
  <th rowspan="2">Sr. No.</th>
  <th rowspan="2">Course</th>
  <th rowspan="2">Subject</th>
  <th colspan="2">Marks</th>
  <th colspan="2">Category</th>
  <th rowspan="2">Practical/Theory</th>
</tr>
<tr>
  <th>Internal</th><th>External</th>
  <th>Internal</th><th>External</th>
</tr>
<tr>
  <td rowspan="4">1</td>
  <td rowspan="4">MBA</td>
  <td>Management Accounting</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>Theory</td>
</tr>
<tr><td>Information Technology</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>T and P</td></tr>
<tr><td>Basics of Marketing</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>Theory</td></tr>
<tr><td>E-Commerce</td><td>50</td><td>-</td><td>✔</td><td>-</td><td>Theory</td></tr>
<tr>
  <td rowspan="6">2</td>
  <td rowspan="6">MCM</td>
  <td>Visual Basic</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>T and P</td>
</tr>
<tr><td>Internet Technology</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>T and P</td></tr>
<tr><td>Network Technology</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>Theory</td></tr>
<tr><td>VB.Net</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>T and P</td></tr>
<tr><td>Linux</td><td>30</td><td>70</td><td>-</td><td>✔</td><td>T and P</td></tr>
<tr><td>ISA</td><td>50</td><td>-</td><td>✔</td><td>-</td><td>Theory</td></tr>
</table>
</body>
</html>`
  },
  {
    title: "Using table tags align images with hyperlinks",
    problem: "Using table related tags align the images with hyperlinks. Create a table where each cell contains a company logo image that acts as a hyperlink to that company's website.",
    code: `<!DOCTYPE html>
<html>
<head>
<title>images with links</title>
<style>
table, td, tr {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 6px;
  text-align: center;
}
</style>
</head>
<body>
<h2 align="center">Table with Images and links</h2>
<table align="center">
<tr>
  <td><a href="https://www.google.com"><img src="https://tse1.mm.bing.net/th/id/OIP.f9i-pzHnqMZfG1Yq2EQeXQHaDt?pid=Api&P=0&h=180" height="120" width="120"></a></td>
  <td><a href="https://www.amazon.com"><img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" width="120" height="120"></a></td>
  <td><a href="https://www.microsoft.com"><img src="https://tse4.mm.bing.net/th/id/OIP.TgH53P1y0g2YQLGX9ufT_QHaEP?pid=Api&P=0&h=180" width="120" height="120"></a></td>
</tr>
<tr>
  <td><a href="https://www.facebook.com"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" width="120" height="120"></a></td>
  <td><a href="https://www.youtube.com"><img src="https://pngimg.com/uploads/youtube/youtube_PNG102351.png" width="120" height="120"></a></td>
  <td><a href="https://www.twitter.com"><img src="https://pngimg.com/uploads/twitter/twitter_PNG2.png" width="120" height="120"></a></td>
</tr>
</table>
</body>
</html>`
  },
  {
    title: "Create a web page with image map and hotspots",
    problem: "Create a web page to:\nI. Embed an image map in a web page\nII. Fix the hotspots\nIII. Show all related information when hotspots are clicked.",
    code: `<!DOCTYPE html>
<html>
<head>
<title>Computer System Image Map</title>
</head>
<body>
<h2 align="center">Computer System Image Map</h2>
<img src="https://qsstudy.com/wp-content/uploads/2018/10/Computer-System.jpg"
  usemap="#computer" width="500">
<map name="computer">
  <area shape="rect" coords="150,40,340,170" href="https://en.wikipedia.org/wiki/Computer_monitor" alt="Monitor">
  <area shape="rect" coords="360,80,460,230" href="https://en.wikipedia.org/wiki/Computer_case" alt="CPU">
  <area shape="rect" coords="160,250,360,310" href="https://en.wikipedia.org/wiki/Computer_keyboard" alt="Keyboard">
  <area shape="rect" coords="370,260,430,320" href="https://en.wikipedia.org/wiki/Computer_mouse" alt="Mouse">
  <area shape="rect" coords="20,90,120,220" href="https://en.wikipedia.org/wiki/Printer_(computing)" alt="Printer">
</map>
</body>
</html>`
  },
  {
    title: "Write HTML code for a basic information form (snapshot)",
    problem: "Write a HTML code for the following snapshot — a form with Basic information (Full name, Birth date, Gender, Address, Phone number) and Extra information (Interests, Favorite color) sections.",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>form</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; }
    .buttons { width: 600px; margin: auto; }
  </style>
</head>
<body>
  <form>
    <fieldset>
      <legend><b>Basic information</b></legend>
      <label>Full name:</label>
      <input type="text"><br><br>
      <label>Birth Date:</label>
      <input type="date"><br><br>
      <label>Gender:</label>
      <input type="radio" name="g">Male
      <input type="radio" name="g">Female<br><br>
      <label>Address:</label>
      <input type="text"><br><br>
      <label>Contact no:</label>
      <input type="tel">
    </fieldset>
    <br>
    <fieldset>
      <legend><b>Extra information</b></legend>
      <label>Interest:</label>
      <input type="checkbox">Books
      <input type="checkbox">Sports
      <input type="checkbox">Movies<br><br>
      <label>Fav colour:</label>
      <input type="color">
    </fieldset>
    <br>
    <div class="buttons">
      <input type="submit" value="Send data">
      <input type="reset" value="Reset form">
    </div>
  </form>
</body>
</html>`
  },
  {
    title: "Create a Hotel customer profile data entry web page",
    problem: "Create a web page of customer profile for data entry of customers in a Hotel. The profile should include Name, Address, Age, Gender, Room Type (A/C, Non-A/C or Deluxe), Type of payment (Cash, Credit/Debit Card or Coupons).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Customer Profile</title>
</head>
<body>
  <h2 align="center">Customer Profile</h2>
  <form>
    <fieldset>
      <legend><b>Personal information</b></legend>
      <label>Name:</label> <input type="text"><br><br>
      <label>Address:</label> <input type="text"><br><br>
      <label>Age:</label> <input type="number"><br><br>
      <label>Gender:</label>
      <input type="radio" name="g">Male
      <input type="radio" name="g">Female<br><br>
      <label>Contact no:</label> <input type="tel">
    </fieldset>
    <br>
    <fieldset>
      <legend><b>Room and payment</b></legend>
      <label>Room type:</label>
      <input type="radio" name="r">AC
      <input type="radio" name="r">NON-AC
      <input type="radio" name="r">Deluxe<br><br>
      <label>Payment method:</label>
      <input type="radio" name="p">Cash
      <input type="radio" name="p">Credit/Debit card
      <input type="radio" name="p">Coupon
    </fieldset>
    <br>
    <div align="center">
      <input type="submit">
      <input type="reset">
    </div>
  </form>
</body>
</html>`
  },
  {
    title: "Demonstrate the use of HTML5 semantic and media tags",
    problem: "Demonstrate the use of following HTML5 Tags:\nI. <Video>  II. <Audio>  III. <Header>  IV. <Footer>  V. <Nav>  VI. <Embed>  VII. <Datalist>  VIII. <Bdi>  IX. <Article>  X. <Output>",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>HTML5 Tags Demo</title></head>
<body>
  <header>
    <h2 align="center">My HTML5 Demo Page</h2>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">Downloads</a>
    <a href="#">Menu</a>
  </nav>
  <article>
    <h4>Article Section</h4>
    <p>This is an example of an article element used for independent content.</p>
  </article>
  <h4>Video Example</h4>
  <video controls width="400">
    <source src="" type="video/mp4">
    Your browser does not support video.
  </video>
  <h4>Audio Example</h4>
  <audio controls>
    <source src="" type="audio/mpeg">
    Your browser does not support audio.
  </audio>
  <h3>Embed Example</h3>
  <embed src="https://www.youtube.com/embed/tgbNymZ7vqY" width="300" height="200">
  <h3>Datalist Example</h3>
  <input list="browsers" placeholder="Choose browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
  </datalist>
  <h3>Output Example</h3>
  <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="number" id="a" value="0"> +
    <input type="number" id="b" value="0"> =
    <output name="result">0</output>
  </form>
  <h3>BDI Example</h3>
  <p>User <bdi>إيان</bdi> scored 90 points.</p>
  <footer>
    <p>© 2026 My Website</p>
  </footer>
</body>
</html>`
  },
  {
    title: "Design an HTML page to create a nested list of Programming Languages",
    problem: "Design an HTML page to create the following nested list:\n1. Programming Languages\n   - Python (Frameworks: Django, Flask | Libraries: NumPy, Pandas, Matplotlib)\n   - Java (Core Concepts: OOP, Multithreading | Frameworks: Spring, Hibernate)\n2. Web Development\n   - Frontend: HTML, CSS, JS (React, Vue, Angular)\n   - Backend: Node.js, PHP, Ruby on Rails",
    code: `<!DOCTYPE html>
<html lang="en">
<head><title>Nested List</title></head>
<body>
  <ol>
    <li><b>Programming Languages</b>
      <ul>
        <li><b>Python</b>
          <ul type="square">
            <li>Frameworks
              <ol><li>Django</li><li>Flask</li></ol>
            </li>
            <li>Libraries
              <ul><li>NumPy</li><li>Pandas</li><li>Matplotlib</li></ul>
            </li>
          </ul>
        </li>
        <li><b>Java</b>
          <ul type="square">
            <li>Core Concepts
              <ol><li>OOP</li><li>Multithreading</li><li>Exception Handling</li></ol>
            </li>
            <li>Frameworks
              <ol><li>Spring</li><li>Hibernate</li></ol>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li><b>Web Development</b>
      <ol>
        <li><b>Frontend</b>
          <ul>
            <li type="square">HTML</li>
            <li type="square">CSS</li>
            <li type="square">JavaScript
              <ul>
                <li type="square">React</li>
                <li type="square">Vue.js</li>
                <li type="square">Angular</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><b>Backend</b>
          <ul>
            <li type="square">Node.js</li>
            <li type="square">PHP</li>
            <li type="square">Ruby on Rails</li>
          </ul>
        </li>
      </ol>
    </li>
  </ol>
</body>
</html>`
  }
];