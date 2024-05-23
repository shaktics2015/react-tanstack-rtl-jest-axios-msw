import http from "./base";

// const  get  = async () => {
//     return await http.get('todos/1');
//  }

const get = async(postId: string)=>{

    const {data} = await http.get(`todos/${postId}`);
    return data;
}

 export {get};
