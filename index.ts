import http from 'http' 
import getSecret from './libs/getSecret'
exports.handler = async (event, context, callback) => {

return getSecret('test')
//   const options = {
//     hostname: 'localhost',
//     port: 2773,
//     path: '/secretsmanager/get?secretId=test',
//     method: 'GET',
//     agent: new http.Agent({keepAlive:true}),
//     headers: {
//       "X-Aws-Parameters-Secrets-Token": process.env.AWS_SESSION_TOKEN 
//     }
//   }
//   // var req = http.request(options, function (res) {
//   //   return res
//   // });
//   //
//   // return req
//
  //k
// const req = http.request(options, (res) => {
//   res.setEncoding('utf8');
//   let rawData = '' 
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//     rawData += chunk
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//     callback("please", "work")
//     callback(null, { rawdata: rawData, req: req, str: "just a string" })
//   });
// });
//
// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });
//
// req.end();
// callback(null, JSON.stringify(req))




  // try{
  //   const req: any = await makeGetRequest(options)
  //   req.end()
  //   return req
  // }
  // catch (error){
  //   throw error
  // }

  
  // const retArr = []
  //
  // let items = event
  // items.forEach(record => {
  //   const title = record.title;
  //   retArr.push(title);
  // });
  // return retArr;
}

async function makeGetRequest(options: object){ 
  return new Promise((resolve, reject) => {
  http.request(options, (res) => {
    if(res.statusCode === 200){
      let rawData = '';
      res.on('data', (d) => {
        console.log("hello 0000000000000000000")
        rawData += d;
      });
      res.on('end', () => {
          resolve(rawData)
      });
    } 
    else {
        reject(new Error(`Failed to fetch notices. Status code: ${res.statusCode}`))
    }
  })
    .on('error', (e) => {
      reject(e)
    })
  })
}
