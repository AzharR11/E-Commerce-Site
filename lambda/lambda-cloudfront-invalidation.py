import boto3

def invalidate_cloudfront_cache(event, context):
    # Get the bucket name and object key from the S3 event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']
    
    # Construct the CloudFront distribution ID
    cloudfront_distribution_id = 'E6VLSROTC1F4H'
    
    # Create a CloudFront client
    cloudfront_client = boto3.client('cloudfront')
    
    # Create an invalidation batch
    invalidation_paths = {
        'Quantity': 1,
        'Items': [
            '/{}'.format(object_key)  # Invalidate the specific object
        ]
    }
    
    # Invalidate the CloudFront cache
    response = cloudfront_client.create_invalidation(
        DistributionId=cloudfront_distribution_id,
        InvalidationBatch={
            'Paths': invalidation_paths,
            'CallerReference': 'lambda-invalidation-{}'.format(object_key)
        }
    )
    
    print(response)

    # Return a response
    return {
        'statusCode': 200,
        'body': 'Cache invalidation triggered for CloudFront distribution: {}'.format(cloudfront_distribution_id)
    }