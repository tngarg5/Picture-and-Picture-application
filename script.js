// Make Element ids
const videoElement = document.getElementById('video');
const btn = document.getElementById('buttons');

// Use an Async function to select media stream,pass that to video element and then play it.
async function selectMediaStream(){
    try {
        //First we have set a constant that will have our media stream data and waiting for user to select a screen.
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        //assiging selected screen to videoelement source object
        videoElement.srcObject = mediaStream;
        //onload metadata is true when video has loaded completely
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

       

    } catch (error) {
        //catch error here
        console.log('got an error in 1st',error);
    }
}

//button to start operatin
btn.addEventListener('click', async () =>{
    //disable button
    btn.disabled = true;
    //start pip
    await videoElement.requestPictureInPicture();
    //reset
    btn.disabled= false;
});
//on Load
selectMediaStream();
