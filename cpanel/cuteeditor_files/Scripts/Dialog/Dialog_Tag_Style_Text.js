var OxOb681=["","sel_align","sel_valign","sel_justify","sel_letter","tb_letter","sel_letter_unit","sel_line","tb_line","sel_line_unit","tb_indent","sel_indent_unit","sel_direction","sel_writingmode","outer","div_demo","disabled","selectedIndex","cssText","style","value","textAlign","verticalAlign","textJustify","letterSpacing","length","options","lineHeight","textIndent","direction","writingMode"];function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxOb681[0];} ;return Ox84+OxOb681[0];} ;var sel_align=Window_GetElement(window,OxOb681[1],true);var sel_valign=Window_GetElement(window,OxOb681[2],true);var sel_justify=Window_GetElement(window,OxOb681[3],true);var sel_letter=Window_GetElement(window,OxOb681[4],true);var tb_letter=Window_GetElement(window,OxOb681[5],true);var sel_letter_unit=Window_GetElement(window,OxOb681[6],true);var sel_line=Window_GetElement(window,OxOb681[7],true);var tb_line=Window_GetElement(window,OxOb681[8],true);var sel_line_unit=Window_GetElement(window,OxOb681[9],true);var tb_indent=Window_GetElement(window,OxOb681[10],true);var sel_indent_unit=Window_GetElement(window,OxOb681[11],true);var sel_direction=Window_GetElement(window,OxOb681[12],true);var sel_writingmode=Window_GetElement(window,OxOb681[13],true);var outer=Window_GetElement(window,OxOb681[14],true);var div_demo=Window_GetElement(window,OxOb681[15],true);UpdateState=function UpdateState_Text(){tb_letter[OxOb681[16]]=sel_letter_unit[OxOb681[16]]=(sel_letter[OxOb681[17]]>0);tb_line[OxOb681[16]]=sel_line_unit[OxOb681[16]]=(sel_line[OxOb681[17]]>0);div_demo[OxOb681[19]][OxOb681[18]]=element[OxOb681[19]][OxOb681[18]];} ;SyncToView=function SyncToView_Text(){sel_align[OxOb681[20]]=element[OxOb681[19]][OxOb681[21]];sel_valign[OxOb681[20]]=element[OxOb681[19]][OxOb681[22]];sel_justify[OxOb681[20]]=element[OxOb681[19]][OxOb681[23]];sel_letter[OxOb681[20]]=element[OxOb681[19]][OxOb681[24]];sel_letter_unit[OxOb681[17]]=0;if(sel_letter[OxOb681[17]]==-1){if(ParseFloatToString(element[OxOb681[19]].letterSpacing)){tb_letter[OxOb681[20]]=ParseFloatToString(element[OxOb681[19]].letterSpacing);for(var i=0;i<sel_letter_unit[OxOb681[26]][OxOb681[25]];i++){var Ox2b=sel_letter_unit[OxOb681[26]][i][OxOb681[20]];if(Ox2b&&element[OxOb681[19]][OxOb681[24]].indexOf(Ox2b)!=-1){sel_letter_unit[OxOb681[17]]=i;break ;} ;} ;} ;} ;sel_line[OxOb681[20]]=element[OxOb681[19]][OxOb681[27]];sel_line_unit[OxOb681[17]]=0;if(sel_line[OxOb681[17]]==-1){if(ParseFloatToString(element[OxOb681[19]].lineHeight)){tb_line[OxOb681[20]]=ParseFloatToString(element[OxOb681[19]].lineHeight);for(var i=0;i<sel_line_unit[OxOb681[26]][OxOb681[25]];i++){var Ox2b=sel_line_unit[OxOb681[26]][i][OxOb681[20]];if(Ox2b&&element[OxOb681[19]][OxOb681[27]].indexOf(Ox2b)!=-1){sel_line_unit[OxOb681[17]]=i;break ;} ;} ;} ;} ;sel_indent_unit[OxOb681[17]]=0;if(!isNaN(ParseFloatToString(element[OxOb681[19]].textIndent))){tb_indent[OxOb681[20]]=ParseFloatToString(element[OxOb681[19]].textIndent);for(var i=0;i<sel_indent_unit[OxOb681[26]][OxOb681[25]];i++){var Ox2b=sel_indent_unit[OxOb681[26]][i][OxOb681[20]];if(Ox2b&&element[OxOb681[19]][OxOb681[28]].indexOf(Ox2b)!=-1){sel_indent_unit[OxOb681[17]]=i;break ;} ;} ;} ;sel_direction[OxOb681[20]]=element[OxOb681[19]][OxOb681[29]];sel_writingmode[OxOb681[20]]=element[OxOb681[19]][OxOb681[30]];} ;SyncTo=function SyncTo_Text(element){element[OxOb681[19]][OxOb681[21]]=sel_align[OxOb681[20]];element[OxOb681[19]][OxOb681[22]]=sel_valign[OxOb681[20]];element[OxOb681[19]][OxOb681[23]]=sel_justify[OxOb681[20]];if(sel_letter[OxOb681[17]]>0){element[OxOb681[19]][OxOb681[24]]=sel_letter[OxOb681[20]];} else {if(ParseFloatToString(tb_letter.value)){element[OxOb681[19]][OxOb681[24]]=ParseFloatToString(tb_letter.value)+sel_letter_unit[OxOb681[20]];} else {element[OxOb681[19]][OxOb681[24]]=OxOb681[0];} ;} ;if(sel_line[OxOb681[17]]>0){element[OxOb681[19]][OxOb681[27]]=sel_line[OxOb681[20]];} else {if(ParseFloatToString(tb_line.value)){element[OxOb681[19]][OxOb681[27]]=ParseFloatToString(tb_line.value)+sel_line_unit[OxOb681[20]];} else {element[OxOb681[19]][OxOb681[27]]=OxOb681[0];} ;} ;if(ParseFloatToString(tb_indent.value)){element[OxOb681[19]][OxOb681[28]]=ParseFloatToString(tb_indent.value)+sel_indent_unit[OxOb681[20]];} else {element[OxOb681[19]][OxOb681[28]]=OxOb681[0];} ;element[OxOb681[19]][OxOb681[29]]=sel_direction[OxOb681[20]]||OxOb681[0];element[OxOb681[19]][OxOb681[30]]=sel_writingmode[OxOb681[20]]||OxOb681[0];} ;