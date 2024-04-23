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
      'A': ['Ahibbak', 'Aktsar', 'Ala Bali', 'Alamate','Allahul Kafi', 'Alqolbu Mutayyam','Ana Batba Galbi', 'Ana Laulak',  'Asjal Ruwhi', 'Assalamualaik Zainal Ambiya', 'Annabi Sollu alaih'],
      'B': ['Balway', 'Birosulillah', 'Busrolana'],
      'C': ['Bencana', 'Bahibbak'],
      'D': ['Deen Assalam', 'Bahibbak'],
      'E': ['Bencana', 'Bahibbak'],
      'F': ['Fardu Wajib', 'Bahibbak'],
      'G': ['Gammarese', 'Bahibbak'],
      'H': ['Habibi yanurul aini', 'Bahibbak'],
      'I': ['Ilahana','Inna Fil Jannati','Inta Dunya', 'Bahibbak'],
      'J': ['Bencana', 'Bahibbak'],
      'K': ['Katabna', 'Khoyrol Bariyah'],
      'L': ['Bencana', 'Lil Muhibbin'],
      'M': ['Mayyal-mayal', 'Mayjus', 'Maulana', 'Mugrom', 'Mathasibnesh'],
      'N': ['Nasam alainal hawa', 'Nawwarti'],
      'O': ['Qo', 'Bahibbak'],
      'P': ['Bencana', 'Bahibbak'],
      'Q': ['Qomarun', 'Bahibbak'],
      'R': ['Bencana', 'Bahibbak'],
      'S': ['Sarallail', 'Sallulinnas', 'Solatum', 'Solawat Nu','Sollalohu ala Muhammad'],
      'T': ['Tabassam', 'Tohirul Qolbi', 'Tolaal'],
      'U': ['Bencana', 'Bahibbak'],
      'V': ['Bencana', 'Bahibbak'],
      'W': ['Bencana', 'Bahibbak'],
      'X': ['Wahdana', 'Bencana', 'Bahibbak'],
      'Y': ['Ya Ward', 'Ya Robbi Solli', 'Yatarim'],
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
