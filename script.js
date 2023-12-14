//modal event driven
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cre').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('makePlanModal'), {
            keyboard: false
        });
        myModal.show();
    });

    function saveEvent() {
        // Add your logic here to save the event details
        // For example, you can get the values from the form using document.getElementById
        // and then perform any necessary actions (e.g., updating the page, sending data to the server)
        // Finally, close the modal
        var myModal = new bootstrap.Modal(document.getElementById('makePlanModal'));
        myModal.hide();
    }

    document.getElementById('makePlanModal').addEventListener('hidden.bs.modal', function () {
        // Code to execute when the modal is hidden
    });

    $(document).ready(function () {
        // Initialize datepicker
        $('#date').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        });

        // Initialize timepicker
       
    });

    // Additional code to fix the event time input
    $('#time').timepicker({
        minuteStep: 1,
        showSeconds: false,
        showMeridian: true,
        defaultTime: false
    });
});
    //submitform and place/save the data to other page
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const what = document.getElementById('what').value;
    const when = document.getElementById('when').value;
    const time = document.getElementById('time').value;
    const where = document.getElementById('where').value;

    // Retrieve existing form data from localStorage
    const formDataArrayString = localStorage.getItem('formDataArray');
    const formDataArray = formDataArrayString ? JSON.parse(formDataArrayString) : [];

    // Create a new form data object
    const formData = {
        name,
        what,
        when,
        time,
        where,
    };

    // Append the new form data to the array
    formDataArray.push(formData);

    // Save the updated array back to localStorage
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    

    document.getElementById('contactForm').reset();

    const successMessageElement = document.getElementById('successMessage');
    successMessageElement.textContent = 'Submitted, Nice plan!';
    successMessageElement.style.display = 'block';

    setTimeout(() => {
        successMessageElement.textContent = '';
        successMessageElement.style.display = 'none';
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data array from localStorage
    const formDataArrayString = localStorage.getItem('formDataArray');

    

   

    if (formDataArrayString) {
        const formDataArray = JSON.parse(formDataArrayString);

        // Display the latest form data on the page (modify this as needed)
        const latestFormData = formDataArray[formDataArray.length - 1];
        document.getElementById('displayName').textContent = latestFormData.name;
        document.getElementById('displayWhat').textContent = latestFormData.what;
        document.getElementById('displayWhen').textContent = latestFormData.when;
        document.getElementById('displayTime').textContent = latestFormData.time;
        document.getElementById('displayWhere').textContent = latestFormData.where;
        
        
    }
});



            
function redirectToEvent(){
window.location.href = 'update.html';
    }
    document.addEventListener('DOMContentLoaded', function () {
const makePlanModal = new bootstrap.Modal(document.getElementById('makePlanModal'), {
keyboard: false
});
makePlanModal.show();

});
   



document.addEventListener('DOMContentLoaded', function () {
// Retrieve form data array from localStorage
const formDataArrayString = localStorage.getItem('formDataArray');

if (formDataArrayString) {
const formDataArray = JSON.parse(formDataArrayString);

// Display all form submissions on the page




formDataArray.forEach((formData, index) => {
    const submissionDiv = document.createElement('div');
    submissionDiv.innerHTML = `
        <span style="color:red; text-transform: uppercase;">Created by:</span><p> ${formData.name}</p>
        <span style="color:red; text-transform: uppercase;">What:</span> <p>${formData.what}</p>
        <span style="color:red; text-transform: uppercase;">When:</span><p> ${formData.when}</p>
        <span style="color:red; text-transform: uppercase;">Time:</span><p> ${formData.time}</p>
        <span style="color: red; text-transform: uppercase;">Where:</span><p> ${formData.where}</p>
        <button style="border-radius:5px; text-transform: uppercase; background-color: red; color: white; 
        border: 1px solid red;" onclick="deleteSubmission(${index})">Delete</button>
        <hr>
    `;
    allSubmissionsElement.appendChild(submissionDiv);
});
}
});

function deleteSubmission(index) {
// Retrieve form data array from localStorage
const formDataArrayString = localStorage.getItem('formDataArray');

if (formDataArrayString) {
const formDataArray = JSON.parse(formDataArrayString);

// Remove the entry from the array
formDataArray.splice(index, 1);

// Update the localStorage with the modified array
localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

// Reload the page to reflect the changes
location.reload();
}
}





