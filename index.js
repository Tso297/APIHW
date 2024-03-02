

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to open the modal
function one() {
    document.getElementById("myModal").style.display = "block";
    // Make API call to retrieve data and populate modal
    fetch('https://api.artic.edu/api/v1/artworks/223903/')
      .then(response => response.json())
      .then(data => {
          var imageTitle = data.data.title
          var artistTitle = data.data.artist_title
          var dateDisplay = data.data.date_display
        // Assuming the API returns an object with an image URL
        document.getElementById("apiData").innerHTML =         
        `<p> Title: ${imageTitle} </p>
        <p> Date: ${dateDisplay}</p>
        <p> Artist: ${artistTitle}</p>`;
      })
      .catch(error => console.error('Error fetching data:', error));
  }



function two() {
    document.getElementById("myModal").style.display = "block";
    fetch(`https://api.artic.edu/api/v1/artworks/137050/`)
    .then(response => response.json())
    .then(data => {
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display

      `<p> Title: ${imageTitle} </p>
      <p> Date: ${dateDisplay}</p>
      <p> Artist: ${artistTitle}</p>`;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function three() {
    document.getElementById("myModal").style.display = "block";
    fetch(`https://api.artic.edu/api/v1/artworks/223907/`)
    .then(response => response.json())
    .then(data => {
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display

        document.getElementById('apiData').innerHTML = 
        `<p> Title: ${imageTitle} </p>
        <p> Date: ${dateDisplay}</p>
        <p> Artist: ${artistTitle}</p>`
    })
}

function four() {
    document.getElementById("myModal").style.display = "block";
    fetch(`https://api.artic.edu/api/v1/artworks/132806/`)
    .then(response => response.json())
    .then(data => {
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display

        document.getElementById('apiData').innerHTML = 
        `<p> Title: ${imageTitle} </p>
        <p> Date: ${dateDisplay}</p>
        <p> Artist: ${artistTitle}</p>`
    })
}

function five() {
    document.getElementById("myModal").style.display = "block";
    fetch(`https://api.artic.edu/api/v1/artworks/240936/`)
    .then(response => response.json())
    .then(data => {
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display

        document.getElementById('apiData').innerHTML = 
        `<p> Title: ${imageTitle} </p>
        <p> Date: ${dateDisplay}</p>
        <p> Artist: ${artistTitle}</p>`
    })
}

function six() {
    document.getElementById("myModal").style.display = "block";
    fetch(`https://api.artic.edu/api/v1/artworks/241244/`)
    .then(response => response.json())
    .then(data => {
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display

        document.getElementById('apiData').innerHTML = 
        `<p> Title: ${imageTitle} </p>
        <p> Date: ${dateDisplay}</p>
        <p> Artist: ${artistTitle}</p>`
    })
}
