


var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objDocument = objWindow.CurrentDocument;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var PluginPath = objApp.GetPluginPathByScriptFileName("Export.js");
var TempPath = "D:\\markdown_export\\";
var PythonPath = "C:\\Python27\\python.exe";


if (!objDocument)
	return false;


objCommon.CreateDirectory(TempPath)
TextFile = objDocument.GetText(0);
objCommon.SaveTextToFile(TempPath+ "temp.txt", TextFile, "utf-8");
objDocument.SaveToHtml(TempPath + "temp.html", 0);

//objWindow.ShowMessage("info", "success1", 0x40);


var PythonScriptPath = PluginPath + "Transform.py";
objCommon.CopyFile(PythonScriptPath, TempPath + "Transform.py");
objCommon.RunExe(PythonPath, TempPath + "Transform.py", true);



//objWindow.ShowMessage("info", "success2", 0x40);

