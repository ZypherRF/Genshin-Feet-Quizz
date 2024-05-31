document.getElementById("submit").onclick = function (){
    scales = document.getElementById("name").value
    
    if(scales <= 3){
        badbad.textContent = `At [company/organization name], we strive to provide excellent service and high-quality products, and it is clear that we fell short in this instance. Specifically, [briefly describe the issue or issues that occurred]. This is not the standard we aim to uphold, and I understand how frustrating this must have been for you.

        Please know that we are taking your feedback seriously. We are [explain the steps being taken to address the issue and prevent it from happening again]. Our goal is to ensure that such incidents do not occur in the future and to improve our overall service.
        
        As a gesture of goodwill and to make amends for the inconvenience caused, we would like to offer [mention any compensation, discount, refund, or another form of making amends]. We genuinely hope this can begin to restore your faith in us.
        
        Once again, I am truly sorry for the trouble this has caused you. We value your patronage and hope to have the opportunity to serve you better in the future. If you have any further concerns or questions, please do not hesitate to contact me directly at [your contact information].
        
        Thank you for bringing this to our attention, and for your understanding.
        
        Warm regards,`
    }

    else if(scales <=7){
        badbad.textContent = `Thanks for giving your review. Have a nice day❤`
    }

    else if(scales >=8){
        badbad.textContent = `Thanks for the generous review, have an amazing day😘🌹💖`
    }
}