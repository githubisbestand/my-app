const express = require("express");
const app  = express();
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");

const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "prakash123",
    database : "registration"
})

con.connect(function(err){
    if(err)
    {
        console.log(err);
    }else{
        console.log("connection successfull");
    }
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
    
  const upload = multer({ storage: storage });


app.get("/",(req, res)=>{
    const sql = 'SELECT * FROM student';
    con.query(sql, (err, result)=>{
     if(err) return res.json({message : "iside server error"});
     return res.json(result);
    })
})

app.post("/singup", upload.single('profileImage'), (req, res)=>{
    con.query('SELECT MAX(id) AS maxId From STUDENT',(error,results)=>{
        const newId=results[0].maxId+1;
       
        const sql = "INSERT INTO STUDENT (`id`,`name`, `email`, `password`, `profile_image_path`) values (?)";
        const values = [
            newId,
            req.body.name,
            req.body.email,
            req.body.password,
            req.file ? req.file.path : ''
        ]
        con.query(sql, [values], (err, data)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Error adding user" });
            }
            return res.status(200).json({ message: "User added successfully" });
        })
    })   

})

app.put("/update/:id", (req, res)=>{
    const sql = "UPDATE STUDENT set `name` = ?, `email` = ?, `password` = ?, `profile_image_path` = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    con.query(sql, [...values, id], (err, data)=>{
        if(err) return res.json();
        return res.json(data);

    })
})


app.delete("/delete/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
    con.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ error: "Server error" });
        return res.json(data);
    });
});


app.listen(port, ()=>{
    console.log(`listining to the port no ${port}`);
})