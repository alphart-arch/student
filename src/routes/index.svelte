<script  module="context" lang="ts">
	let yes=false;
	let Show="Show List";

/*
	let name=""
    let email=""

    async function submitit(){
        console.log("name is :", name)
        console.log("password is :", email)
       
        let res = await fetch( 'formdata' ,{
        method : "post",
        headers: {        
        'content-type': 'application/json'
        },
        body : JSON.stringify({
            name : "name",
            password : "password"
        })        
    })// fetch
    let results = res.json()
        return {
            status : 200,
            body : results
        }

    } */

	/*function validateInput(){
		let surveyForm = document.getElementById('surveyForm');
		// @ts-ignore
		let invalid = surveyForm.querySelectorAll('input:invalid');

		hasError = invalid.length != 0;
		errMessage = "All the fileds are mandatory";		
	}

    
	function Continue() {
		submitted = true;
		validateInput();
		if (hasError == false) {
			isSuccessVisible = true;

			setTimeout(function(){
					isSuccessVisible = false;
				}, 4000);
		}
	}*/
	/*let name="asd";
	let error="";
	let message="";
	const submitform = async()=>{
		try{

			const submit=await fetch("/student/register",{
				method:"POST",
				body:JSON.stringify({
					name,
				}),
			});
			const data = await submit.json();
			message=data;
		}
		catch(err){
			error=err;
		}

	};*/
</script>

<h1>Registration Form</h1>	
<!--
{#if hasError == true}
		<p class="error-alert">{errMessage}</p>
{:else}
	{#if isSuccessVisible}	
		<p class="sucess-alert" transition:fade={{duration:150}}>Data updated successfully</p>
	{/if}
{/if}
-->
<div class="container">
<form action="/student.json" method="post" >
	<table>
		<tr>
			<td>Name:</td>
			<td><input type="text"  aria-label="name" name="text" class="form-control" placeholder="Name" required ></td>
		</tr>
    <tr>
		<td>Age:</td>
		<td><input type="number" aria-label="age" name="age" placeholder="Enter a Age" required></td>
	</tr>
    <tr>
		<td>Email</td>
		<td><input type="email" aria-label="email" name="email" placeholder="Email" required ></td>
	</tr>
    <tr>
		<td>DOB:</td>
		<td><input type="date" name="dob" placeholder="Date of Birth" required></td>
	</tr>
    <tr>
		<td>Address:</td>
		<td><input type="text" name="address" placeholder="Address" required> </td>
	</tr>
  <tr>
	  
	  <td><label >
		<input type="checkbox" bind:checked={yes}>{Show}</label>
	  </td>
	  <td><button type="submit"
		>SUBMIT</button></td>
  </tr>  
  

</table>
</form>
	
</div>
<!--<button  on:click|preventDefault={Continue}>Submit</button>-->