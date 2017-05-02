/**
 * jQuery EasyUI 1.3.6
 * 
 * Copyright (c) 2009-2014 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt
 * To use it on other terms please contact us at info@jeasyui.com
 *
 */

(function($){function _1(_2){function _9(a){var b=_4.nav[a],c=$('<a href="javascript:void(0)"></a>').appendTo(tr);return c.wrap("<td></td>"),c.linkbutton({iconCls:b.iconCls,plain:!0}).unbind(".pagination").bind("click.pagination",function(){b.handler.call(_2)}),c}function _6(a,b){var c=$.inArray(b,a);return c>=0&&a.splice(c,1),a}var _3=$.data(_2,"pagination"),_4=_3.options,bb=_3.bb={},_5=$(_2).addClass("pagination").html('<table cellspacing="0" cellpadding="0" border="0"><tr></tr></table>'),tr=_5.find("tr"),aa=$.extend([],_4.layout);_4.showPageList||_6(aa,"list"),_4.showRefresh||_6(aa,"refresh"),aa[0]=="sep"&&aa.shift(),aa[aa.length-1]=="sep"&&aa.pop();for(var _7=0;_7<aa.length;_7++){var _8=aa[_7];if(_8=="list"){var ps=$('<select class="pagination-page-list"></select>');ps.bind("change",function(){_4.pageSize=parseInt($(this).val()),_4.onChangePageSize.call(_2,_4.pageSize),_10(_2,_4.pageNumber)});for(var i=0;i<_4.pageList.length;i++)$("<option></option>").text(_4.pageList[i]).appendTo(ps);$("<td></td>").append(ps).appendTo(tr)}else _8=="sep"?$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr):_8=="first"?bb.first=_9("first"):_8=="prev"?bb.prev=_9("prev"):_8=="next"?bb.next=_9("next"):_8=="last"?bb.last=_9("last"):_8=="manual"?($('<span style="padding-left:6px;"></span>').html(_4.beforePageText).appendTo(tr).wrap("<td></td>"),bb.num=$('<input class="pagination-num" type="text" value="1" size="2">').appendTo(tr).wrap("<td></td>"),bb.num.unbind(".pagination").bind("keydown.pagination",function(a){if(a.keyCode==13){var b=parseInt($(this).val())||1;return _10(_2,b),!1}}),bb.after=$('<span style="padding-right:6px;"></span>').appendTo(tr).wrap("<td></td>")):_8=="refresh"?bb.refresh=_9("refresh"):_8=="links"&&$('<td class="pagination-links"></td>').appendTo(tr)}if(_4.buttons){$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr);if($.isArray(_4.buttons))for(var i=0;i<_4.buttons.length;i++){var _b=_4.buttons[i];if(_b=="-")$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr);else{var td=$("<td></td>").appendTo(tr),a=$('<a href="javascript:void(0)"></a>').appendTo(td);a[0].onclick=eval(_b.handler||function(){}),a.linkbutton($.extend({},_b,{plain:!0}))}}else{var td=$("<td></td>").appendTo(tr);$(_4.buttons).appendTo(td).show()}}$('<div class="pagination-info"></div>').appendTo(_5),$('<div style="clear:both;"></div>').appendTo(_5)}function _10(a,b){var c=$.data(a,"pagination").options;_14(a,{pageNumber:b}),c.onSelectPage.call(a,c.pageNumber,c.pageSize)}function _14(a,b){var c=$.data(a,"pagination"),d=c.options,e=c.bb;$.extend(d,b||{});var f=$(a).find("select.pagination-page-list");f.length&&(f.val(d.pageSize+""),d.pageSize=parseInt(f.val()));var g=Math.ceil(d.total/d.pageSize)||1;d.pageNumber<1&&(d.pageNumber=1),d.pageNumber>g&&(d.pageNumber=g),e.num&&e.num.val(d.pageNumber),e.after&&e.after.html(d.afterPageText.replace(/{pages}/,g));var h=$(a).find("td.pagination-links");if(h.length){h.empty();var i=d.pageNumber-Math.floor(d.links/2);i<1&&(i=1);var j=i+d.links-1;j>g&&(j=g),i=j-d.links+1,i<1&&(i=1);for(var k=i;k<=j;k++){var l=$('<a class="pagination-link" href="javascript:void(0)"></a>').appendTo(h);l.linkbutton({plain:!0,text:k}),k==d.pageNumber?l.linkbutton("select"):l.unbind(".pagination").bind("click.pagination",{pageNumber:k},function(b){_10(a,b.data.pageNumber)})}}var m=d.displayMsg;m=m.replace(/{from}/,d.total==0?0:d.pageSize*(d.pageNumber-1)+1),m=m.replace(/{to}/,Math.min(d.pageSize*d.pageNumber,d.total)),m=m.replace(/{total}/,d.total),$(a).find("div.pagination-info").html(m),e.first&&e.first.linkbutton({disabled:d.pageNumber==1}),e.prev&&e.prev.linkbutton({disabled:d.pageNumber==1}),e.next&&e.next.linkbutton({disabled:d.pageNumber==g}),e.last&&e.last.linkbutton({disabled:d.pageNumber==g}),_1d(a,d.loading)}function _1d(a,b){var c=$.data(a,"pagination"),d=c.options;d.loading=b,d.showRefresh&&c.bb.refresh&&c.bb.refresh.linkbutton({iconCls:d.loading?"pagination-loading":"pagination-load"})}$.fn.pagination=function(a,b){return typeof a=="string"?$.fn.pagination.methods[a](this,b):(a=a||{},this.each(function(){var b,c=$.data(this,"pagination");c?b=$.extend(c.options,a):(b=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),a),$.data(this,"pagination",{options:b})),_1(this),_14(this)}))},$.fn.pagination.methods={options:function(a){return $.data(a[0],"pagination").options},loading:function(a){return a.each(function(){_1d(this,!0)})},loaded:function(a){return a.each(function(){_1d(this,!1)})},refresh:function(a,b){return a.each(function(){_14(this,b)})},select:function(a,b){return a.each(function(){_10(this,b)})}},$.fn.pagination.parseOptions=function(_28){var t=$(_28);return $.extend({},$.parser.parseOptions(_28,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:t.attr("pageList")?eval(t.attr("pageList")):undefined})},$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:!1,buttons:null,showPageList:!0,showRefresh:!0,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh"],onSelectPage:function(a,b){},onBeforeRefresh:function(a,b){},onRefresh:function(a,b){},onChangePageSize:function(a){},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){var a=$(this).pagination("options");a.pageNumber>1&&$(this).pagination("select",1)}},prev:{iconCls:"pagination-prev",handler:function(){var a=$(this).pagination("options");a.pageNumber>1&&$(this).pagination("select",a.pageNumber-1)}},next:{iconCls:"pagination-next",handler:function(){var a=$(this).pagination("options"),b=Math.ceil(a.total/a.pageSize);a.pageNumber<b&&$(this).pagination("select",a.pageNumber+1)}},last:{iconCls:"pagination-last",handler:function(){var a=$(this).pagination("options"),b=Math.ceil(a.total/a.pageSize);a.pageNumber<b&&$(this).pagination("select",b)}},refresh:{iconCls:"pagination-refresh",handler:function(){var a=$(this).pagination("options");a.onBeforeRefresh.call(this,a.pageNumber,a.pageSize)!=0&&($(this).pagination("select",a.pageNumber),a.onRefresh.call(this,a.pageNumber,a.pageSize))}}}}})(jQuery)