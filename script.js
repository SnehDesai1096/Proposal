document.getElementById('yesButton').addEventListener('click', function() {
    // Redirect to a new page (replace 'new-page.html' with the actual page URL)
    window.location.href = './yes-response';
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = './no-response';
});

function appendToFile() {
    // Get the input value
    var inputValue = document.getElementById('textInput').value;

    // Create a Blob (binary large object) containing the text
    var blob = new Blob([inputValue + '\n'], { type: 'text/plain' });

    // Create a FileWriter to append to the file
    var fileWriter = new FileWriter('appended_text.txt', { append: true });

    // Write the Blob to the file
    fileWriter.write(blob);

    alert('Text appended to the file.');
  }

  // Simple utility to create a FileWriter
  function FileWriter(fileName, options) {
    var writer = new XMLHttpRequest();
    writer.open('GET', fileName, false);
    writer.send();

    this.blob = new Blob([writer.responseText], { type: 'text/plain' });
    this.fileName = fileName;

    this.write = function(blob) {
      this.blob = new Blob([this.blob, blob], { type: 'text/plain' });
      this.save();
    };

    this.save = function() {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(this.blob);
      a.download = this.fileName;

      // Trigger the download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    if (options && options.append) {
      this.save();
    }
  }
