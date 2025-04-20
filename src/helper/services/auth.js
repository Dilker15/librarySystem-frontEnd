import axios from 'axios'

export class Auth{

    static async login(email,password){
        const url = import.meta.env.VITE_URL+"/auth/login";
        try{
            const response = await axios.post(url,{email,password});
            const {token,userData} = response.data;
            return {token,userData,status:response.status,res:true}
        }catch(error){
            console.log(error);
            return {status:400,res:false}
        }
    }
}