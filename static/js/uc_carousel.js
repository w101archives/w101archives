

currentIndex = 1;


document.addEventListener('keydown', function (input){


    if(input.key == 'd'){
        vidReturn = document.getElementsByClassName("videos")[0];
        children = (vidReturn.childElementCount - 1); //to make it array compatible


        if(currentIndex == children+1){
            currentIndex = 0; //set index to zero if it exceeds the entries we have
        }

        for(i = 0; i < children+1; i++){ //loop through all the video elements
//Debug console.log("Looping thru" + i);

            vidReturn.children[i].classList.add("fade");

            focusedChild = vidReturn.children[currentIndex]; //the video currently being focused on


//Debug console.log(document.getElementsByClassName("videos")[0].children[currentIndex].innerHTML);
            vidReturn.children[currentIndex].style.display = "initial";
            // document.getElementsByClassName("videos")[0].children[currentIndex].classList.add("fade-in")


            if(i != currentIndex){
                document.getElementsByClassName("videos")[0].children[i].style.display = "none";

            }
        }

        console.log("Increasing index, Finished" + currentIndex);
        currentIndex++;

        console.log("Increased index, Finished" + currentIndex);

    }

})



