var OxO6668=["value","idSource","length","checked","linebreaks","\x0D\x0A","ig","\x3Cbr /\x3E","\x0D","\x0A"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;function insertContent(){var Ox190=document.getElementById(OxO6668[1])[OxO6668[0]];if(Ox190&&Ox190[OxO6668[2]]>0){if(document.getElementById(OxO6668[4])[OxO6668[3]]){Ox190=Ox190.replace(( new RegExp(OxO6668[5],OxO6668[6])),OxO6668[7]);Ox190=Ox190.replace(( new RegExp(OxO6668[8],OxO6668[6])),OxO6668[7]);Ox190=Ox190.replace(( new RegExp(OxO6668[9],OxO6668[6])),OxO6668[7]);} ;editor.PasteHTML(Ox190);Window_CloseDialog(window);} ;} ;