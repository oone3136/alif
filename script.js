function displayFileContents(contents) {
    // Menampilkan isi file dalam elemen dengan id "fileContents"
    var fileContentsElement = document.getElementById('fileContents');
    fileContentsElement.textContent = contents;
  }
  
  document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(event) {
      var contents = event.target.result;
      console.log(contents); 
      displayFileContents(contents);
    };
    
    reader.readAsText(file);
  });
  