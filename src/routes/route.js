const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const UserController= require("../controllers/userController")
const ReviewController= require("../controllers/reviewController")
const {authentication , authorisation} = require("../middlewares/auth")

const aws = require("aws-sdk")

const removeUploadedFiles = require('multer/lib/remove-uploaded-files');



aws.config.update(
    {
        accessKeyId: "AKIAY3L35MCRVFM24Q7U",
        secretAccessKey: "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",
        region: "ap-south-1"
    }
)

let uploadFile =  (file) => {
    return  new Promise( function(resolve, reject) {
        //this function will upload file to aws and return the link
        let s3 = new aws.S3({ apiVersion: "2006-03-01" }) //we will be using s3 service of aws
        // uploadFile(files[0])
        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket", // HERE
            Key: "priyanka/" + file.originalname, // HERE "ashutosh/smiley.jpg"
            Body: file.buffer
        }

    s3.upload(uploadParams, function (err, data) {
            if (err) { 
                console.log(err);
                return reject({ "error": err }) 
            }

            console.log(data)
            console.log(" file uploaded succesfully ")
            return resolve(data.Location) // HERE
    })

    // let data= await s3.upload(uploadParams)
    // if (data) return data.Location
    // else return "there is an error"

    }
    )
}

// AWS S3 Link Work
router.post("/write-file-aws", async function (req, res) {
    try {
        let files = req.files
        // console.log(files, files[0])
        if (files && files.length > 0) {
            //upload to s3 and get the uploaded link
            // res.send the link back to frontend/postman
            let uploadedFileURL = await uploadFile(files[0])
            res.status(201).send({ msg: "file uploaded succesfully", data: uploadedFileURL })
        }
        else {
            res.status(400).send({ msg: "No file found" })
        }
    }
    catch (err) {
        res.status(500).send({ msg: err })
    }
}
)



//First API -: To register a user by POST method
router.post("/register", UserController.createUser)

//Second API -: To login a user by POST method
router.post("/login" , UserController.loginUser)

//Third API-: To create a book for a user by POST method
router.post("/books" , authentication , authorisation , BookController.createBook)

//Fourth API -: To get books by inputs provided in query params using GET method
router.get("/books" , authentication , BookController.getBooks)

//Fifth API -: To get books by book id provided in path params using GET method
router.get("/books/:bookId" , authentication , BookController.getBookById)

//Sixth API -: To update a book document by bookId (recieved from path params) using PUT method
router.put("/books/:bookId" , authentication , authorisation , BookController.updateBook)

//Seventh API -: To delete a book document by bookId (recieved from path params) using DELETE method
router.delete("/books/:bookId" , authentication , authorisation , BookController.deleteBook)

//Eight API -: To create a review for a book(take book id in path params) in reviews collection using POST method
router.post("/books/:bookId/review" , ReviewController.createReview)

//Ninth API -: To update a review for a book(take book id & review id in path params) using PUT method
router.put("/books/:bookId/review/:reviewId" , ReviewController.updateReview)

//Tenth API -: To delete a review for a book(take book id & review id in path params) using DELETE method
router.delete("/books/:bookId/review/:reviewId" , ReviewController.deleteReview)

module.exports = router;