"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5510],{35510:function(a,e,r){r.r(e);var t,s,i,o,c,n=r(99312),u=r(81043),l=r(88962),d=r(33368),h=r(71650),p=r(82390),k=r(69205),_=r(70906),g=r(91808),v=(r(14271),r(68144)),b=r(79932),m=r(47181),f=(r(98762),r(9381),r(34821)),y=r(60538),w=r(41682),B=r(26765),P=r(11654);r(35919),(0,g.Z)([(0,b.Mo)("dialog-hassio-create-backup")],(function(a,e){var r,g=function(e){(0,k.Z)(t,e);var r=(0,_.Z)(t);function t(){var e;(0,h.Z)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return e=r.call.apply(r,[this].concat(i)),a((0,p.Z)(e)),e}return(0,d.Z)(t)}(e);return{F:g,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_creatingBackup",value:function(){return!1}},{kind:"field",decorators:[(0,b.IO)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._dialogParams=a,this._creatingBackup=!1}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._creatingBackup=!1,this._error=void 0,(0,m.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,v.dy)(t||(t=(0,l.Z)([' <ha-dialog open scrimClickAction @closed="','" .heading="','"> '," ",' <mwc-button slot="secondaryAction" @click="','"> ',' </mwc-button> <mwc-button .disabled="','" slot="primaryAction" @click="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,f.i)(this.hass,this._dialogParams.supervisor.localize("backup.create_backup")),this._creatingBackup?(0,v.dy)(s||(s=(0,l.Z)(["<ha-circular-progress active></ha-circular-progress>"]))):(0,v.dy)(i||(i=(0,l.Z)(['<supervisor-backup-content .hass="','" .supervisor="','" dialogInitialFocus> </supervisor-backup-content>'])),this.hass,this._dialogParams.supervisor),this._error?(0,v.dy)(o||(o=(0,l.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.closeDialog,this._dialogParams.supervisor.localize("common.close"),this._creatingBackup,this._createBackup,this._dialogParams.supervisor.localize("backup.create")):v.Ld}},{kind:"method",key:"_createBackup",value:(r=(0,u.Z)((0,n.Z)().mark((function a(){var e;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("running"===this._dialogParams.supervisor.info.state){a.next=3;break}return(0,B.Ys)(this,{title:this._dialogParams.supervisor.localize("backup.could_not_create"),text:this._dialogParams.supervisor.localize("backup.create_blocked_not_running","state",this._dialogParams.supervisor.info.state)}),a.abrupt("return");case 3:if(e=this._backupContent.backupDetails(),this._creatingBackup=!0,this._error="",!e.password||e.password.length){a.next=10;break}return this._error=this._dialogParams.supervisor.localize("backup.enter_password"),this._creatingBackup=!1,a.abrupt("return");case 10:if(!e.password||e.password===e.confirm_password){a.next=14;break}return this._error=this._dialogParams.supervisor.localize("backup.passwords_not_matching"),this._creatingBackup=!1,a.abrupt("return");case 14:if(delete e.confirm_password,a.prev=15,"full"!==this._backupContent.backupType){a.next=21;break}return a.next=19,(0,y.vU)(this.hass,e);case 19:a.next=23;break;case 21:return a.next=23,(0,y.zU)(this.hass,e);case 23:this._dialogParams.onCreate(),this.closeDialog(),a.next=30;break;case 27:a.prev=27,a.t0=a.catch(15),this._error=(0,w.js)(a.t0);case 30:this._creatingBackup=!1;case 31:case"end":return a.stop()}}),a,this,[[15,27]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[P.Qx,P.yu,(0,v.iv)(c||(c=(0,l.Z)(["ha-circular-progress{display:block;text-align:center}"])))]}}]}}),v.oi)}}]);
//# sourceMappingURL=5510-lUJkza-YSug.js.map