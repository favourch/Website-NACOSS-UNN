var OxOb5bc=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x22","\x3C$1$3"," ","\x26nbsp;","$1","\x3Ch$1\x3E","\x3C$1\x3E$2\x3C/$1\x3E","\x27"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxOb5bc[0]]=function (){var iframe=document.getElementById(OxOb5bc[2])[OxOb5bc[1]];iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[3]]=OxOb5bc[6];iframe[OxOb5bc[5]][OxOb5bc[7]]=OxOb5bc[8];iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[9]]=true;iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[11]][OxOb5bc[10]]=OxOb5bc[12];iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[11]][OxOb5bc[13]]=OxOb5bc[14];iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[11]][OxOb5bc[15]]=OxOb5bc[16];iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[11]][OxOb5bc[17]]=OxOb5bc[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxOb5bc[2])[OxOb5bc[1]];var Ox190=iframe[OxOb5bc[5]][OxOb5bc[4]][OxOb5bc[3]];if(Ox190&&Ox190[OxOb5bc[19]]>0){editor.PasteHTML(_RemoveWord(Ox190));Window_CloseDialog(window);} ;} ;function _RemoveWord(Ox237){Ox237=Ox237.replace(/<[\/]?(base|meta|link|style|font|st1|shape|path|lock|imagedata|stroke|formulas|xml|del|ins|[ovwxp]:\w+)[^>]*?>/gi,OxOb5bc[6]);Ox237=Ox237.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<!--[\s\S]*?-->/gi,OxOb5bc[6]);Ox237=Ox237.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi,OxOb5bc[6]);Ox237=Ox237.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi,OxOb5bc[20]);Ox237=Ox237.replace(/\s*TEXT-INDENT: 0cm\s*;/gi,OxOb5bc[6]);Ox237=Ox237.replace(/\s*TEXT-INDENT: 0cm\s*"/gi,OxOb5bc[20]);Ox237=Ox237.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi,OxOb5bc[20]);Ox237=Ox237.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi,OxOb5bc[20]);Ox237=Ox237.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi,OxOb5bc[20]);Ox237=Ox237.replace(/\s*tab-stops:[^;"]*;?/gi,OxOb5bc[6]);Ox237=Ox237.replace(/\s*tab-stops:[^"]*/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,OxOb5bc[21]);Ox237=Ox237.replace(/\s*style="\s*"/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<SPAN\s*[^>]*>\s* \s*<\/SPAN>/gi,OxOb5bc[22]);Ox237=Ox237.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOb5bc[6]);Ox237=Ox237.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOb5bc[23]);Ox237=Ox237.replace(/<SPAN\s*[^>]*><\/SPAN>/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOb5bc[21]);Ox237=Ox237.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi,OxOb5bc[24]);Ox237=Ox237.replace(/<\/?\w+:[^>]*>/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<\!--.*?-->/g,OxOb5bc[6]);Ox237=Ox237.replace(/<H\d>\s*<\/H\d>/gi,OxOb5bc[6]);Ox237=Ox237.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi,OxOb5bc[21]);Ox237=Ox237.replace(/<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi,OxOb5bc[21]);Ox237=Ox237.replace(/<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi,OxOb5bc[21]);Ox237=Ox237.replace(/<H(\d)([^>]*)>/gi,OxOb5bc[25]);Ox237=Ox237.replace(/<(H\d)><FONT[^>]*>(.*?)<\/FONT><\/\1>/gi,OxOb5bc[26]);Ox237=Ox237.replace(/<(H\d)><EM>(.*?)<\/EM><\/\1>/gi,OxOb5bc[26]);Ox237=Ox237.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOb5bc[24]);Ox237=Ox237.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOb5bc[24]);Ox237=Ox237.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOb5bc[24]);Ox237=Ox237.replace(/[\�\�]/gi,OxOb5bc[20]);Ox237=Ox237.replace(/[\�\�]/gi,OxOb5bc[27]);return Ox237;} ;