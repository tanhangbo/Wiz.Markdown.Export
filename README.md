# Wiz.Markdown.Export


### Purpose
* Tool for tanhangbo.github.io

### How it works

* Firstly, we edit in Wiznote with  Wiz.Editor.md plugin.
* Then we export this note using this plugin
* At last, the raw markdown content is uploaded to tanhangbo.github.io and a javascript parser is applied with ajax to transform the content to HTML.

### Why not save the markdown content to HTML rather than put markdown on website?
* markdown is portable but hardcode HTML cannot be changed, bugs may appear when with different platform and web browser compatibility is still a problem.
* Better markdown js parser can be expected in the future.
* With ajax, markdown can be parsed in the framework of tanhangbo.github.io 

### How to use it

* Firstly, you should edit your note with Wiz.Editor.md plugin.

* Then use this tool(in file menu) to export your selected note.

* The note will be in "D:\\". If you don't have it, please change the code. Python path is also need to be changed if you have a different path  with "C:\Python27\python.exe"

* Note that it is windows only.



