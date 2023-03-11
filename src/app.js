const express=require("express");
const hbs=require("hbs");
const app=express();
const bodyParser=require("body-parser")
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
app.use("/static",express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("",routes)

app.set("view engine","hbs");
app.set("views","views")
hbs.registerPartials("views/partials"); 
//db connection
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://sjteckers:xhyq4LfZynj3s5oJ@nodedb.cxkrxvz.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("db connected");
    
// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title:'Title 1',
//         description:'Description 1',
//         linkText:'https://www.google.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-accusoft',
//         title:'Title 2',
//         description:'Description 2',
//         linkText:'https://www.google.com',
//         link:'Check'
//     }
// ])

// Slider.create([
//     {
//         title:"title 1",
//         subTitle:"subtitle 1",
//         imageUrl:"static/images/img1.jpeg"
//     },
//     {
//         title:"title 2",
//         subTitle:"subtitle 2",
//         imageUrl:"static/images/img2.jpeg"
//     },
//     {
//         title:"title 3",
//         subTitle:"subtitle 3",
//         imageUrl:"static/images/img3.jpeg"
//     }
// ])

    // Detail.create({
    //     brandName:"Shivanshu Garments",
    //     brandIconUrl:"fdsds",
    //     links:[{
    //         label:"Home",
    //         url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact-Us",
    //         url:"/contact-us"
    //     }]
    // })
});

app.listen(process.env.PORT | 8080,()=>{
    console.log("server started")
})