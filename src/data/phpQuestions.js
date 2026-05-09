export const phpQuestions = [
  {
    title: "Create a web page to maintain a session using PHP",
    problem: "Create a web page to maintain a session using PHP. Implement session start, show session data, and session destroy functionality.",
    code: `<?php
session_start();

if(isset($_GET['action'])) {
    if($_GET['action'] == "start") {
        $_SESSION["username"] = "Akshay";
        $_SESSION["visits"]   = 1;
    }
    if($_GET['action'] == "show") {
        if(isset($_SESSION["username"])) {
            echo "Username: " . $_SESSION["username"] . "<br>";
            echo "Visits: "   . $_SESSION["visits"]   . "<br>";
        } else {
            echo "No session found!<br>";
        }
    }
    if($_GET['action'] == "destroy") {
        session_destroy();
        echo "Session destroyed!<br>";
    }
}
?>
<!DOCTYPE html>
<html>
<body>
  <h2>PHP Session Demo</h2>
  <a href="?action=start">Start Session</a><br><br>
  <a href="?action=show">Show Session</a><br><br>
  <a href="?action=destroy">Destroy Session</a>
</body>
</html>`
  },
  {
    title: "Create a program to write and retrieve cookies",
    problem: "Create a PHP program to write and retrieve cookies. Allow the user to set a cookie with their name and retrieve it.",
    code: `<?php
// Set cookie (valid for 1 hour)
if(isset($_POST['set'])) {
    $name = $_POST['name'];
    setcookie("username", $name, time() + 3600);
    echo "Cookie has been set!<br>";
}

// Retrieve cookie
if(isset($_POST['get'])) {
    if(isset($_COOKIE["username"])) {
        echo "Stored Name: " . $_COOKIE["username"] . "<br>";
    } else {
        echo "No cookie found!<br>";
    }
}
?>
<!DOCTYPE html>
<html>
<body>
  <h2>Cookie Demo</h2>
  <form method="post">
    Enter Name: <input type="text" name="name"><br><br>
    <button type="submit" name="set">Set Cookie</button>
    <button type="submit" name="get">Get Cookie</button>
  </form>
</body>
</html>`
  },
  {
    title: "Store page view count in SESSION and increment on each refresh",
    problem: "Write a PHP program to store page views count in SESSION, to increment the count on each refresh, and to show the count on the web page.",
    code: `<?php
session_start();

if(isset($_SESSION['count'])) {
    $_SESSION['count']++;
} else {
    $_SESSION['count'] = 1;
}
?>
<!DOCTYPE html>
<html>
<body>
  <h2>Page View Counter</h2>
  <p>This page has been viewed 
    <strong><?php echo $_SESSION['count']; ?></strong> time(s).</p>
  <p>Refresh the page to increment the count.</p>
</body>
</html>`
  },
  {
    title: "Store current date-time in COOKIE and display last visited time",
    problem: "Write a PHP program to store current date-time in a COOKIE and display the 'Last visited on date-time' on the web page upon reopening of the same page.",
    code: `<?php
date_default_timezone_set("Asia/Kolkata");

if(isset($_COOKIE['last_visit'])) {
    $last = $_COOKIE['last_visit'];
} else {
    $last = null;
}

// Update cookie with current time (valid 1 day)
setcookie("last_visit", date("d-m-Y H:i:s"), time() + 86400);
?>
<!DOCTYPE html>
<html>
<body>
  <h2>Last Visit Cookie Demo</h2>
  <?php if($last): ?>
    <p>Last visited on: <strong><?php echo $last; ?></strong></p>
  <?php else: ?>
    <p>This is your <strong>first visit!</strong></p>
  <?php endif; ?>
  <p>Current time: <?php echo date("d-m-Y H:i:s"); ?></p>
</body>
</html>`
  },
  {
    title: "Book library system — add and search books using PHP & MySQL",
    problem: "Using PHP and MySQL, develop a program to accept book information (Accession number, title, authors, edition, publisher) from a web page and store in a database. Also implement search by title.",
    code: `<?php
/*
CREATE DATABASE library;
USE library;
CREATE TABLE books (
    acc_no    INT PRIMARY KEY,
    title     VARCHAR(100),
    author    VARCHAR(100),
    edition   VARCHAR(20),
    publisher VARCHAR(100)
);
*/

$conn = new mysqli("localhost", "root", "", "library");

if(isset($_POST['add'])) {
    $conn->query("INSERT INTO books VALUES(
        {$_POST['acc']}, '{$_POST['title']}',
        '{$_POST['author']}', '{$_POST['edition']}',
        '{$_POST['publisher']}'
    )");
    echo "<p style='color:green'>Book added successfully!</p>";
}

$result = null;
if(isset($_POST['search'])) {
    $title  = $_POST['search_title'];
    $result = $conn->query("SELECT * FROM books WHERE title='$title'");
}
?>
<form method="post">
  <h3>Add Book</h3>
  Acc No:    <input name="acc"><br>
  Title:     <input name="title"><br>
  Author:    <input name="author"><br>
  Edition:   <input name="edition"><br>
  Publisher: <input name="publisher"><br>
  <button name="add">Add Book</button>

  <h3>Search Book</h3>
  Title: <input name="search_title">
  <button name="search">Search</button>
</form>

<?php if($result && $result->num_rows > 0): ?>
  <table border="1">
    <tr><th>Acc No</th><th>Title</th><th>Author</th><th>Edition</th><th>Publisher</th></tr>
    <?php while($row = $result->fetch_assoc()): ?>
    <tr>
      <td><?=$row['acc_no']?></td><td><?=$row['title']?></td>
      <td><?=$row['author']?></td><td><?=$row['edition']?></td>
      <td><?=$row['publisher']?></td>
    </tr>
    <?php endwhile; ?>
  </table>
<?php endif; ?>`
  },
  {
    title: "Create a login form with credential validation using PHP & MySQL",
    problem: "Create a login form with fields for User ID and Password. Upon form submission, validate credentials by matching with existing database records. If correct, display a welcome page.",
    code: `<?php
/*
CREATE TABLE users (
    userid   VARCHAR(50),
    password VARCHAR(50)
);
INSERT INTO users VALUES ('admin', '1234');
*/

$conn = new mysqli("localhost", "root", "", "library");

if(isset($_POST['login'])) {
    $u = $_POST['user'];
    $p = $_POST['pass'];
    $res = $conn->query(
        "SELECT * FROM users WHERE userid='$u' AND password='$p'"
    );
    if($res->num_rows > 0) {
        echo "<h2 style='color:green'>Welcome, $u! Login Successful.</h2>";
        exit;
    } else {
        echo "<p style='color:red'>Invalid credentials!</p>";
    }
}
?>
<form method="post">
  <h2>Login</h2>
  User ID:  <input name="user"><br><br>
  Password: <input type="password" name="pass"><br><br>
  <button name="login">Login</button>
</form>`
  },
  {
    title: "Display all records from PERS table by Department Number",
    problem: "Create a PHP page that displays all records from the PERS table where the Department Number (dno) matches one of the values listed on the web interface.",
    code: `<?php
/*
CREATE TABLE pers (
    id   INT,
    name VARCHAR(50),
    dno  INT
);
*/

$conn   = new mysqli("localhost", "root", "", "library");
$result = null;

if(isset($_POST['show'])) {
    $dno    = $_POST['dno'];
    $result = $conn->query("SELECT * FROM pers WHERE dno=$dno");
}
?>
<form method="post">
  <h2>Search by Department Number</h2>
  Enter Department No: <input name="dno" type="number">
  <button name="show">Show Records</button>
</form>

<?php if($result): ?>
  <?php if($result->num_rows > 0): ?>
    <table border="1" style="margin-top:16px">
      <tr><th>ID</th><th>Name</th><th>Dept No</th></tr>
      <?php while($row = $result->fetch_assoc()): ?>
      <tr>
        <td><?=$row['id']?></td>
        <td><?=$row['name']?></td>
        <td><?=$row['dno']?></td>
      </tr>
      <?php endwhile; ?>
    </table>
  <?php else: ?>
    <p style="color:red">No records found for Dept No: <?=$_POST['dno']?></p>
  <?php endif; ?>
<?php endif; ?>`
  }
];