pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rakcomputing/jenkinsapp.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
