// Declare your genre arrays here
let action = ["https://www.heavenofhorror.com/wp-content/uploads/2017/10/Jungle-review-poster.jpg", "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXwCi970JL0KInvpeEwuir0IRVV7NcCYvW2c-u_EeOGCx3mwiFN3rIGeNNzRklnBo7ObmorXNP9gWdN6P9jAvT0tFPA9jMis2bFk.jpg?r=6c8", "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"];
console.log(action);

let romances = ["https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg", "https://img4.hulu.com/user/v3/artwork/dc65615f-3b38-405c-b256-d9651e84e574?base_image_bucket_name=image_manager&base_image=eaae5806-56a7-43c5-b4a1-0440283e1c7e&size=1200x630&format=jpeg", "https://ae01.alicdn.com/kf/Sa5899ab377ea44019c8a526bb9830de3W/Through-My-Window-home-decor-Movie-Poster-white-copper-paper-poster-living-room-bar-decoration-sticker.jpg"];
console.log(romances);

let horror = ["https://ntvb.tmsimg.com/assets/p22335475_v_h8_ab.jpg?w=1280&h=720", "https://i.ytimg.com/vi/8XDqcqUjq5M/movieposter_en.jpg", "https://m.media-amazon.com/images/M/MV5BMTk4NTcxNTQ5NF5BMl5BanBnXkFtZTgwNTk5OTU4OTE@._V1_.jpg"];
console.log(horror);
let div1 = document.querySelector(".div1");


// Submit Button 

let submitButton = document.querySelector(".b1");
submitButton.onclick = function() {
    let genreinput = document.querySelector(".i1").value;
    if (genreinput === "action") {
        for (let actionMovie of action) {
            let img = "<img src=" + actionMovie + ">";
            console.log(img);
            div1.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreinput === "romances") {
        for (let romancesMovie of romances) {
            let img = "<img src=" + romancesMovie + ">";
            div1.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreinput === "horror") {
        for (let horrorMovie of horror) {
            let img = "<img src=" + horrorMovie + ">";
            div1.insertAdjacentHTML("beforeend", img);
        }
    }
};

let suggestButton = document.querySelector(".b2");

// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");

console.log(result);

suggestButton.onclick = function() {
    let photoInput = document.querySelector(".i2").value;
    action.push(photoInput);
    romances.push(photoInput);
    horror.push(photoInput);
    let img = "<img scr=" + photoInput + ">";
    
        result.insertAdjacentHTML("beforeend", img);

    result.insertAdjacentHTML("beforebegin", "<p>" + "Thank you for the suggestion </p>");
    console.log(img);

};









