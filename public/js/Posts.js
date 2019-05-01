$(document).ready(function(){

  

      $(document).ready(function() {
        
        let regForm = $("#userRegister")
    
        $(regForm).on("submit", function handleFormSubmit(event) {
          event.preventDefault();
           let userFirstName = $("#firstName").val().trim()
           let userLastName = $("#lastName").val().trim()
           let userEmail = $("#email").val().trim()
           let userPassword = $("#password").val().trim()
           let userMajor = $("#major").val().trim()
           let userOccupation = $("#occupation").val()
           console.log("hi", userFirstName)
        
          //Wont submit the post if we are missing a body or a title
          if (!userFirstName || !userLastName || !userEmail || !userPassword || !userOccupation || !userMajor) {
            return;
          }
          // Constructing a newPost object to hand to the database
          var newUser = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            password: userPassword,
            major: userMajor,
            occupation: userOccupation
          };
          
           console.log(newUser);
           submitUserData(newUser)
          }
        );
      
        function submitUserData(User){
          console.log(User)
          $.post("/api/Users", User, function(){
            window.location.href = "/login"
          })
        }
      })
       
       let postEntry = $("#createPost")
       
       $(postEntry).on("submit",function validateForm(event){
         event.preventDefault()

         let postTitle = $("#postTitle").val().trim();
         let postTopic = $("#postTopic").val().trim()
         let postDescription = $("#postDescription").val().trim()
         let postBody = $("#postBody").val().trim()

         if (!postTitle || !postTopic || !postDescription || !postBody) {
          return;
         }

         let newPost ={
           title: postTitle,
           category: postTopic,
           description: postDescription,
           entry: postBody
         }

         submitNewPost(newPost)
       })


       function submitNewPost(Post){
         $.post("/api/posts", Post, function(){
           window.location.href = "/profile"

         })
       }
      })

    



  //localstorage.getItem("currUser")