//window load method or page load event
var contactList =[{"sNo":1,"fName":"joy","lName":"Rony","emailNo":"pinku","mobileNo":"Tinku","address":"Diltu",}];
var textValid = true;
var emailValid = true;
var phonenoValid = true;
		window.onload = function() {
			contactList.length = 0;
			for ( var i = 0, len = localStorage.length; i < len; i++ ) {
					var object = JSON.parse(localStorage.getItem('contactList'+i));
					contactList.push(object);
				}
			localStorage.length=0;
			localStorage.clear();
				for( var j = 0 ; j < contactList.length ; j++)
					{
						localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
					}
			
		  var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Email</th><th>Mobil</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>0)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" data-key="' + test + '" onclick="editContact( this )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
		};

//window load method or page load event


// validation 
	//text field validation
			function validateEmail(emailObj) {
				//	email = validateText(emailObj);
					if (/\S+@\S+\.\S+/.test(emailObj) == false) {
					//  clearField(emailObj);
					 
					  return false;
					}
					else
						return true;
				}
	
	    function validatePhoneNumber(phoneNumberObj) {
			//phoneNumber = validateText(phoneNumberObj);
			if (/^[0-9()-]+$/.test(phoneNumberObj) == false) 
			{
			//clearField(phoneNumberObj);
			return false;
			}
			else
			{
				return true;
			
        }
    }
	//text field validation
//validation

  //Delete Contact
		function deleteContact(element){
				var test = element.getAttribute("data-key");
				var contNo = new contactNumber('output');
				contNo.deleteContact(test);
		}
		
  //Delete Contact
  
  
  // search Contact
			function searchContact(){
				var contNo = new contactNumber('output');
		    	contNo.searchContact($('#mobileNoSr').val());
				
			}
  // search Contact
  
  // Edit contact
		function editContact(element){
			$('.popupDiv').css("display","block");
			$('.fromDiv').css("display","none");
			$('.gridDiv').css("display","none");
			var test = element.getAttribute("data-key");
			var contNo = new contactNumber('output');
			contNo.editContact(test);
		}
  
  //Edit Contact
  
  // Update Contact
		function updateContact(){
				var contNo = new contactNumber('output');
		    	contNo.updateContact($('#hiddenSNo').val());
			}
  //Update contact
  
  // Add contact
			function addContact(){
				var contNo = new contactNumber('output');
						if(validateEmail($('#email').val() ))
						{
							if(validatePhoneNumber($('#mobileNo').val()))
							{

								contNo.addContact($('#fName').val(),$('#lName').val(),$('#email').val(),$('#mobileNo').val(),$('#address').val() );
							}
							else
								{
									
									 alert('Please Enter Only Number in MobileNo field');
								}

						}
						else
						{
							alert('Please Enter valid Email in Email Field');
							//console.log('hmm');
							//$("#email").focus();
						}
			
				
			}
	// Add contact
//Refresh Contact
		function refreshContact(){
			location.reload();
			
		}
//Refresh Contact

// Clear local memory
		function clearContact(){
			localStorage.clear();
			location.reload();
			
		}

// Clear local memory


// module pattern in JavaScript 
			var contactNumber = function(output){
				var person = document.getElementById(output);
				//console.log(person);
				
		        return {
					
			//Add Method Start
			//Add Method Start
					addContact: function(fName,lName,email,mobileNo,address) {
						contactList.length = 0;
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var object = JSON.parse(localStorage.getItem('contactList'+i));
								contactList.push(object);
								
								}
						var contNo = {
							sNo:localStorage.length,
							fName:fName,
							lName:lName,
							email:email,
							mobileNo:mobileNo,
							address:address
						};
							contactList.push(contNo);
							localStorage.clear();
							localStorage.length=0;
							for( var j = 0 ; j < contactList.length ; j++)
							{
								localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
							}
							var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Email</th><th>Mobil</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>=1)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" data-key="' + test + '" onclick="editContact( this )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
						
					},
					
			//Add Method End
			//Add Method End	
					
					
			//Delete Method Start
			//Delete Method Start
			
					deleteContact:function(test){
						var index = 0;
						for (var i = 0; i < localStorage.length; i++){
								var key = localStorage.key(i);
								if(key === test)
								index = i;
								}
						  contactList.length = 0;
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var object = JSON.parse(localStorage.getItem('contactList'+i));
								contactList.push(object);
								}
							contactList.splice (index, 1);
							localStorage.clear();
							localStorage.length=0;
							for( var j = 0 ; j < contactList.length ; j++)
							{
								localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
							}
							var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Email</th><th>Mobil</th><th>Address</th><th>Action</th></tr>";
								if(localStorage.length>=1)
								{
									
									for ( var i = 0, len = localStorage.length; i < len; i++ ) {
										var test = 'contactList'+i ;
										var object = JSON.parse(localStorage.getItem('contactList'+i));
										var test = 'contactList'+i ;
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName + 
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.mobileNo + 
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" data-key="' + test + '" onclick="editContact( this )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
											
										}										
									}			

					document.getElementById("output").innerHTML = stringHtml;	
					},	
					
			//Delete Method End
			//Delete Method End
				
				
			//Edit Method start
			//Edit Method start
					
					editContact:function(test){
								var object = JSON.parse(localStorage.getItem(test));
								$('#hiddenSNo').val(object.sNo);
								$('#ufName').val(object.fName);
								$('#ulName').val(object.lName);
								$('#uemail').val(object.email);
								$('#umobileNo').val(object.mobileNo);
								$('#uaddress').val(object.address);
								
	
					},	
					
			//Edit Method End
			//Edit Method End
					
					
			//Search Method Start
			//Search Method Start
			
					searchContact: function(mobNo) {				
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var test = 'contactList'+i ;
								var object = JSON.parse(localStorage.getItem(test));
								var stringHtml=" <tr><th>SN</th><th>First-name</th><th>Last-name</th><th>Email</th><th>Mobil</th><th>Address</th><th>Action</th></tr>";
								var mblN=""+object.mobileNo;
								
								if( mblN == mobNo)
									{	
										console.log(mobNo);
								        console.log(mblN);
										stringHtml += "<tr>"+"<td>"+ i +"<td>" + object.fName + 
										"</td>" + "<td>" + object.lName +  
										"</td>" + "<td>" + object.email +
										"</td>" +"<td>" + object.mobileNo +
										"</td>" +"<td>" + object.address + 
										"</td>" + "<td>" + 
										'<button id = "editButton" data-key="' + test + '" onclick="editContact( this )" type="button">Edit</button>' +
										'<button id = "deleteButton" data-key="' + test + '" onclick ="deleteContact(this)" type="button">Delete</button> </td></tr>' ;
										break;
									}

								}

						person.innerHTML = stringHtml;	

					},
					
			//Search Method End
			//Search Method End
			
			//Update Method Start
			//Update Method Start
			
					updateContact: function(slNo) {	
					contactList=[];
						for ( var i = 0, len = localStorage.length; i < len; i++ ) {
								var object = JSON.parse(localStorage.getItem('contactList'+i));
								console.log(contactList);
								contactList.push(object);
							}
							var contNo = {
							sNo:slNo,
							fName:$('#ufName').val(),
							lName:$('#ulName').val(),
							email:$('#uemail').val(),
							mobileNo:$('#umobileNo').val(),
							address:$('#uaddress').val()
						};
						if(validateEmail($('#uemail').val() ))
						{
							if(validatePhoneNumber($('#umobileNo').val()))
							{
								contactList.splice(slNo, 1);
								contactList.splice(slNo, 0, contNo);
							

						        localStorage.clear();
							    for( var j = 0 ; j < contactList.length ; j++)
							    {
								localStorage.setItem("contactList"+localStorage.length++,JSON.stringify(contactList[j]));
							    }
								alert('Update Successfully');
							}
							else
								{
									
									 alert('Please Enter Only Number in MobileNo Field');
								}

						}
						else
						{
							alert('Please Enter valid Email in Email Field');
							//console.log('hmm');
							//$("#email").focus();
						}
					}
					

					
				};
				

			};
			



