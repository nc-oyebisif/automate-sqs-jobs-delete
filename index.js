const AWS = require('aws-sdk');
const sqs = new AWS.SQS({
    region: "us-east-1"
});


exports.handler = (event, callback) => {
sqs.listQueues({QueueNamePrefix: ""}, (err, data) => {

    if(err){
        console.log(err)
    }
 
     for(let i = 0; i < data.QueueUrls.length; i++){

        sqs.deleteQueue({QueueUrl: data.QueueUrls[i]}, (deleteErr, deleteData) => {
                if(deleteErr){
                    console.log(deleteErr)
                }else{
                    console.log(deleteData)
                }
        })
            console.log(data.QueueUrls)
     }
 
  })
}
