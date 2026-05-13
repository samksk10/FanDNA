/**
 * AWS Configuration Module
 * 
 * This module provides AWS SDK configuration for the FanDNA application.
 * Currently configured with placeholder values for development.
 * 
 * For production, update with actual AWS credentials and region.
 * 
 * AWS Services Used:
 * - Amazon Bedrock: AI text generation for fan narratives
 * - DynamoDB: Fan profile storage
 * - Lambda: API processing (optional)
 */

export const awsConfig = {
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'eu-west-1',
    credentials: {
        // For development: use environment variables or IAM role
        // In production: use AWS Amplify or proper credential management
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
};

/**
 * DynamoDB Configuration
 */
export const dynamoDbConfig = {
    tableName: process.env.DYNAMODB_TABLE_NAME || 'FanDNA-Profiles',
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'eu-west-1',
};

/**
 * Bedrock Configuration
 */
export const bedrockConfig = {
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'eu-west-1',
    modelId: process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-sonnet-20240229-v1:0',
};

/**
 * Amplify Configuration (optional)
 */
export const amplifyConfig = {
    aws_project_region: process.env.NEXT_PUBLIC_AWS_REGION || 'eu-west-1',
    aws_cognito_region: process.env.NEXT_PUBLIC_AWS_REGION || 'eu-west-1',
    aws_user_pools_id: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
};

export default awsConfig;
