document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('fileList');
  
    // Fetch file list from the server
    fetch('/files')
      .then(response => response.json())
      .then(data => {
        data.forEach(file => {
          const listItem = document.createElement('li');
          const downloadLink = document.createElement('a');
          downloadLink.href = `/download/${file.fileName}`;
          downloadLink.textContent = file.fileName;
          downloadLink.download = file.fileName;
          listItem.appendChild(downloadLink);
          fileList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching file list:', error));
  });
  