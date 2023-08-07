function createAudioHTML(path) {
    return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  
  
  function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
    for (var i = 0; i < filename_ext.length; i++) {
      let p = base_path + filename_ext[i];
      let cell = table_row.cells[col_offset + i];
      if (p.endsWith('txt')) {
        var req = new XMLHttpRequest();
        req.open("GET", p, false);
        req.send(null);
        cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
      } else {
        cell.innerHTML = cell.innerHTML + createAudioHTML(p);
      }
    }
  }
  
  
  function generateT2A(tableId) {
    let table = document.getElementById(tableId);
    let ext = ['.txt', '_gt.wav', '_maa2.wav', '_maa1.wav','_ldm.wav', '_tango.wav'];
  
    for (var i = 0; i < 10; i++) {
      generateExampleRow(table.rows[1 + i], 'data/t2a/' + i, ext, 0);
    }
  }
  
  
  
  function generateVariable(tableId) {
    let table = document.getElementById(tableId);
    let ext = ['.txt', '_maa2.wav', '_maa1.wav','_ldm.wav', '_tango.wav'];
  
    for (var i = 0; i < 9; i++) {
      generateExampleRow(table.rows[1 + i], 'data/variable_length/' + i, ext, 0);
    }
  }
  
  
  function generatePrompting(tableId) {
    let table = document.getElementById(tableId);
    console.log("got table ", table);
    let ext = ['_prompt.wav', '_0.wav', '_1.wav', '_2.wav', '_3.wav'];
  
    let examples = [
        [
            '201a21a19122da31975501c183a447db_1089_0',
            '201a21a19122da31975501c183a447db_1089_2',
            '201a21a19122da31975501c183a447db_2094_0',
            '201a21a19122da31975501c183a447db_2094_2',
        ],
        [
            '1ebe5c38eabb74ee9fc562f3f716dc8c_1089_0',
            '1ebe5c38eabb74ee9fc562f3f716dc8c_1089_2',
            '1ebe5c38eabb74ee9fc562f3f716dc8c_2094_0',
            '1ebe5c38eabb74ee9fc562f3f716dc8c_2094_2',
        ]
    ];
    for (var i = 0; i < examples[0].length; i++) {
      generateExampleRow(table.rows[2 + i], 'data/prompting/' + examples[0][i], ext, 0)
    }
    for (var i = 0; i < examples[1].length; i++) {
      generateExampleRow(table.rows[7 + i], 'data/prompting/' + examples[1][i], ext, 0)
    }
  
  }
  
  
  generateT2A('supervision-efficiency-table');
  generateVariable('speech-diversity');