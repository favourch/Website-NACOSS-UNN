var OxOc8a7=["idSource","inc_width","inc_height","onload","availWidth","screen","window","availHeight","contentWindow","outerHTML","documentElement","text/html","replace","onresize","dialogWidth","innerWidth","clientWidth","body","dialogHeight","innerHeight","clientHeight","value","contentDocument","document"];var editor=Window_GetDialogArguments(window);var idSource=Window_GetElement(window,OxOc8a7[0],true);var inc_width=Window_GetElement(window,OxOc8a7[1],true);var inc_height=Window_GetElement(window,OxOc8a7[2],true);var ParentW;var ParentH;window[OxOc8a7[3]]=function window_onload(){ParentW=top[OxOc8a7[6]][OxOc8a7[5]][OxOc8a7[4]];ParentH=top[OxOc8a7[6]][OxOc8a7[5]][OxOc8a7[7]];var iframe=idSource[OxOc8a7[8]];var editdoc=editor.GetDocument();var Ox344;if(Browser_IsWinIE()){Ox344=editdoc[OxOc8a7[10]][OxOc8a7[9]];} else {Ox344=outerHTML(editdoc.documentElement);} ;var Ox345=Frame_GetContentDocument(iframe);Ox345.open(OxOc8a7[11],OxOc8a7[12]);Ox345.write(Ox344);Ox345.close();ShowSizeInfo();} ;window[OxOc8a7[13]]=ShowSizeInfo;function ShowSizeInfo(){var Ox264,Ox237;if(window[OxOc8a7[14]]){Ox264=window[OxOc8a7[14]];} else {if(window[OxOc8a7[15]]){Ox264=window[OxOc8a7[15]];} else {if(document[OxOc8a7[10]]&&document[OxOc8a7[10]][OxOc8a7[16]]){Ox264=document[OxOc8a7[10]][OxOc8a7[16]];} else {if(document[OxOc8a7[17]]){Ox264=document[OxOc8a7[17]][OxOc8a7[16]];} ;} ;} ;} ;if(window[OxOc8a7[18]]){Ox237=window[OxOc8a7[18]];} else {if(window[OxOc8a7[19]]){Ox237=window[OxOc8a7[19]];} else {if(document[OxOc8a7[10]]&&document[OxOc8a7[10]][OxOc8a7[20]]){Ox237=document[OxOc8a7[10]][OxOc8a7[20]];} else {if(document[OxOc8a7[17]]){Ox237=document[OxOc8a7[17]][OxOc8a7[20]];} ;} ;} ;} ;inc_width[OxOc8a7[21]]=Ox264;inc_height[OxOc8a7[21]]=Ox237;} ;function do_Close(){Window_CloseDialog(window);} ;function Frame_GetContentDocument(Ox246){if(Ox246[OxOc8a7[22]]){return Ox246[OxOc8a7[22]];} ;return Ox246[OxOc8a7[23]];} ;