#!/bin/bash

# 1. define parameters
export AWS_DEFAULT_REGION=ap-southeast-2 # default to sydney
APPLICATION_NAME=$2
ACCOUNT_NAME=$3

# sanity check
if [[ -z "$APPLICATION_NAME" ]]; then
    read -p "Please specify an application name: " APPLICATION_NAME
fi

if [[ -z "$ACCOUNT_NAME" ]]; then
    read -p "Please specify an account name: " ACCOUNT_NAME
fi

export AWS_PROFILE=$ACCOUNT_NAME
AWS_ACCOUNTID=$(aws sts get-caller-identity --query 'Account' --output text)
AWS_REPOSITORY_NAME=${AWS_ACCOUNTID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${APPLICATION_NAME}-ecr

# 2. build docker image locally
read -n 1 -p "Build docker image? (y/n) " key
echo ""

if [ "$key" == "y" ]; then
    docker build -t ${AWS_REPOSITORY_NAME}:latest -f Dockerfile .
else
    exit 1
fi

# 3. push docker image to ecr
read -n 1 -p "Push docker image to ${ACCOUNT_NAME}? (y/n) " key
echo ""

if [ "$key" == "y" ]; then
    aws ecr get-login-password | docker login --username AWS --password-stdin ${AWS_ACCOUNTID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com
    docker push ${AWS_REPOSITORY_NAME}:latest
else
    exit 1
fi