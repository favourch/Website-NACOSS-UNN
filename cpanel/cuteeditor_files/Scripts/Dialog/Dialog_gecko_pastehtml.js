var OxOe282=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOe282[0]]=function (){var iframe=document.getElementById(OxOe282[2])[OxOe282[1]];iframe[OxOe282[5]][OxOe282[4]][OxOe282[3]]=OxOe282[6];iframe[OxOe282[5]][OxOe282[7]]=OxOe282[8];iframe[OxOe282[5]][OxOe282[4]][OxOe282[9]]=true;iframe[OxOe282[5]][OxOe282[4]][OxOe282[11]][OxOe282[10]]=OxOe282[12];iframe[OxOe282[5]][OxOe282[4]][OxOe282[11]][OxOe282[13]]=OxOe282[14];iframe[OxOe282[5]][OxOe282[4]][OxOe282[11]][OxOe282[15]]=OxOe282[16];iframe[OxOe282[5]][OxOe282[4]][OxOe282[11]][OxOe282[17]]=OxOe282[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOe282[2])[OxOe282[1]];var Ox190=iframe[OxOe282[5]][OxOe282[4]][OxOe282[3]];if(Ox190&&Ox190[OxOe282[19]]>0){Ox190=_CleanCode(Ox190);if(Ox190.match(/<*>/g)){Ox190=String_HtmlEncode(Ox190);} ;editor.PasteHTML(Ox190);Window_CloseDialog(window);} ;} ;function _CleanCode(Ox237){Ox237=Ox237.replace(/<\\?\??xml[^>]>/gi,OxOe282[6]);Ox237=Ox237.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxOe282[20]);Ox237=Ox237.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOe282[20]);Ox237=Ox237.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOe282[6]);Ox237=Ox237.replace(/<o:p>\s*<\/o:p>/g,OxOe282[6]);Ox237=Ox237.replace(/<o:p>.*?<\/o:p>/g,OxOe282[21]);Ox237=Ox237.replace(/<\/?\w+:[^>]*>/gi,OxOe282[6]);Ox237=Ox237.replace(/<\!--.*-->/g,OxOe282[6]);Ox237=Ox237.replace(/[\�\�]/gi,OxOe282[22]);Ox237=Ox237.replace(/[\�\�]/gi,OxOe282[23]);Ox237=Ox237.replace(/<\\?\?xml[^>]*>/gi,OxOe282[6]);Ox237=Ox237.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOe282[6]);Ox237=Ox237.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOe282[21]);Ox237=Ox237.replace(/<span\s*[^>]*><\/span>/gi,OxOe282[6]);Ox237=Ox237.replace(/\s*style="\s*"/gi,OxOe282[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOe282[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOe282[6]);Ox237=Ox237.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxOe282[6]);while(Ox237.match(/<span\s*>(.*?)<\/span>/gi)){Ox237=Ox237.replace(/<span\s*>(.*?)<\/span>/gi,OxOe282[24]);} ;while(Ox237.match(/<font\s*>(.*?)<\/font>/gi)){Ox237=Ox237.replace(/<font\s*>(.*?)<\/font>/gi,OxOe282[24]);} ;Ox237=Ox237.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOe282[24]);Ox237=Ox237.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOe282[24]);Ox237=Ox237.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOe282[24]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxOe282[6]);Ox237=Ox237.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxOe282[6]);return Ox237;} ;function String_HtmlEncode(Ox177){if(Ox177==null){return OxOe282[6];} ;Ox177=Ox177.replace(/&/g,OxOe282[25]);Ox177=Ox177.replace(/</g,OxOe282[26]);Ox177=Ox177.replace(/>/g,OxOe282[27]);Ox177=Ox177.replace(/'/g,OxOe282[28]);Ox177=Ox177.replace(/\x22/g,OxOe282[29]);return Ox177;} ;