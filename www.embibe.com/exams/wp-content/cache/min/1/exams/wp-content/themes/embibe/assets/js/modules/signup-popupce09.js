var pdf_links_arr=[];function downloadExamsPdfFile(homePage,fileURL,fileType){const link=document.createElement("a");if(fileType=='pdf'){link.download=!0}
link.target='_blank';link.href=fileURL;link.click();document.body.removeChild(link);if(homePage!=''){const homePageLink=document.createElement("a");homePageLink.href=homePage;homePageLink.target='_self';homePageLink.click();document.body.removeChild(homePageLink)}
setCookieExams('selected-pdf-link','',1)}
function open_login_popup_for_exam_4(title='',pdf_links_id,action='pdf-click'){setCookieExams('selected-pdf-link','',1);setCookieExams('selected-pdf-link',pdf_links_arr[pdf_links_id],1);if(jQuery('.create-free-account').length){jQuery('.create-free-account').css('display','flex')}
if(jQuery('.form-popup').length){jQuery('.form-popup').css('display','flex')}
var event_attr='';if(jQuery('.practice-now-link-btn').length||jQuery('.book-detail-page-link').length||jQuery('.practice-now-link-btn').length||jQuery('.exams-video-link-btn').length){if(action=='practice-now-link-btn'){event_attr=jQuery('.practice-now-link-btn').data('event');console.log(event_attr);console.log(action)}
if(action=='take-test-link-btn'){event_attr=jQuery('.take-test-link-btn').data('event');console.log(event_attr);console.log(action)}
if(action=='exams-video-link-btn'){event_attr=jQuery('.exams-video-link-btn').data('event');console.log(event_attr);console.log(action)}
if(action=='book-detail-page-link'){event_attr=jQuery('.book-detail-page-link').data('event');console.log(event_attr);console.log(action)}}
if(event_attr!=''){const ev=event_attr.split(",");calling_book_event(ev[0],ev[1],ev[2],ev[3],ev[4],ev[5],ev[6],ev[7],ev[8],ev[9],ev[10])}else{var thevalue=title;var enamedata=null;var cnamedaat=null;var ename=jQuery('#examname').html();var cname=jQuery('.evt_catname').html();if(ename!=''){enamedata=jQuery('#examname').html()}
if(cname!=''){cnamedaat=jQuery('.evt_catname').html()}
window.dataLayer=window.dataLayer||[];dataLayer.push({"event":'Link_Click',"eventCategory":'Link_Click',"eventAction":'Exams_Link_Click',"eventLabel":thevalue,"ScreenName":jQuery('#name_type').val(),"exam_name":enamedata,"exams_category":cnamedaat,"locale":'en',"is_paid":!1,"org_id":'1',"content_id":null,"content_type":null,"content_subtype":null,"title":null,"source":'exams_web',"feature_name":'Exam Links',"module_name":'Exams',"userId":'guest',})}}
function open_login_popup_for_exam_4_for_books_pages(title='',pdf_links_id,event_attrs){setCookieExams('selected-pdf-link','',1);setCookieExams('selected-pdf-link',pdf_links_arr[pdf_links_id],1);if(jQuery('.create-free-account').length){jQuery('.create-free-account').css('display','flex')}
if(jQuery('.form-popup').length){jQuery('.form-popup').css('display','flex')}
console.log(event_attrs);const ev=event_attrs.split(",");calling_book_event(ev[0],ev[1],ev[2],ev[3],ev[4],ev[5],ev[6],ev[7],ev[8],ev[9],ev[10],ev[11])}
function setCookieExams(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()}else var expires="";document.cookie=name+"="+value+expires+"; path=/;"}
function getCookieExams(cname){let name=cname+"=";let decodedCookie=decodeURIComponent(document.cookie);let ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}
return!0}
function check_if_user_logged_in(reload=!1){var host_url=window.location.hostname;var protp_tk_name='preprod_embibe-token';var api_url="https://preprodms.embibe.com/user_auth_ms/user_details";if(host_url=='embibe.com'||host_url=='www.embibe.com'){protp_tk_name='prod_embibe-token';api_url='https://api-prod-cf.embibe.com/user_auth_ms/user_details'}
fetch(api_url,{method:'get',credentials:'include',headers:{'embibe-token':getCookieExams(protp_tk_name)}}).then(response=>response.json()).then(resend_data=>{if(resend_data.status==200){if(reload==!0){window.location.reload()}}else{change_all_pdf_links_to_login_popup()}})}
function change_all_pdf_links_to_login_popup(){if(jQuery('.practice-now-link-btn').length){var links=document.querySelectorAll('a.primary-button.practice-now-link-btn');var countofpdf=0;var action='practice-now-link-btn';for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4(`'+links[count].text+'`,`'+countofpdf+'`,`'+action+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}
if(jQuery('.take-test-link-btn').length){var links=document.querySelectorAll('a.take-test-link-btn');var countofpdf=0;var action='take-test-link-btn';for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4(`'+links[count].text+'`,`'+countofpdf+'`,`'+action+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}
if(jQuery('.exams-video-link-btn').length){var links=document.querySelectorAll('a.exams-video-link-btn');var countofpdf=0;var action='exams-video-link-btn';for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4(`'+links[count].text+'`,`'+countofpdf+'`,`'+action+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}
if(jQuery('.book-detail-page-link').length){var links=document.querySelectorAll('.book-detail-page-link');var countofpdf=0;var action='book-detail-page-link';for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4(`'+links[count].text+'`,`'+countofpdf+'`,`'+action+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}
if(jQuery('a.signup-button.practice-now-bt-link-single-book').length){var links=document.querySelectorAll('a.signup-button.practice-now-bt-link-single-book');var countofpdf=0;for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');var event_attrs=links[count].getAttribute('data-event');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4_for_books_pages(`'+links[count].text+'`,`'+countofpdf+'`,`'+event_attrs+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}
if(jQuery('.exams-boclip-link-btn').length){var links=document.querySelectorAll('.exams-boclip-link-btn');var countofpdf=0;for(var count=0;count<links.length;count++){var url=links[count].getAttribute('href');var event_attrs=links[count].getAttribute('data-event');if(url){links[count].setAttribute('href','javascript:void(0);');links[count].setAttribute('onclick','open_login_popup_for_exam_4_for_books_pages(`'+links[count].text+'`,`'+countofpdf+'`,`'+event_attrs+'`)');links[count].setAttribute('target','_self');links[count].setAttribute('data-title',links[count].text);pdf_links_arr.push(url);countofpdf++}}}}
document.addEventListener('DOMContentLoaded',function(){check_if_user_logged_in()},!1);function check_if_device_getting_otp(){if("OTPCredential" in window){window.addEventListener("DOMContentLoaded",(e)=>{const ac=new AbortController();navigator.credentials.get({otp:{transport:["sms"]},signal:ac.signal,}).then((otp)=>{var number=otp.code;output=[];sNumber=number.toString();for(var i=0,len=sNumber.length;i<len;i+=1){output.push(+sNumber.charAt(i))}
jQuery('.otpinput input#first').val(output[0]);jQuery('.otpinput input#second').val(output[1]);jQuery('.otpinput input#third').val(output[2]);jQuery('.otpinput input#fourth').val(output[3]);jQuery('.otpinput input#fifth').val(output[4]);jQuery('.otpinput input#sixth').val(output[5]);procced_mob_otp_common_widget()}).catch((err)=>{console.log(err)})})}}
document.addEventListener('DOMContentLoaded',function(){check_if_device_getting_otp()},!1);function get_event_label_name(label=''){let label_name;switch(label){case 'sec1':label_name=jQuery('.sect1scheema').html();break;case 'sec2':label_name=jQuery('.sect2scheema').html();break;case 'sec3':label_name=jQuery('.sect3scheema').html().replace('&amp;','&');break;case 'sec4':label_name=jQuery('.sect4scheema').html();break;case 'sec5':label_name=jQuery('.sect5scheema').html();break;case 'sec6':label_name='Exams Learn Ad Banner';break;case 'sec7':label_name='Exams Practice Ad Banner';break;case 'sec8':label_name='Exams Test Ad Banner';break;default:label_name=label}
return label_name}
function calling_book_event(ev1,ev2,ev3,ev4,ev5,ev6,ev7,ev8,ev9,ev10,ev11,ev12){var secdata=get_event_label_name(ev4);var ename=jQuery('#examname').html();var cname=jQuery('.evt_catname').html();var enamedata=null;var cnamedaat=(ename!='')?jQuery('#examname').html():null;var cnamedaat=(ename!='')?jQuery('#evt_catname').html():null;if(ev12==1){window.dataLayer=window.dataLayer||[];dataLayer.push({"event":ev1,"eventCategory":ev2,"eventAction":ev3,"eventLabel":secdata,"ScreenName":ev5,"exam_name":enamedata,"exams_category":cnamedaat,"source":'exams_web',"locale":'en',"is_paid":!1,"org_id":'1',"content_id":ev6,"content_type":ev7,"content_subtype":ev8,"title":ev9,"source":'exams_web',"feature_name":ev10,"module_name":ev11,"video_source":null,"userId":'guest',})}else{window.dataLayer=window.dataLayer||[];dataLayer.push({"event":ev1,"eventCategory":ev2,"eventAction":ev3,"eventLabel":secdata,"ScreenName":ev5,"exam_name":enamedata,"exams_category":cnamedaat,"source":'exams_web',"locale":'en',"is_paid":!1,"org_id":'1',"content_id":ev6,"content_type":ev7,"content_subtype":ev8,"title":ev9,"source":'exams_web',"feature_name":ev10,"module_name":ev11,"userId":'guest',})}}