document.getElementById('fileUpload').addEventListener('change', function() {
    if (this.files[0].type !== 'application/pdf') {
        alert('Please attach a PDF file.');
        this.value = ''; // Clear the input.
    }
});

function saveOrder() {
    const clientName = document.getElementById('clientName').value;
    const orderNumber = document.getElementById('orderNumber').value;
    const manufacturingStatus = document.getElementById('manufacturingStatus').value;
    const attachedFile = document.getElementById('fileUpload').files.length;

    if (!clientName || !orderNumber || attachedFile === 0) {
        document.getElementById('statusMsg').textContent = 'Please fill all fields and attach a PDF file.';
        document.getElementById('statusMsg').style.color = 'red';
        return;
    }

    // Simulate saving the data.
    console.log('Saving Order:', { clientName, orderNumber, manufacturingStatus });
    document.getElementById('statusMsg').textContent = 'Order Saved Successfully!';
    document.getElementById('statusMsg').style.color = 'green';
    
    // Here you would typically send the data to a server using AJAX/Fetch API or similar.
}