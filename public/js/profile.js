$(document).ready(function(){


$("#getPosts").on("click",function(){


let userProfile = $("#userName").text().split(" ")
let firstName = userProfile[0]
let lastName = userProfile[1]




$.get("/api/users/" + firstName, function(data){

    
    
console.log(data)

        let posts= data[0].Posts
        console.log(posts)
        let title = posts[0].title
        console.log(title)
        let description = posts[0].description

        let entry = posts[0].entry
        let author = data[0].firstName + " " + data[0].lastName
        console.log(author)
        
        let myscript = '<div class="card text-left "><div class="card-header" id="headingOne">';
        myscript += '<h1 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"';
        myscript += 'aria-expanded="true" aria-controls="collapseOne">'
        myscript +=            title + " "
        myscript +=           '<a href ="/profile" class="text-dark" id="newProfile">'
        myscript +=             author
        myscript +=           '</a>'                     
        myscript +=          '</button>'
        myscript +=        '</h1>'
        myscript +=      '</div>'   
        myscript +=      '<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">'
        myscript +=       ' <div class="card-body">'
        myscript +=         '<p class ="font-weight-bold">'
        myscript +=          description
        myscript +=            '</p>'
        myscript +=            '<p>'
        myscript +=            entry
        myscript +=           '</p>'
        myscript +=        '</div>'
        myscript +=       '</div>'
        myscript +=    '</div>'
        console.log(myscript)

        $("#accordion").append(myscript)
    

})







})
})

