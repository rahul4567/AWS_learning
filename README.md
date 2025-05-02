# AWS_learning

AWS

## AWS Labda function using AWS CLI

- Install AWS CLI (Vesrion depends on the which version of operating system has been used)
- Name of the handler is importanat
- aws congigure (command typed in terminal)
- need to provide AWS access key ID, AWS Secret Access key, AWS region, Output Format(JSON)
- we need to create ZIP file after writting lambda function like(basicHelloWorld.py/basicHelloWorld.js)
- you can zip file or container for deployment
- command to deploy for python
  aws lambda create-function --function-name "basicHelloworld" --runtime "python3.7" --zip-file "fileb://basicHelloworld.zip --handler basicHelloworld.lambda_handler: --role:"arn:aws:iam:62<role need to be copy aws>

  ## command to depoy the zip file using aw cli

  aws lambda create-function \
   --function-name my-function \
   --runtime python3.9 \
   --role arn:aws:iam::961913816082:role/lambda_execution_role \
   --handler lambda-function.lambda_handler \
   --zip-file fileb://my-function.zip \
   --region us-east-1

## command to invoke the function cli

aws lambda invoke --function-name my-function --payload '{"name": "KodeKloud"}' output.txt --region us-east-1

above command was giving this error Invalid base64: "{"name": "KodeKloud"}"

echo -n '{"name": "KodeKloud"}' | base64
eyJuYW1lIjogIktvZGVLbG91ZCJ9

aws lambda invoke --function-name my-function --payload 'eyJuYW1lIjogIktvZGVLbG91ZCJ9' output.txt --region us-east-1

#creating Canary function using blue-print
