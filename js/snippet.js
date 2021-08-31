    //Function to call when click in "Create Snippet"
    function Snippet() {

        //link variables to inputs
        var editor = document.getElementById('inpEditor').value;
        var code = document.getElementById('inpCode').value;
        var action = document.getElementById('inpAction').value;
        var file = document.getElementById('inpFile').value;
        var snippetCode;


        if (editor == 'Sublime Text') {
            //Action if Sublime Text was Selected

            snippetCode = "<!-- Save as a .sublime-snippet type file -->" + '\n' + "<!-- Save in 'packages/user' paste -->" + '\n' + "<snippet>" + "\n" + " <content><![CDATA[" + code + "]]></content>" + "\n" + " <tabTrigger>" + action + "</tabTrigger>" + "\n" + " <scope>" + file + "</scope>" + "\n" + "</snippet>"

            console.log(snippetCode)
            
        }else if (editor == 'Visual Studio') {
            //Action if Visual Studio was Selected

        }

        document.getElementById('snippetCode').value = snippetCode //giving the snippet code to a input
        //changing the div to be shown
        document.getElementById('GenerateSnippet').style.display = 'none' 
        document.getElementById('CreatedSnippet').style.display = 'block'

    }


    //Copy to clipboard the code of the Snipped
    function CopySnippet() {

        //Select the Input with the code
        const inputSnippet = (document.getElementById('snippetCode').value).select();
        
        //Select Input Text with Code
        inputSnippet.select();

        //Execute the Copy command
        document.execCommand('copy');
    }


    //Show up again the form to create a new snippet code
    function newSnippet() {

        document.getElementById('GenerateSnippet').style.display = 'block'
        document.getElementById('CreatedSnippet').style.display = 'none'

        document.getElementById('inpEditor').value = 'Sublime Text'
        document.getElementById('inpCode').value = ''
        document.getElementById('inpAction').value = ''
        document.getElementById('inpFile').value = 'none';

    }


    //Download the file with the snippet code
    function DownloadSnippet() {

      //link variables to inputs
      var code = document.getElementById('snippetCode').value;
      var fileName = document.getElementById('inpFile').value + '.sublime-snippet';

      var blob = new Blob([code], { type: 'text/sublime-snippet' });

      var a = document.createElement('a');
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/sublime-snippet', a.download, a.href].join(':');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);


    }
