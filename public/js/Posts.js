$(document).ready(function(){

    let url = window.location.search;

    let userID;

    if (url.indexOf("?post_id=") !== -1) {
        postId = url.split("=")[1];
        getUserData(userID);
      }

      $(document).ready(function() {
        // Gets an optional query string from our url (i.e. ?post_id=23)
        var url = window.location.search;
        var postId;
        // Sets a flag for whether or not we're updating a post to be false initially
        
      
        // If we have this section in our url, we pull out the post id from the url
        // In localhost:8080/cms?post_id=1, postId is 1
        if (url.indexOf("?post_id=") !== -1) {
          postId = url.split("=")[1];
          getStudentData(postId);
        }
      
        // Getting jQuery references to the post body, title, form, and category select
        let regForm = $("#cms")
        
        // Giving the postCategorySelect a default value
        
        // Adding an event listener for when the form is submitted
        $(regForm).on("submit", function handleFormSubmit(event) {
          event.preventDefault();
           let studentFirstName = $("#firstName").val().trim()
           let studentLastName = $("#lastName").val().trim()
           let studentEmail = $("#email").val().trim()
           let studentPassword = $("#password").val().trim()
           let studentMajor = $("#major").val().trim()
           let studentCareer = $("#career").val().trim()
        
        
          // Wont submit the post if we are missing a body or a title
          if (!studentFirstName || !studentLastName || !studentEmail || !studentPassword || !studentCareer || !studentMajor) {
            return;
          }
          // Constructing a newPost object to hand to the database
          var newStudent = {
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail,
            password: studentPassword,
            major: studentMajor,
            career: studentCareer
          };
      
          console.log(newStudent);
      
          // If we're updating a post run updatePost to update a post
          // Otherwise run submitPost to create a whole new post
            submitStudentData(newStudent);
            console.log(newStudent)
          }
        );
      
        // Submits a new post and brings user to blog page upon completion
        function submitStudentData(Student) {
          $.post("/api/Students/", Student, function() {
            window.location.href = "/";
          });
        }
      
        // Gets post data for a post if we're editing
      
         let mentorReg = $("#mentorForm")

         $(mentorReg).on("submit", function formValidate(event){
           event.preventDefault();
           
           let mentorFirstName = $("#mentorFirstName").val().trim()
           let mentorLastName = $("#mentorLastName").val().trim()
           let mentorEmail = $("#mentorEmail").val().trim()
           let mentorPassword = $("#mentorPassword").val().trim()
           let mentorMajor = $("#mentorMajor").val().trim()
           let mentorCareer = $("#mentorCareer").val().trim()

           if (!mentorFirstName || !mentorLastName || !mentorEmail || !mentorPassword || !mentorCareer || !mentorMajor) {
            return;
         }

         let newMentor = {
          firstName: mentorFirstName,
          lastName: mentorLastName,
          email: mentorEmail,
          password: mentorPassword,
          major: mentorMajor,
          career: mentorCareer
        };
      
        
         submitNewMentor(newMentor)
         console.log(newMentor)
        }
      );
       function submitNewMentor(Mentor){
         $.post("/api/Mentors", Mentor, function(){
           window.location.href ="/"
         })
       }    
      })
    })