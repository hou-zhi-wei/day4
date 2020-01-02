let dataList=require("./src/mock/mock")

module.exports={
    devServer:{
        before:function(app){
            app.get("/api/List",(req,res)=>{
                console.log(dataList)
                res.send(dataList)
            })
        }
    }
}

