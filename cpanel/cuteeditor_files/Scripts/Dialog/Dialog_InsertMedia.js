var OxO1d2c=["value","","nodeType","nodeName","divpreview","Width","Height","AutoStart","ShowControls","ShowStatusBar","WindowlessVideo","TargetUrl","Button1","Button2","btn_zoom_in","btn_zoom_out","btn_Actualsize","btn_CreateDir","browse_Frame","contentWindow","checked","\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=\x22","\x22 showcontrols=\x22","\x22  windowlessvideo=\x22","\x22 showstatusbar=\x22","\x22 width=\x22","\x22 height=\x22","\x22 type=\x22application/x-mplayer2\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A","\x3Cobject classid=\x22CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95\x22 "," codebase=\x22http://activex.microsoft.com/activex/"," controls/mplayer/en/nsmp2inf.cab#Version=6,0,02,902\x22 "," standby=\x22Loading Microsoft Windows Media Player components...\x22 "," type=\x22application/x-oleobject\x22","  height=\x22","\x22 \x3E","\x3Cparam name=\x22FileName\x22 value=\x22","\x22/\x3E","\x3Cparam name=\x22autoStart\x22 value=\x22","\x3Cparam name=\x22showControls\x22 value=\x22","\x3Cparam name=\x22showstatusbar\x22 value=\x22","\x3Cparam name=\x22windowlessvideo\x22 value=\x22","\x3C/object\x3E","innerHTML","onbeforeunload","onunload","Please choose a Media movie to insert","\x22 windowlessvideo=\x22","zoom","style","wrapupPrompt","iepromptfield","display","none","body","div","id","IEPromptBox","promptBlackout","border","1px solid #b0bec7","backgroundColor","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(../Images/formbg2.gif) repeat-x left top;\x22\x3E","\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;","\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;","\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","top","100px","left","offsetWidth","px","block","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)"];setMouseOver();function setMouseOver(){} ;function ResetFields(){TargetUrl[OxO1d2c[0]]=OxO1d2c[1];} ;function RequireFileBrowseScript(){} ;function Actualsize(){} ;function getParent(Ox132,Ox304){if(Ox132==null){return null;} else {if(Ox132[OxO1d2c[2]]==1&&Ox132[OxO1d2c[3]].toLowerCase()==Ox304.toLowerCase()){return Ox132;} else {return getParent(Ox132.parentNode,Ox304);} ;} ;} ;RequireFileBrowseScript();var divpreview=Window_GetElement(window,OxO1d2c[4],true);var Width=Window_GetElement(window,OxO1d2c[5],true);var Height=Window_GetElement(window,OxO1d2c[6],true);var AutoStart=Window_GetElement(window,OxO1d2c[7],true);var ShowControls=Window_GetElement(window,OxO1d2c[8],true);var ShowStatusBar=Window_GetElement(window,OxO1d2c[9],true);var WindowlessVideo=Window_GetElement(window,OxO1d2c[10],true);var TargetUrl=Window_GetElement(window,OxO1d2c[11],true);var Button1=Window_GetElement(window,OxO1d2c[12],true);var Button2=Window_GetElement(window,OxO1d2c[13],true);var btn_zoom_in=Window_GetElement(window,OxO1d2c[14],true);var btn_zoom_out=Window_GetElement(window,OxO1d2c[15],true);var btn_Actualsize=Window_GetElement(window,OxO1d2c[16],true);var CreateDir=Window_GetElement(window,OxO1d2c[17],true);var browse_Frame=Window_GetElement(window,OxO1d2c[18],true);browse_Frame=browse_Frame[OxO1d2c[19]];var editor=Window_GetDialogArguments(window);do_preview();function do_preview(){var Ox309;var Ox33;var Ox261;if(TargetUrl[OxO1d2c[0]]==OxO1d2c[1]){return ;} ;var Ox30a,Ox30b,Ox30c;if(AutoStart[OxO1d2c[20]]){Ox30a=1;} else {Ox30a=0;} ;if(ShowStatusBar[OxO1d2c[20]]){Ox30b=1;} else {Ox30b=0;} ;if(ShowControls[OxO1d2c[20]]){Ox30c=1;} else {Ox30c=0;} ;if(WindowlessVideo[OxO1d2c[20]]){windowlessvideo=true;} else {windowlessvideo=false;} ;Ox33=Width[OxO1d2c[0]]+OxO1d2c[1];Ox261=Height[OxO1d2c[0]]+OxO1d2c[1];Ox33=parseInt(Ox33);Ox261=parseInt(Ox261);var Ox2c5=OxO1d2c[21]+TargetUrl[OxO1d2c[0]]+OxO1d2c[22]+Ox30a+OxO1d2c[23]+Ox30c+OxO1d2c[24]+windowlessvideo+OxO1d2c[25]+Ox30b+OxO1d2c[26]+Ox33+OxO1d2c[27]+Ox261+OxO1d2c[28];var Ox2a0=OxO1d2c[29]+OxO1d2c[30]+OxO1d2c[31]+OxO1d2c[32]+OxO1d2c[33]+OxO1d2c[34]+Ox261+OxO1d2c[26]+Ox33+OxO1d2c[35];Ox2a0=Ox2a0+OxO1d2c[36]+TargetUrl[OxO1d2c[0]]+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[38]+Ox30a+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[39]+Ox30c+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[40]+Ox30b+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[41]+windowlessvideo+OxO1d2c[37];Ox2a0=Ox2a0+Ox2c5+OxO1d2c[42];Ox2c5=Ox2a0;divpreview[OxO1d2c[43]]=Ox2c5;} ;window[OxO1d2c[44]]=window[OxO1d2c[45]]=function (){divpreview[OxO1d2c[43]]=OxO1d2c[1];} ;var parameters= new Array();function do_insert(){divpreview[OxO1d2c[43]]=OxO1d2c[1];if(TargetUrl[OxO1d2c[0]]==OxO1d2c[1]){alert(OxO1d2c[46]);return false;} ;var Ox30a,Ox30b,Ox30c;if(AutoStart[OxO1d2c[20]]){Ox30a=1;} else {Ox30a=0;} ;if(ShowStatusBar[OxO1d2c[20]]){Ox30b=1;} else {Ox30b=0;} ;if(ShowControls[OxO1d2c[20]]){Ox30c=1;} else {Ox30c=0;} ;if(WindowlessVideo[OxO1d2c[20]]){windowlessvideo=true;} else {windowlessvideo=false;} ;width=Width[OxO1d2c[0]]+OxO1d2c[1];height=Height[OxO1d2c[0]]+OxO1d2c[1];width=parseInt(width);height=parseInt(height);var Ox2c5=OxO1d2c[21]+TargetUrl[OxO1d2c[0]]+OxO1d2c[22]+Ox30a+OxO1d2c[23]+Ox30c+OxO1d2c[25]+Ox30b+OxO1d2c[47]+windowlessvideo+OxO1d2c[26]+width+OxO1d2c[27]+height+OxO1d2c[28];var Ox2a0=OxO1d2c[29]+OxO1d2c[30]+OxO1d2c[31]+OxO1d2c[32]+OxO1d2c[33]+OxO1d2c[34]+height+OxO1d2c[26]+width+OxO1d2c[35];Ox2a0=Ox2a0+OxO1d2c[36]+TargetUrl[OxO1d2c[0]]+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[38]+Ox30a+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[39]+Ox30c+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[40]+Ox30b+OxO1d2c[37];Ox2a0=Ox2a0+OxO1d2c[41]+windowlessvideo+OxO1d2c[37];Ox2a0=Ox2a0+Ox2c5+OxO1d2c[42];Ox2c5=Ox2a0;editor.PasteHTML(Ox2c5);Window_CloseDialog(window);} ;function do_Close(){divpreview[OxO1d2c[43]]=OxO1d2c[1];Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxO1d2c[49]][OxO1d2c[48]]!=0){divpreview[OxO1d2c[49]][OxO1d2c[48]]*=1.2;} else {divpreview[OxO1d2c[49]][OxO1d2c[48]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxO1d2c[49]][OxO1d2c[48]]!=0){divpreview[OxO1d2c[49]][OxO1d2c[48]]*=0.8;} else {divpreview[OxO1d2c[49]][OxO1d2c[48]]=0.8;} ;} ;function Actualsize(){divpreview[OxO1d2c[49]][OxO1d2c[48]]=1;do_preview();} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox10d,Ox10e,Ox10f){that=this;this[OxO1d2c[50]]=function (Ox110){val=document.getElementById(OxO1d2c[51])[OxO1d2c[0]];_dialogPromptID[OxO1d2c[49]][OxO1d2c[52]]=OxO1d2c[53];document.getElementById(OxO1d2c[51])[OxO1d2c[0]]=OxO1d2c[1];if(Ox110){val=OxO1d2c[1];} ;Ox10d(val);return false;} ;if(Ox10f==undefined){Ox10f=OxO1d2c[1];} ;if(_dialogPromptID==null){var Ox111=document.getElementsByTagName(OxO1d2c[54])[0];tnode=document.createElement(OxO1d2c[55]);tnode[OxO1d2c[56]]=OxO1d2c[57];Ox111.appendChild(tnode);_dialogPromptID=document.getElementById(OxO1d2c[57]);tnode=document.createElement(OxO1d2c[55]);tnode[OxO1d2c[56]]=OxO1d2c[58];Ox111.appendChild(tnode);_dialogPromptID[OxO1d2c[49]][OxO1d2c[59]]=OxO1d2c[60];_dialogPromptID[OxO1d2c[49]][OxO1d2c[61]]=OxO1d2c[62];_dialogPromptID[OxO1d2c[49]][OxO1d2c[63]]=OxO1d2c[64];_dialogPromptID[OxO1d2c[49]][OxO1d2c[65]]=OxO1d2c[66];_dialogPromptID[OxO1d2c[49]][OxO1d2c[67]]=OxO1d2c[68];} ;var Ox112=OxO1d2c[69]+InputRequired+OxO1d2c[70];Ox112+=OxO1d2c[71]+Ox10e+OxO1d2c[72];Ox112+=OxO1d2c[73];Ox112+=OxO1d2c[74]+Ox10f+OxO1d2c[75];Ox112+=OxO1d2c[76];Ox112+=OxO1d2c[77]+OK+OxO1d2c[78];Ox112+=OxO1d2c[79];Ox112+=OxO1d2c[80]+Cancel+OxO1d2c[81];Ox112+=OxO1d2c[82];_dialogPromptID[OxO1d2c[43]]=Ox112;_dialogPromptID[OxO1d2c[49]][OxO1d2c[83]]=OxO1d2c[84];_dialogPromptID[OxO1d2c[49]][OxO1d2c[85]]=parseInt((document[OxO1d2c[54]][OxO1d2c[86]]-315)/2)+OxO1d2c[87];_dialogPromptID[OxO1d2c[49]][OxO1d2c[52]]=OxO1d2c[88];var Ox113=document.getElementById(OxO1d2c[51]);try{var Ox114=Ox113.createTextRange();Ox114.collapse(false);Ox114.select();} catch(x){Ox113.focus();} ;} ;} ;if(!Browser_IsWinIE()){btn_zoom_in[OxO1d2c[49]][OxO1d2c[52]]=btn_zoom_out[OxO1d2c[49]][OxO1d2c[52]]=btn_Actualsize[OxO1d2c[49]][OxO1d2c[52]]=OxO1d2c[53];} else {} ;if(CreateDir){CreateDir[OxO1d2c[89]]= new Function(OxO1d2c[90]);} ;if(btn_zoom_in){btn_zoom_in[OxO1d2c[89]]= new Function(OxO1d2c[90]);} ;if(btn_zoom_out){btn_zoom_out[OxO1d2c[89]]= new Function(OxO1d2c[90]);} ;if(btn_Actualsize){btn_Actualsize[OxO1d2c[89]]= new Function(OxO1d2c[90]);} ;