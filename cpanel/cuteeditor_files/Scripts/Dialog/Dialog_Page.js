var OxO5a19=["Table1","Table2","inp_title","inp_doctype","inp_description","inp_keywords","PageLanguage","HTMLEncoding","bgcolor","bgcolor_Preview","fontcolor","fontcolor_Preview","Backgroundimage","btnbrowse","TopMargin","BottomMargin","LeftMargin","RightMargin","MarginWidth","MarginHeight","btnok","btncc","editor","window","document","body","head","title","value","innerHTML","DOCTYPE","meta","length","name","keywords","content","description","httpEquiv","content-type","content-language","background","color","style","backgroundColor","bgColor","topMargin","bottomMargin","leftMargin","rightMargin","marginWidth","marginHeight","onclick","","ValidNumber","Please enter a valid color number.","text","childNodes","parentNode","http-equiv","Content-Type","Content-Language","META"];var Table1=Window_GetElement(window,OxO5a19[0],true);var Table2=Window_GetElement(window,OxO5a19[1],true);var inp_title=Window_GetElement(window,OxO5a19[2],true);var inp_doctype=Window_GetElement(window,OxO5a19[3],true);var inp_description=Window_GetElement(window,OxO5a19[4],true);var inp_keywords=Window_GetElement(window,OxO5a19[5],true);var PageLanguage=Window_GetElement(window,OxO5a19[6],true);var HTMLEncoding=Window_GetElement(window,OxO5a19[7],true);var bgcolor=Window_GetElement(window,OxO5a19[8],true);var bgcolor_Preview=Window_GetElement(window,OxO5a19[9],true);var fontcolor=Window_GetElement(window,OxO5a19[10],true);var fontcolor_Preview=Window_GetElement(window,OxO5a19[11],true);var Backgroundimage=Window_GetElement(window,OxO5a19[12],true);var btnbrowse=Window_GetElement(window,OxO5a19[13],true);var TopMargin=Window_GetElement(window,OxO5a19[14],true);var BottomMargin=Window_GetElement(window,OxO5a19[15],true);var LeftMargin=Window_GetElement(window,OxO5a19[16],true);var RightMargin=Window_GetElement(window,OxO5a19[17],true);var MarginWidth=Window_GetElement(window,OxO5a19[18],true);var MarginHeight=Window_GetElement(window,OxO5a19[19],true);var btnok=Window_GetElement(window,OxO5a19[20],true);var btncc=Window_GetElement(window,OxO5a19[21],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxO5a19[22]];var editwin=obj[OxO5a19[23]];var editdoc=obj[OxO5a19[24]];var body=editdoc[OxO5a19[25]];var head=obj[OxO5a19[26]];var title=head.getElementsByTagName(OxO5a19[27])[0];if(title){inp_title[OxO5a19[28]]=title[OxO5a19[29]];} ;inp_doctype[OxO5a19[28]]=obj[OxO5a19[30]];var metas=head.getElementsByTagName(OxO5a19[31]);for(var m=0;m<metas[OxO5a19[32]];m++){if(metas[m][OxO5a19[33]].toLowerCase()==OxO5a19[34]){inp_keywords[OxO5a19[28]]=metas[m][OxO5a19[35]];} ;if(metas[m][OxO5a19[33]].toLowerCase()==OxO5a19[36]){inp_description[OxO5a19[28]]=metas[m][OxO5a19[35]];} ;if(metas[m][OxO5a19[37]].toLowerCase()==OxO5a19[38]){HTMLEncoding[OxO5a19[28]]=metas[m][OxO5a19[35]];} ;if(metas[m][OxO5a19[37]].toLowerCase()==OxO5a19[39]){PageLanguage[OxO5a19[28]]=metas[m][OxO5a19[35]];} ;} ;if(editdoc[OxO5a19[25]][OxO5a19[40]]){Backgroundimage[OxO5a19[28]]=editdoc[OxO5a19[25]][OxO5a19[40]];} ;if(editdoc[OxO5a19[25]][OxO5a19[42]][OxO5a19[41]]){fontcolor[OxO5a19[28]]=editdoc[OxO5a19[25]][OxO5a19[42]][OxO5a19[41]];fontcolor[OxO5a19[42]][OxO5a19[43]]=fontcolor[OxO5a19[28]];fontcolor_Preview[OxO5a19[42]][OxO5a19[43]]=fontcolor[OxO5a19[28]];} ;var body_bgcolor=editdoc[OxO5a19[25]][OxO5a19[42]][OxO5a19[43]]||editdoc[OxO5a19[25]][OxO5a19[44]];if(body_bgcolor){bgcolor[OxO5a19[28]]=body_bgcolor;bgcolor[OxO5a19[42]][OxO5a19[43]]=body_bgcolor;bgcolor_Preview[OxO5a19[42]][OxO5a19[43]]=body_bgcolor;} ;if(Browser_IsWinIE()){if(body[OxO5a19[45]]){TopMargin[OxO5a19[28]]=body[OxO5a19[45]];} ;if(body[OxO5a19[46]]){BottomMargin[OxO5a19[28]]=body[OxO5a19[46]];} ;if(body[OxO5a19[47]]){LeftMargin[OxO5a19[28]]=body[OxO5a19[47]];} ;if(body[OxO5a19[48]]){RightMargin[OxO5a19[28]]=body[OxO5a19[48]];} ;if(body[OxO5a19[49]]){MarginWidth[OxO5a19[28]]=body[OxO5a19[49]];} ;if(body[OxO5a19[50]]){MarginHeight[OxO5a19[28]]=body[OxO5a19[50]];} ;} else {if(body.getAttribute(OxO5a19[45])){TopMargin[OxO5a19[28]]=body.getAttribute(OxO5a19[45]);} ;if(body.getAttribute(OxO5a19[46])){BottomMargin[OxO5a19[28]]=body.getAttribute(OxO5a19[46]);} ;if(body.getAttribute(OxO5a19[47])){LeftMargin[OxO5a19[28]]=body.getAttribute(OxO5a19[47]);} ;if(body.getAttribute(OxO5a19[48])){RightMargin[OxO5a19[28]]=body.getAttribute(OxO5a19[48]);} ;if(body.getAttribute(OxO5a19[18])){MarginWidth[OxO5a19[28]]=body.getAttribute(OxO5a19[49]);} ;if(body.getAttribute(OxO5a19[50])){MarginHeight[OxO5a19[28]]=body.getAttribute(OxO5a19[50]);} ;} ;btnok[OxO5a19[51]]=function btnok_onclick(){try{if(Browser_IsWinIE()){body[OxO5a19[45]]=TopMargin[OxO5a19[28]];body[OxO5a19[46]]=BottomMargin[OxO5a19[28]];body[OxO5a19[47]]=LeftMargin[OxO5a19[28]];body[OxO5a19[48]]=RightMargin[OxO5a19[28]];if(MarginWidth[OxO5a19[28]]){body[OxO5a19[49]]=MarginWidth[OxO5a19[28]];} ;if(MarginHeight[OxO5a19[28]]){body[OxO5a19[50]]=MarginHeight[OxO5a19[28]];} ;} else {body.setAttribute(OxO5a19[45],TopMargin.value);body.setAttribute(OxO5a19[46],BottomMargin.value);body.setAttribute(OxO5a19[47],LeftMargin.value);body.setAttribute(OxO5a19[48],RightMargin.value);body.setAttribute(OxO5a19[49],MarginWidth.value);body.setAttribute(OxO5a19[50],MarginHeight.value);if(body.getAttribute(OxO5a19[45])==OxO5a19[52]){body.removeAttribute(OxO5a19[45]);} ;if(body.getAttribute(OxO5a19[46])==OxO5a19[52]){body.removeAttribute(OxO5a19[46]);} ;if(body.getAttribute(OxO5a19[47])==OxO5a19[52]){body.removeAttribute(OxO5a19[47]);} ;if(body.getAttribute(OxO5a19[48])==OxO5a19[52]){body.removeAttribute(OxO5a19[48]);} ;if(body.getAttribute(OxO5a19[49])==OxO5a19[52]){body.removeAttribute(OxO5a19[49]);} ;if(body.getAttribute(OxO5a19[50])==OxO5a19[52]){body.removeAttribute(OxO5a19[50]);} ;} ;} catch(er){alert(CE_GetStr(OxO5a19[53]));return ;} ;try{editdoc[OxO5a19[25]][OxO5a19[42]][OxO5a19[43]]=bgcolor[OxO5a19[28]];editdoc[OxO5a19[25]][OxO5a19[42]][OxO5a19[41]]=fontcolor[OxO5a19[28]];if(Backgroundimage[OxO5a19[28]]){editdoc[OxO5a19[25]][OxO5a19[40]]=Backgroundimage[OxO5a19[28]];} else {body.removeAttribute(OxO5a19[40]);} ;} catch(er){alert(OxO5a19[54]);return ;} ;if(!title){title=document.createElement(OxO5a19[27]);head.appendChild(title);} ;if(Browser_IsWinIE()){title[OxO5a19[55]]=inp_title[OxO5a19[28]];} else {var Ox336=document.createTextNode(inp_title.value);try{title.removeChild(title[OxO5a19[56]].item(0));} catch(x){} ;title.appendChild(Ox336);} ;for(var m=0;m<metas[OxO5a19[32]];m++){var Ox337=metas[m];if(Ox337){if(Ox337[OxO5a19[33]].toLowerCase()==OxO5a19[34]||Ox337[OxO5a19[33]].toLowerCase()==OxO5a19[36]||Ox337[OxO5a19[33]].toLowerCase()==OxO5a19[38]||Ox337[OxO5a19[33]].toLowerCase()==OxO5a19[39]){Ox337[OxO5a19[57]].removeChild(Ox337);Ox337=null;} ;} ;} ;try{Ox338(OxO5a19[33],OxO5a19[34],inp_keywords.value);Ox338(OxO5a19[33],OxO5a19[36],inp_description.value);Ox338(OxO5a19[58],OxO5a19[59],HTMLEncoding.value);Ox338(OxO5a19[58],OxO5a19[60],PageLanguage.value);} catch(x){} ;function Ox338(Ox339,name,Ox190){var metas=head.getElementsByTagName(OxO5a19[31]);for(var m=0;m<metas[OxO5a19[32]];m++){if(metas[m][OxO5a19[33]].toLowerCase()==name.toLowerCase()){metas[m][OxO5a19[57]].removeChild(metas[m]);} ;} ;if(Ox190!=OxO5a19[52]&&Ox190!=null){var Ox33a=editdoc.createElement(OxO5a19[61]);Ox33a.setAttribute(Ox339,name);Ox33a.setAttribute(OxO5a19[35],Ox190);head.appendChild(Ox33a);} ;} ;Window_SetDialogReturnValue(window,inp_doctype[OxO5a19[28]]+OxO5a19[52]);Window_CloseDialog(window);} ;btnbrowse[OxO5a19[51]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){Backgroundimage[OxO5a19[28]]=Ox27;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox25b,Backgroundimage.value,Backgroundimage);} else {editor.ShowSelectImageDialog(Ox25b,Backgroundimage.value);} ;} ;btncc[OxO5a19[51]]=function btncc_onclick(){Window_CloseDialog(window);} ;fontcolor[OxO5a19[51]]=fontcolor_Preview[OxO5a19[51]]=function fontcolor_onclick(){SelectColor(fontcolor,fontcolor_Preview);} ;bgcolor[OxO5a19[51]]=bgcolor_Preview[OxO5a19[51]]=function bgcolor_onclick(){SelectColor(bgcolor,bgcolor_Preview);} ;