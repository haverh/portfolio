
// Function that makes the modal element visible
const openModal = () => {
    $("#modal").removeClass("closed");
    $("#modal").addClass("open");
    $("#contact-form")[0].reset();
};

// Function that makes the modal element invisible
const closeModal = () => {
    $("#modal").removeClass("open");
    $("#modal").addClass("closed");
};

// Initializing emailjs
(function(){
    emailjs.init("mGlifixXR0R5ani_e");
 })();

// Send request to emailjs with contact values
$(document).ready(() => {
    $("#contact-form").on("submit", (event) => {
        event.preventDefault();

        const name = $(".contact-simple:eq(0)").val()
        const email = $(".contact-simple:eq(1)").val()
        const subject = $(".contact-simple:eq(2)").val()
        const msg = $(".contact-msg:eq(0)").val()

        emailjs.send("service_r8d37f6","template_i8p724p",{
            from_name: name,
            from_email: email,
            message: msg,
            subject: subject,
            }
        ).then(function () {
            openModal()
        }
            
        ).catch(
            () => console.log("ERROR HOMIE")
        );
    });
});