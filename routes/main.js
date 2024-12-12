const express = require("express");
const router = express.Router();

// Define our data
var shopData = { appName: "Assignment Tracker", shopName: "Assignment Tracker" };

// Handle our routes
router.get('/', function(req, res) {
    res.render('index.ejs', shopData);
});

router.get('/about', function(req, res) {
    res.render('about.ejs', shopData);
});

router.get('/search', function(req, res) {
    res.render("search.ejs", shopData);
});

router.get('/register', function(req, res) {
    res.render('register.ejs', shopData);
});

router.post('/registered', function(req, res) {
    // Saving data in database
    res.send('Hello ' + req.body.first + ' ' + req.body.last + 
             ' you are now registered! We will send an email to you at ' + req.body.email);
});

// New route for managing assignments
router.get('/assignments', function(req, res) {
    let sqlquery = "SELECT * FROM assignments WHERE user_id = 1"; // Adjust this to use session user ID if needed
    db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('assignment.ejs', { assignments: result, appName: shopData.appName });
    });
});

// Route to submit new assignment
router.post('/assignments', function(req, res) {
    let { title, description, due_date } = req.body;
    let user_id = 1; // Adjust to actual user id
    let sqlquery = "INSERT INTO assignments (title, description, due_date, user_id) VALUES (?, ?, ?, ?)";
    db.query(sqlquery, [title, description, due_date, user_id], (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.redirect('/assignments');
    });
});

// Route to search for new assignment

router.get('/search', function(req, res) {
    res.render("search.ejs", { appName: 'Assignment Tracker' });
});


router.get('/search-result', function(req, res) {
    const keyword = req.query.keyword;
    const query = 'SELECT * FROM assignments WHERE title LIKE ? OR description LIKE ?';
    
    // Query database for assignments matching the keyword
    db.query(query, [`%${keyword}%`, `%${keyword}%`], (err, results) => {
        if (err) {
            return res.send("Error occurred while searching for assignments.");
        }

        res.render('search-results.ejs', {
            appName: 'Assignment Tracker',
            assignments: results,
            keyword: keyword
        });
    });
});


module.exports = router;
