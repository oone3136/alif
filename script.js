function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", function() {
  const alphabetLinks = document.getElementById("alphabet-links");
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letters.forEach(letter => {
      const link = document.createElement('a');
      link.href = `#`;
      link.textContent = letter;
      link.addEventListener("click", function(event) {
          event.preventDefault();
          loadSongs(letter);
      });
      alphabetLinks.appendChild(link);
  });
});

function loadSongs(letter) {
  const articleContent = document.getElementById("article-content");
  articleContent.innerHTML = ""; // Kosongkan konten sebelum memuat konten baru

  const lyricsData = {
      'A': ['Ahibbak', 'Aktsar', 'Ala Bali', 'Alamate','Allahul Kafi', 'Alqolbu Mutayyam','Ana Batba Galbi', 'Ana Laulak',  'Asjal Ruwhi', 'Assalamualaik Zainal Ambiya', 'Annabi Sollu alaih', 'Azizah', 'Azzak Biladak'],
      'B': ['Balway', 'Birosulillah', 'Busrolana'],
      'C': ['Bencana', 'Bahibbak'],
      'D': ['Deen Assalam', 'Bahibbak'],
      'E': ['Bencana', 'Bahibbak'],
      'F': ['Fardu Wajib', 'Farrijilham'],
      'G': ['Gammarese', 'Bahibbak'],
      'H': ['Habibi yanurul aini', 'Hayyul Hadi'],
      'I': ['Ikan Dalam Kolam','Ilahana','Ilahi Tam Mimi' ,'Inna Fil Jannati','Inta Dunya', 'Bahibbak'],
      'J': ['Bencana', 'Bahibbak'],
      'K': ['Katabna', 'Khayalanku','Khoyrol Bariyah'],
      'L': ['Bencana', 'Lil Muhibbin'],
      'M': ['Man Ana','Mayyal-mayal', 'Mayjus', 'Maulana', 'Mugrom', 'Mathasibnesh'],
      'N': ['Nasam alainal hawa', 'Nawwarti'],
      'O': ['Qo', 'Bahibbak'],
      'P': ['Pantun Janda', 'Bahibbak'],
      'Q': ['Rahmatal Lil Alamin' ,'Qomarun', 'Bahibbak'],
      'R': ['Robbi Khollaq','Romadhon Tajalla' ,'Roti Buaya', 'Bahibbak'],
      'S': ['Sarallail', 'Sallulinnas', 'Solatum', 'Solawat Nu','Sollalohu ala Muhammad', 'Sufak'],
      'T': ['Tabassam', 'Talattof', 'Tohirul Qolbi', 'Tolaal'],
      'U': ['Bencana', 'Bahibbak'],
      'V': ['Bencana', 'Bahibbak'],
      'W': ['Wahdana','Bencana', 'Bahibbak'],
      'X': ['Bencana', 'Bahibbak'],
      'Y': ['Ya Ward', 'Ya Imamarrus', 'Ya Robbi Solli', 'Yatarim'],
      'Z': ['Bencana', 'Bahibbak'],

  };

  const songs = lyricsData[letter];
  if (songs) {
      const list = document.createElement("ul");
      songs.forEach(song => {
          const listItem = document.createElement("li");
          listItem.textContent = song;
          listItem.addEventListener("click", function() {
              loadLyrics(letter, song);
          });
          list.appendChild(listItem);
      });
      articleContent.appendChild(list);
  }
}

function loadLyrics(letter, song) {
  const articleContent = document.getElementById("article-content");
  articleContent.innerHTML = ""; 

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `lyric/${song}.txt`, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const lyricsText = xhr.responseText;
        const lyricsLines = lyricsText.split(/\r?\n/);
        lyricsLines.forEach(line => {
          if (line.trim() !== "") { 
              const lyricsParagraph = document.createElement('p');
              lyricsParagraph.textContent = line;
              lyricsParagraph.style.textAlign = "center"; 
              articleContent.appendChild(lyricsParagraph);
            }
          });
      }
  };
  xhr.send();
}
