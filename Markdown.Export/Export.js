var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objDocument = objWindow.CurrentDocument;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");

if (!objDocument)
	return false;

code = objDocument.GetText(0);
objCommon.SaveTextToFile("D:\\1.txt", code, "utf-8");
//code = code.replace(/\u00a0/g, ' ');
// 如果用原生编辑器保存过图片，会被替换成错的图片路径
//var imgErrorPath = guid + "_128_files/";
//code = code.replace(new RegExp(imgErrorPath, "g"), filesDirName);
//objWindow.ShowMessage(code, "first wizzz", 0x40);
