// PLACE THE FOLLOWING CODE EITHER IN A .js FILE THAT IS LINKED TO YOUR HTML FILE OR WITHIN A < script > tag

// MIT License

// Copyright (c) 2024 maxpixels/max.nekoweb.org
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.


const USERNAME = "polosteor";
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async() => {
   const request = await fetch(BASE_URL);
   const json = await request.json();
   let status


let isPlaying = json.track['@attr]?.nowplaying || false;

if(!isPlaying){
   
}else{
   
}

document.getElementById("listening").innerHTML = `
<img src='${json.track.image[1]['#text']}'><div id='trackInfo'><h3 id='trackName'>${json.track.name}</h3><p id='artistName'>${json.track.artist['#text']}</p></div>
};

getTrack();
setInterval(() => { getTrack(); }, 10000);
                           