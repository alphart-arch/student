import type { RequestHandler } from "@sveltejs/kit"

//let students = [];
export const get:RequestHandler<{} ,FormData> = (request) => {
    return{
        status:200,
        body:request.body.get("name")
        
    }
}
/*
export  const post:RequestHandler<{} , FormData> = (request) =>{
    console.log(request.body.get("name"));
    return{
        status:200,
        body:request.body.get("name")
    }

}*/
export const post:RequestHandler<{},FormData> = async(request) =>{
     console.log(request.body.get("text"));
    //const data = await request.formData()
    //const { username, ...} = Object.fromEntries(data)
    //const body= await event.request.FormData
    //console.log()
    return{
        status:200,
        body:request.body.get("text")

    }
}

    

























    /*student.push(request.body.get("name"));
    student.push(request.body.get("age"));
    student.push(request.body.get("email"));
    student.push(request.body.get("dob"));
    student.push(request.body.get("address"));*/
   /* return{
        status:303,
        headers:{
            location:"/"
        }
}*/

/*
export async function post (request) {
    let formfields = await request.json()    
    console.log("login.js name :", formfields.name)
    console.log("login.js password", formfields.email)

    return {
        status : 200,
        headers: {        
            'content-type': 'application/json'
        },
        body : {
            message : "login form submitted the login credentials",
            name : formfields.name,
            email : formfields.email,

        }
    }

}*/

/*export const post= async( request:any)=> {
    let formfields=await request.json()
    console.log(formfields.name)
    return{
        status:200,
        body:formfields.nameg
    }
}

export const post:RequestHandler<{},FormData>=(request)=>{
    return{
        status:200,
        body:request.body.get("name")
    }
}

export async function post({request}){
const data=await request.json()
console.log(data.name)
return{
    status:200
}
}

export const post = (request) =>{
    const formBody=JSON.parse(request.body)
    const name=formBody.name
    const email=formBody.email
    console.log(name,email)
    return{
        body:{
            name,
            email
        },
    };
};*/
/*
export const post =(request)=>{

    const formbody=JSON.parse(request.body)
    const names=formbody.name
    return{
        status:200,  
    body:{
         names,
    },
};
};*/