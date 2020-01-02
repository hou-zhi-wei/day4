let Mock=require("mockjs")

let data=Mock.mock({
    "list|10":[{
        "dataimg":Mock.Random.image("200x100"),
        "dataname":"@ctitle",
        "datatitle":"@ctitle"
    }]
})
module.exports=data