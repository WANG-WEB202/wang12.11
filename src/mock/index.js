import Mock from "mockjs"
const data=Mock.mock({
    "list|8":[{
        "name":"@cname",
        "title":"@ctitle",
        "img":"@image(50x50,@color)"        
    }]
})
Mock.mock('/getData','get',data)