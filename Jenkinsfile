pipeline {
    agent any

    environment {
        PATH = "/Users/raksmeychann/.nvm/versions/node/v20.18.3/bin:/usr/local/bin:/usr/bin:$PATH"
    }

    stages {
        stage('Check node') {
            steps {
                sh 'which node'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rakcomputing/jenkinsapp.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
