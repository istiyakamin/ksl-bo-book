console.log('working')


const inputs = document.querySelectorAll('div > .photo_upload_light');
const upload = document.getElementById('imgupload');
inputs.forEach(input => {
        input.addEventListener('click',()=>{
            upload.click();
        })


});
