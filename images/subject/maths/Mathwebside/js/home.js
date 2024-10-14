



/*-----------------
   testimonial slider
   -------------*/
  /* function testimonialSlider(){
      const carouselOne = document.getElementById('carouselOne');
      if(carouselOne){
          carouselOne.addEventListener('slid.bs.carousel', function () {
             const activeItem = this.querySelector(".active");
             document.querySelector(".js-testimonial-img").src =
             activeItem.getAttribute("data-js-testimonial-img");
          })
      }
     }
   testimonialSlider(); */

/* header menu*/
function headerMenu(){
   const menu = document.querySelector(".js-header-menu"),
   backdrop = document.querySelector(".js-header-backdrop"),
   menuCollapseBreakpoint = 991;

   function toggleMenu(){
      menu.classList.toggle("open");
      backdrop.classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
      }

   document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
      item.addEventListener("click", toggleMenu);
   });
//close the menu by clicking outside of it
   backdrop.addEventListener("click", toggleMenu);

   function collapse(){
      menu.querySelector(".active .js-sub-menu").removeAttribute("style");
      menu.querySelector(".active").classList.remove("active");
   }

   menu.addEventListener("click", (event) => {
      const { target } = event;

      if(target.classList.contains("js-toggle-sub-menu") &&
      window.innerWidth <= menuCollapseBreakpoint){
         //prevent default anchor click behavior
         event.preventDefault();

         if(target.parentElement.classList.contains("active")){
            collapse();
            return;
         }

         //collape the other expanded menu-item is exist
         if(menu.querySelector(".active")){
            collapse();
         }
         //expand new menu-item
         target.parentElement.classList.add("active");
         target.nextElementSibling.style.maxHeight = 
         target.nextElementSibling.scrollHeight + "px";
      }
   });
   //when resizing window
   window.addEventListener("resize", function(){
      if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
         toggleMenu();
      }
      if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
         collapse();
      }
   });
}
headerMenu();


/*  style switcher  */
function styleSwitcherToggle(){
   const styleSwitcher = document.querySelector(".js-style-switcher"),
   styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

   styleSwitcherToggler.addEventListener("click", function(){
      styleSwitcher.classList.toggle("open");
      this.querySelector("i").classList.toggle("fa-times");
      this.querySelector("i").classList.toggle("fa-cog");
   });

}
styleSwitcherToggle();



/*  theme colors  */
function themeColors(){
   const colorStyle = document.querySelector(".js-color-style"),
   themeColorsContainer = document.querySelector(".js-theme-colors");

   themeColorsContainer.addEventListener("click", ({target}) => {
      if(target.classList.contains("js-theme-color-item")){
         localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
         setColor();
      }
   });
   function setColor(){
      let path = colorStyle.getAttribute("href").split("/");
      path = path.slice(0, path.length-1);
      colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

      if(document.querySelector(".js-theme-color-item-active")){
         document.querySelector(".js-theme-color-item.active").classList.remove("active");
      }
      document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
   }
   if(localStorage.getItem("color")  !== null){
      setColor();
   }
   else{
      const defaultColor = colorStyle.hasAttribute("href").split("/").pop().split(".").shift();
      document.querySelector("[data-js-theme-color=" + "]").classList.add("active");
   }
}
themeColors();

/* theme as in dark or light*/
function themeLightDark(){
   const darkModeCheckbox = document.querySelector(".js-dark-mode");

   darkModeCheckbox.addEventListener("click", function() {
      if(this.checked){
         localStorage.setItem("theme-dark", "true");
      }
      else{
         localStorage.setItem("theme-dark", "false");
      }
      themeMode();
   });

   function themeMode(){
      if(localStorage.getItem("theme-dark") === "false"){
      document.body.classList.remove("t-dark");
   }
   else{
      document.body.classList.add("t-dark");
     }
  }

  if(localStorage.getItem("theme-dark") !== null){
   themeMode();
  }
  if(document.body.classList.contains("t-dark")){
   darkModeCheckbox.checked = true;
  }
}
themeLightDark();


/*--------------------------------------------------------
            log in and sign up validation
----------------------------------------------------------*/

//To stop when the password does not match the confirmation password

const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const messageElement = document.getElementById('message');

  function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === '') {
      messageElement.textContent = 'Please enter a password';
      messageElement.style.color = 'red';
    } else if (password === confirmPassword) {
      messageElement.textContent = 'Passwords match';
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Passwords do not match';
      messageElement.style.color = 'red';
    }
  }

  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validatePassword);

/* -----------------------------------------
         additional information
--------------------------------------------*/
   
//To make the web not accept anyvalue less than 18years old:
    function validateAge() {
        var ageInput = document.getElementById("age").value;
        var ageMessage = document.getElementById("ageMessage");
        if (ageInput <= 17) {
            ageMessage.textContent = "You must be 18 or older to continue.";
        } else {
            ageMessage.textContent = "";
        }
    }
   
     //to select on the select option
    const selectOption = document.getElementById('supportingDocument');
  const inputContainer = document.getElementById('inputContainer');

  selectOption.addEventListener('change', function() {
    if (selectOption.value !== '') {
      inputContainer.style.display = 'block';
    } else {
      inputContainer.style.display = 'none';
    }
  });


  //to stop user from entering numbers on the initial input
  document.getElementById('initials').addEventListener('input', function(event) {
   let input = event.target.value;
   // Remove any non-letter characters entered by the user
   input = input.replace(/[^a-zA-Z]/g, '');
   // Limit the input to only two characters
   if (input.length > 2) {
     input = input.slice(0, 2);
   }
   event.target.value = input;
 });
 