export const cssQuestions = [
  {
    title: "Show all hyperlinks with specific color and style specifications",
    problem: "Create a web page to show all hyperlinks with following specification:\n- Default color is pink\n- Active color is blue\n- Visited color is Green\n- Hyperlink should be without underline.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>links</title>
  <style>
    a:link    { text-decoration: none; color: pink; }
    a:visited { color: green; }
    a:hover   { color: red; }
    a:active  { color: blue; }
  </style>
</head>
<body>
  <h2>Hyperlink Color Demo</h2>
  <a href="https://www.google.com/" target="_blank"><b>https://www.google.com/</b></a><br><br>
  <a href="https://www.github.com/" target="_blank"><b>https://www.github.com/</b></a><br><br>
  <a href="https://www.stackoverflow.com/" target="_blank"><b>https://www.stackoverflow.com/</b></a>
</body>
</html>`
  },
  {
    title: "Create Box Shadow and Text Shadow using CSS3",
    problem: "Create Box Shadow and text Shadow using CSS3. Demonstrate both properties with different offset and blur values.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>shadow</title>
  <style>
    .box {
      width: 200px; height: 60px;
      margin: 50px;
      background-color: aqua;
      padding: 20px;
      box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    }
    .text {
      margin: 50px;
      font-size: 32px;
      font-weight: bold;
      text-shadow: 4px 4px 8px rgba(0,0,0,0.4);
    }
  </style>
</head>
<body>
  <div class="box">Box with shadow</div>
  <p class="text">Text with shadow</p>
</body>
</html>`
  },
  {
    title: "Create Rounded Corners using CSS3",
    problem: "Create Rounded Corners using css3 border-radius property. Demonstrate a box with rounded corners.",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Rounded corners</title>
  <style>
    .box {
      width: 200px; height: 200px;
      margin: 50px;
      background-color: steelblue;
      padding: 50px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="box">Box with rounded corners</div>
</body>
</html>`
  },
  {
    title: "Show newspaper layout effects using CSS3 columns",
    problem: "Create a web page to show newspaper layout effects on contents given in web page (i.e. in multiple columns) using CSS3 column-count property.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Newspaper Layout</title>
  <style>
    h1 { text-align: center; }
    .newspaper {
      column-count: 3;
      column-gap: 20px;
      column-rule: 1px solid #ccc;
      padding: 20px;
    }
  </style>
</head>
<body>
  <h1>Daily News</h1>
  <div class="newspaper">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Conflict in the region escalates as diplomatic talks stall. World leaders are gathering for emergency summit discussions.</p>
    <p>Technology news: New tariffs on imports affecting global supply chains and markets across multiple sectors.</p>
    <p>Science update: Researchers discover new method for renewable energy generation using solar cells.</p>
    <p>Sports: Local team wins national championship in thrilling final match with record-breaking performance.</p>
  </div>
</body>
</html>`
  },
  {
    title: "Show transition effect — elements gradually change from one style to another",
    problem: "Create a web page to show transition effect in such a way so that elements gradually change from one style to another style. Hover to trigger transition, click to rotate.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Transition Effect</title>
  <style>
    body { background-color: #1a1a2e; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .box {
      width: 200px; height: 100px;
      background-color: #e74c3c;
      color: white; font-weight: bold;
      display: flex; justify-content: center; align-items: center;
      border-radius: 8px;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    .box:hover {
      border-radius: 50%;
      width: 250px; height: 250px;
      background-color: #2ecc71;
      box-shadow: 0 0 30px rgba(46,204,113,0.6);
    }
    .box:active {
      transform: rotate(720deg);
      border-radius: 100%;
    }
  </style>
</head>
<body>
  <div class="box">Hover &amp; Click Me</div>
</body>
</html>`
  },
  {
    title: "Create a web page with fixed background image",
    problem: "Create a web page to show fixed background image — this image will not scroll with the rest of the page using background-attachment: fixed.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Fixed Background</title>
  <style>
    body {
      background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      min-height: 200vh;
    }
    .content {
      background: rgba(0,0,0,0.5);
      color: white;
      padding: 40px;
      margin: 40px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>Fixed Background Image</h1>
    <p>Scroll down — the background stays fixed while the content scrolls!</p>
  </div>
  <div class="content" style="margin-top: 400px;">
    <h2>Scrolled Down</h2>
    <p>Background image remains fixed in place.</p>
  </div>
</body>
</html>`
  },
  {
    title: "Position a background image and repeat horizontally or vertically",
    problem: "Create a web page to position a background image and repeat the image horizontally or vertically using background-repeat: repeat-x and repeat-y.",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Background Repeat</title>
  <style>
    .repeat-x {
      background-image: url('https://via.placeholder.com/100x60/3b82f6/white?text=IMG');
      background-repeat: repeat-x;
      height: 120px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .repeat-y {
      background-image: url('https://via.placeholder.com/60x100/f97316/white?text=IMG');
      background-repeat: repeat-y;
      height: 300px;
      margin: 20px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <h2>Repeat Horizontally (repeat-x)</h2>
  <div class="repeat-x"></div>
  <h2>Repeat Vertically (repeat-y)</h2>
  <div class="repeat-y"></div>
</body>
</html>`
  },
  {
    title: "Demonstrate all types of CSS position properties",
    problem: "Create an HTML page to demonstrate all types of CSS position properties: static, relative, absolute, fixed, and sticky.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Position Properties</title>
  <style>
    body { height: 2000px; font-family: Arial, sans-serif; padding: 20px; }
    .box { width: 150px; height: 80px; padding: 10px; margin: 20px; color: white; font-weight: bold; display:flex; align-items:center; justify-content:center; border-radius: 6px; }
    .static   { position: static;   background-color: steelblue; }
    .relative { position: relative; top: 20px; left: 40px; background-color: green; }
    .absolute { position: absolute; top: 80px; right: 20px; background-color: crimson; }
    .fixed    { position: fixed;    bottom: 10px; right: 10px; background-color: purple; }
    .sticky   { position: sticky;   top: 0; background-color: orange; color: black; padding: 10px; width: 100%; text-align: center; }
  </style>
</head>
<body>
  <h1>CSS Position Properties</h1>
  <div class="sticky">I am Sticky (sticks to top when scrolling)</div>
  <h2>1. Static</h2>  <div class="box static">Static</div>
  <h2>2. Relative</h2> <div class="box relative">Relative</div>
  <h2>3. Absolute</h2> <div class="box absolute">Absolute</div>
  <h2>4. Fixed</h2>   <div class="box fixed">Fixed</div>
  <p style="margin-top:200px">Scroll down to see sticky and fixed effects...</p>
</body>
</html>`
  },
  {
    title: "Design a web page using CSS with fonts, background, links, layers",
    problem: "Design a web page using CSS which includes:\ni. Different font styles\nii. Background image for page and elements\niii. Control repetition with background-repeat\niv. Link styles: a:link, a:active, a:hover, a:visited\nv. Customized cursors for links\nvi. Work with layers (z-index)",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Web Page Design</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-image: url('https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg');
      background-repeat: no-repeat;
      background-size: cover;
    }
    h1 { font-family: Georgia, serif; color: white; text-align: center; margin-top: 20px; }
    p  { font-family: 'Courier New', monospace; color: #222; }
    .box {
      width: 60%; margin: 10px auto; padding: 20px;
      background-image: url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=400');
      background-repeat: repeat-x; background-size: contain;
      border: 2px solid black; min-height: 100px;
    }
    a:link    { color: blue; text-decoration: none; cursor: pointer; }
    a:visited { color: purple; }
    a:hover   { color: red; text-decoration: underline; }
    a:active  { color: green; }
    .layer1 { position: absolute; top: 350px; left: 50px; width: 200px; height: 100px; background-color: rgba(255,0,0,0.7); z-index: 1; color: white; padding: 10px; }
    .layer2 { position: absolute; top: 380px; left: 90px; width: 200px; height: 100px; background-color: rgba(0,0,255,0.7); z-index: 2; color: white; padding: 10px; }
  </style>
</head>
<body>
  <h1>CSS Web Page Design</h1>
  <div class="box">
    <p>This box has its own background with controlled repetition.</p>
    <a href="https://google.com" target="_blank">Visit Google</a>
  </div>
  <div class="layer1">Layer 1 (z-index: 1)</div>
  <div class="layer2">Layer 2 (z-index: 2) — on top</div>
</body>
</html>`
  }
];